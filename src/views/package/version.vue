<template>
  <div>
    <div>
      <div>Version History</div>
      <div class="version__list">
        <span>Version</span>
        <div class="null"></div>
        <span>Published</span>
      </div>
      <div class="content">
        <div class="version__list">
          <span>Version</span>
          <div class="null"></div>
          <span>Published</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.version__list {
  display: flex;
  list-style-type: circle;
  list-style-position: outside;
  margin-bottom: 12px;
  .null {
    white-space: nowrap;
    flex: 1 1 auto;
    border-bottom: 1px dotted rgba(0, 0, 0, 0.2);
    height: 14px;
  }
}
</style>
