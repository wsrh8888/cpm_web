<template>
  <div>
    <div>
      <div class="version__title">Current Tags</div>
      <div class="version__list">
        <span>Version</span>
        <div class="null"></div>
        <span>Publisher</span>
        <div class="null"></div>
        <span>Published</span>
      </div>
      <div class="content">
        <div class="version__list">
          <span class="version__list--name">{{ newVersion.version }}</span>
          <div class="null"></div>
          <span>{{ newVersion.publisherName }}</span>
          <div class="null"></div>
          <span>{{ momentTime(newVersion.createdAt) }}</span>
        </div>
      </div>
    </div>
    <div>
      <div class="version__title">Version History</div>
      <div class="version__list">
        <span>Version</span>
        <div class="null"></div>
        <span>Publisher</span>
        <div class="null"></div>
        <span>Published</span>
      </div>
      <div class="content">
        <div class="version__list" v-for="item of versions" :key="item.version">
          <span class="version__list--name">{{ item.version }}</span>
          <div class="null"></div>
          <span>{{ item.publisherName }}</span>
          <div class="null"></div>
          <span>{{ momentTime(item.createdAt) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  computed: {
    
  },
  methods: {
    momentTime(value) {
      // console.log('');
      
      return moment(value).startOf().fromNow()
    }
  },
  props: {
    newVersion: {
      type: Object
    },
    versions: {
      type: Array
    }
  },
  data() {
    return {
      a: '111'
    }
  }
}
</script>

<style lang="less" scoped>
.version__title {
  border-bottom: 1px dotted #ccc;
  color: #111;
  font-size: 20px;
  padding-top: 8px;
  padding-bottom: 16px;
  margin-top: 8px;
  margin-bottom: 16px;
}
.version__list {
  display: flex;
  list-style-type: circle;
  list-style-position: outside;
  margin-bottom: 24px;
  .version__list--name {
    font-size: 16px;
    line-height: 24px;
  }
  .null {
    white-space: nowrap;
    flex: 1 1 auto;
    border-bottom: 1px dotted rgba(0, 0, 0, 0.2);
    height: 14px;
  }
}
</style>
