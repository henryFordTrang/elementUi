<template>
  <div id="app">
    <el-container>
      <el-header></el-header>
      <el-container>
        <el-aside width="200px">
          <el-row class="tac">
            <el-col :span="24">            
              <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                @select="navi"
                background-color="#d3dce6"
                text-color="#000000"
                active-text-color="#ffd04b"
              >
              <el-menu-item v-for="(item,index1) in 5" :key="index1" :index="'navi'+index1">选项{{index1}}</el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>
          <el-transfer v-model="value1" :data="data" :titles="['禁止', '开放']"></el-transfer>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>      
<script>
export default {
  data() {
    // const generateData = _ => {
    //   const data = [];
    //   for (let i = 1; i <= 15; i++) {
    //     data.push({
    //       key: i,
    //       label: `备选项 ${i}`,
    //       disabled: i % 4 === 0
    //     });
    //   }
    //   return data;
    // };
    return {
      data: [],
      value1: [1,3]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    navi(index,indexPath){
      var _this=this;
      _this.data=[];
      _this.value1=[];
      var recyNum=5+parseInt(index.replace(/[^0-9]/ig,""));
      for(var i=0;i<recyNum;i++){
        var obj=Object.assign({
          key:i,
          label:'选项'+i,
          disabled:false
        })
        _this.data.push(obj);
      }
    },
    
  },
  mounted(){
      var _this=this;
      for(var i=0;i<5;i++){
        var obj=Object.assign({
          key:i,
          label:'选项'+i,
          disabled:false
        })
        _this.data.push(obj);
      }
      
    }
};
</script>
<style lang="less" scoped>
html,
body,
#app {
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-container {
  height: 100%;
}
body > .el-container {
  margin-bottom: 40px;
}

.el-main /deep/ .el-transfer-panel__item .el-checkbox__input {
  left: 20px;
}
</style>