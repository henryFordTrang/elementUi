<template>
  <div id="app">
    <el-container>
      <el-header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-row class="tac">
            <el-col :span="24">
              <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                @select="navi1"
                background-color="#d3dce6"
                text-color="#000000"
                active-text-color="#ffd04b"
              >
                <el-menu-item
                  v-for="(item,index1) in position"
                  :key="index1"
                  :index="'navi'+item.posCode"
                >{{item.posName}}</el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>
          <el-transfer v-model="value1" :data="data" @change="permitSet" :titles="['禁止', '开放']"></el-transfer>
          <input type="button" @click="ddd" value="phillipine" class="routeSecure">
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import md5 from 'js-md5'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      data: [
        {
          key: 1,
          label: 'lo',
          disabled: false
        },
        {
          key: 2,
          label: 'henry',
          disabled: false
        },
        {
          key: 3,
          label: 'trang',
          disabled: false
        },
        {
          key: 4,
          label: 'Quyen',
          disabled: false
        },
        {
          key: 5,
          label: 'Vivian',
          disabled: false
        },
        {
          key: 6,
          label: 'Thao',
          disabled: false
        },
        {
          key: 7,
          label: 'Nhung',
          disabled: false
        }
      ],
      value1: [],
      position: [
        { posName: '前端', posCode: 1 },
        { posName: '后端', posCode: 2 },
        { posName: '架构师', posCode: 3 },
        { posName: '美工', posCode: 4 },
        { posName: '测试', posCode: 5 },
        { posName: '项目经理', posCode: 6 },
        { posName: '安卓', posCode: 7 },
        { posName: '产品经理', posCode: 8 }
      ],
      curRole: ''
    }
  },
  computed: mapGetters(['encryptItm', 'encryptVal']),
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    navi1 (index, indexPath) {
      var _this = this
      _this.curRole = index.replace('navi', '')
      _this.qryAuthByRole()
    },
    positionInit () {
      var _this = this
      var url = _this.$util.basicUrl() + '/api/ts/qryAllRole'
      _this.$axios.post(url).then(rsp => {
        _this.position = []
        _this.curRole = rsp.data[0].code
        _this.qryAuthByRole()
        rsp.data.forEach((item, index) => {
          var unit = Object.assign({
            posName: item.name,
            posCode: item.code
          })
          _this.position.push(unit)
        })
      })
      var url1 = _this.$util.basicUrl() + '/api/ts/qryAllAuth'
      _this.$axios.post(url1).then(rsp => {
        _this.data = []
        rsp.data.forEach((item, index) => {
          var unit = Object.assign({
            key: item.code,
            label: item.name,
            disabled: false
          })
          _this.data.push(unit)
        })
      })
    },
    qryAuthByRole () {
      var _this = this
      var url = _this.$util.basicUrl() + '/api/ts/queryRoleAuth'
      var mes = Object.assign({
        role: _this.curRole
      })
      _this.$axios.post(url, mes).then(rsp => {
        _this.value1 = []
        rsp.data.forEach((item, index) => {
          _this.value1.push(item.authoriCode)
        })
      })
    },
    permitSet (live, direction, key) {
      var _this = this
      var addUrl = _this.$util.basicUrl() + '/api/ts/addAuth'
      var delUrl = _this.$util.basicUrl() + '/api/ts/deleteAuth'
      // _this.value1和 live 两个集合去除重复元素
      var mes = []
      key.forEach((item, index) => {
        var unit = Object.assign({
          role: _this.curRole,
          auth: item
        })
        mes.push(unit)
      })
      switch (direction) {
        case 'left':
          _this.permitAjax(delUrl, mes)
          break
        case 'right':
          _this.permitAjax(addUrl, mes)
          break
      }
    },
    // 两个数组去重
    arr_quchong (arr1, arr2) {
      var temp = [] // 临时数组1
      var temparray = [] // 临时数组2
      for (var i = 0; i < arr2.length; i++) {
        temp[arr2[i]] = true // 巧妙地方：把数组B的值当成临时数组1的键并赋值为真
      }
      for (var i1 = 0; i1 < arr1.length; i1++) {
        if (!temp[arr1[i1]]) {
          temparray.push(arr1[i1])
        }
      }
      return temparray.join(',') + ''
    },
    permitAjax (url, mes) {
      var _this = this
      _this.$axios.post(url, mes).then(rsp => {})
    },
    ddd () {
      this.$router.replace('/personnel')
    }
  },
  mounted () {
    var _this = this
    _this.positionInit()
    var raw = $.now() + '池钟地'
    sessionStorage.setItem('sessionId', md5(raw))
    console.log(_this.encryptVal, '-------------')
    if (_this.encryptVal !== 'yes') {
      _this.$router.replace('/login')
    }
  }
}
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
.routeSecure{
  outline:none;
  background-color:white;
  border:1px solid #eee;
  width:100px;
  height:70px;
  line-height:70px;
}
</style>
