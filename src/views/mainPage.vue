<template>
    <div id="app">
<div class="background">
<div class="line"></div>
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">处理中心</el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3">消息中心</el-menu-item>
  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>

</el-menu>

            <el-row>

  <el-button type="primary" plain @click="access">主要按钮</el-button>

</el-row>

            <div class="loginBox">
                <div class="loginInner1">
                    <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
                <div class="loginInner">
                    <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>

            </div>

        </div>
    </div>
</template>
<script>
export default {
  name: 'mp',
  data () {
    return {
      input: '',
      activeIndex: '1',
      activeIndex2: '1'
    }
  },

  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },

    access () {
      this.$router.replace('./home')
    }
  },
  mounted () {

  }
}
</script>
<style scoped>
.el-input__inner{
    width:100px;
    height:100px;
    margin-top:100px;
}

.el-button{
    margin-right:10px;
}
</style>
