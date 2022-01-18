<template>
  <div>
    <!-- 拿创建时间比，就可以得到最新的包版本 -->
    <div class="project" v-if="projectInfo">
      <h2 class="title">{{projectInfo.name}}</h2>
      <div class="project_info">
        
         <span>•{{projectInfo.authorName}}</span>
        <span>•{{projectInfo.typeName}}</span>
        <span>•{{projectInfo.languageName}}</span>
        <span>•a month ago</span>
      </div>
    </div>
    <div class="menu">
      <div class="list">
        <div class="readme">Readme</div>
        <div class="imports">imports</div>
        <div class="version">Versions</div>
      </div>
      <div class="menu__left">
        <div>
          <Version :versions="versionList"></Version>
          <ReadMe :value="xx"></ReadMe>
        </div>
      </div>
      <div class="menu__right"></div>
    </div>
  </div>
</template>

<script>
import Version from './version.vue'
import ReadMe from './readMe.vue'
import { getAllVersionsApi, getCpmProjectApi } from '@/api/index'
export default {
  components: {
    Version,
    ReadMe
  },
  data() {
    return {
      a: '222',
      xx: 'xx',
      projectInfo: {},
      versionList: []
    }
  },
  mounted() {
    this.getAllVersions()
    this.getprojectInfo()
  },
  methods: {
    
    // 获取某个project的详细信息
    getprojectInfo() {
      getCpmProjectApi({
        uuid: '66ac6113-f76f-4854-952d-936c0621e01d'
      })
      .then((data) => {
        if (data.code === 0) {
          this.projectInfo = data.data.list[0]
        }
      })
    },
    //获取全部的版本信息
    getAllVersions() {
      getAllVersionsApi({
        projectId: '66ac6113-f76f-4854-952d-936c0621e01d'
      }).then((data) => {
        if (data.code === 0) {
          this.versionList = data.result
        }
      })
    }
  }
}
</script>

<style lang="less">
.project {
  width: 100%;
  font-size: 24px;
  box-sizing: border-box;
  .title {
    margin-top: 10px;
    margin-bottom: 0;
    font-size: 24px;
    box-sizing: border-box;
  }
  .project_info {
    font-size: 14px;
    box-sizing: border-box;
  }
}
.menu {
  width: 1000px;
  margin: 0 auto;
  .list {
    display: flex;
    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 200px;
      height: 44px;
      cursor: pointer;
      border-bottom: 2px solid #fff;
    }
    .readme {
      color: #886701;
      border-bottom-color: #ffcd3a;
      &:hover {
        background: rgb(255, 249, 229);
      }
    }
    .imports {
      color: rgb(41, 0, 138);
      border-color: #8956ff;
      &:hover {
        background: rgb(237, 229, 255);
      }
    }
    .version {
      color: rgb(20, 106, 144);
      border-color: #29abe2;
      &:hover {
        background: rgb(233, 246, 252);
      }
    }
  }
  .menu__left {
    width: 66.66%;
  }
}
</style>
