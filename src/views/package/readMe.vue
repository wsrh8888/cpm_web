<template>
  <div style="white-space: pre-wrap;" class="readMe" v-html="value">
  </div>
</template>

<script>
export default {
  computed: {
    parseHtml() {
      
      return this.value.replace(/\n/gm, '<br>')
    }
    
  },
  props: {
    value: {
      type: String
    }
  }
}
</script>

<style lang="less">
.readMe {
  white-space: pre-wrap;
}
</style>