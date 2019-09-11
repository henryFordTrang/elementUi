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
                <el-menu-item
                  v-for="(item,index1) in position"
                  :key="index1"
                  :index="'navi'+index1"
                >{{item.posName}}</el-menu-item>
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
    return {
      data: [],
      position: [
        { posName: "前端", posCode: 1 },
        { posName: "后端", posCode: 2 },
        { posName: "架构师", posCode: 3 },
        { posName: "美工", posCode: 4 },
        { posName: "测试", posCode: 5 },
        { posName: "项目经理", posCode: 6 },
        { posName: "安卓", posCode: 7 },
        { posName: "产品经理", posCode: 8 }
      ],
      value1: [1, 3]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    navi(index, indexPath) {
      var _this = this;
      _this.data = [];
      _this.value1 = [];
      var recyNum = 5 + parseInt(index.replace(/[^0-9]/gi, ""));
      for (var i = 0; i < recyNum; i++) {
        var obj = Object.assign({
          key: i,
          label: "选项" + i,
          disabled: false
        });
        _this.data.push(obj);
      }
    },
    positionInit() {
      var _this = this;
      for (var i = 0; i < 5; i++) {
        var obj = Object.assign({
          key: i,
          label: "选项" + i,
          disabled: false
        });
        _this.data.push(obj);
      }
    }
  },
  mounted() {
    var _this = this;
    _this.positionInit();
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