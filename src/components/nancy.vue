<template>
    <div id="nancy">
        <div>{{nancyPara}}</div>
        <div>{{$attrs.name}}</div>
        <el-button type="primary" value="testButton" @click="testing">主要按钮</el-button>
    </div>
</template>
<script>
export default {
  props: {
    nancyPara: {
      type: String,
      default: 'i am nancy'
    }
  },
  methods: {
    testing () {
      this.$emit('nancyClick', 'information from nancy')
    }
  }
}
</script>
<style scoped>

</style>
