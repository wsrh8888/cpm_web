<template>
  <div>
    <!-- 拿创建时间比，就可以得到最新的包版本 -->
    <div class="project">
      <h2 class="title">vue-cli</h2>
      <div class="project_info">
        <span>1.2.6</span>
        <span>•Publish</span>
        <span>a month ago</span>
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
          <Version></Version>
        </div>
      </div>
      <div class="menu__right">
        
      </div>
    </div>
  </div>
</template>

<script>
import Version from './version.vue'
export default {
  name: '22',
  components: {
    Version
  },
  data() {
    return {
      a: '222'
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
