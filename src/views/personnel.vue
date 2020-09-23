<template>
  <div id="app">
    <el-container>
      <el-header>
        {{encryptItm}}{{encryptVal}}{{vuexTest}}
      </el-header>
      <el-main>
        <div class="wrapper">
          <div class="operation">
            <el-button type="success" @click="dialogVisible = true">新增</el-button>
            <el-button type="info" @click="modifyUser">修改</el-button>
            <el-button type="warning" @click="delUser">删除</el-button>
          </div>
          <div class="table">
            <el-table
              ref="multipleTable"
              :height="computeHeight()"
              :data="usersList"
              tooltip-effect="dark"
              style="width: 100%"
              @select="chooseUser1"
              @row-click="chooseUser"
            >
              <el-table-column type="selection" width="55"></el-table-column>
              <el-table-column prop="icon" label="相片" width="120" show-overflow-tooltip>
                <template slot-scope="scope">
                  <img :src="scope.row.icon" alt class="image" />
                </template>
              </el-table-column>
              <el-table-column prop="name" label="姓名" width="120"></el-table-column>
              <el-table-column prop="phone" label="手机号" show-overflow-tooltip></el-table-column>
              <el-table-column prop="role" label="部门" show-overflow-tooltip></el-table-column>
              <el-table-column prop="post" label="职务" show-overflow-tooltip></el-table-column>
            </el-table>
          </div>
          <el-button @click="gotoPage">取 消</el-button>
        </div>

      </el-main>
    </el-container>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="头像:">
          <el-upload
            class="avatar-uploader"
            :action="uploadUrl"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="姓名:">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="部门:">
          <el-select v-model="form.post" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="手机:">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="密码:">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="职务:">
          <el-input v-model="form.role"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      usersList: [],
      multipleSelection: [],
      dialogFormVisible: false,
      formLabelWidth: '120px',
      dialogVisible: false,
      uploadUrl: '',
      imageUrl: '',
      name: '',
      mobile: '',
      password: '',
      department: '',
      position: '',
      options: [
        {
          value: '黄金糕',
          label: '黄金糕'
        },
        {
          value: '双皮奶',
          label: '双皮奶'
        },
        {
          value: '蚵仔煎',
          label: '蚵仔煎'
        },
        {
          value: '龙须面',
          label: '龙须面'
        },
        {
          value: '北京烤鸭',
          label: '北京烤鸭'
        }
      ],
      postOption: [
        {
          value: '前端',
          label: '前端'
        },
        {
          value: '后端',
          label: '后端'
        },
        {
          value: '销售',
          label: '销售'
        },
        {
          value: '产品经理',
          label: '产品经理'
        },
        {
          value: '售后',
          label: '售后'
        }
      ],
      selected: '',
      selectedIndex: '',
      dialogType: 0, // 0 新增 1 修改
      form: {
        icon: '',
        name: '',
        post: '',
        phone: '',
        password: '',
        role: ''
      },
      vuexTest: ''
    }
  },
  computed: mapGetters(['encryptItm', 'encryptVal']),
  methods: {
    // 选择用户--点击table row
    chooseUser (row, event, column) {
      this.$refs.multipleTable.clearSelection()
      this.$refs.multipleTable.toggleRowSelection(row)
      this.selected = row
    },
    // 选择用户--点击checkbox
    chooseUser1 (selection, row) {
      this.$refs.multipleTable.clearSelection()
      this.$refs.multipleTable.toggleRowSelection(row)
      this.selected = row
    },
    // 修改用户信息
    modifyUser () {
      var _this = this
      if (_this.selected) {
        _this.selectedIndex = _this.listPosition()
        _this.dialogType = 1
        _this.dialogFormVisible = true
        _this.name = _this.selected.name
        _this.mobile = _this.selected.phone
        _this.department = _this.selected.dpt
        _this.position = _this.selected.post
        _this.imageUrl = _this.selected.url
      } else {
        _this.$message.warning('请选择一个用户')
      }
    },
    // 删除用户
    delUser () {
      var _this = this
      if (_this.selected) {
        _this.selectedIndex = _this.listPosition()
        _this.usersList.splice(_this.selectedIndex, 1)
        _this.selected = ''
      } else {
        _this.$message.warning('请选择一个用户')
      }
    },
    // 根据手机查询用户对象的角标
    listPosition () {
      var _this = this
      var feedback = ''
      _this.usersList.forEach((item, index) => {
        if (item.name === _this.selected.name) {
          feedback = index
        }
      })
      return feedback
    },
    // 生成图片上传路径
    computeUrl () {
      var _this = this
      _this.uploadUrl = _this.$util.basicUrl() + '/api/ts/fileUpload1'
    },
    handleAvatarSuccess (res, file) {
      console.log(res, file)
      var _this = this
      _this.imageUrl = URL.createObjectURL(file.raw)
      _this.form.icon = res
    },

    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('Avatar picture must be JPG format!')
      }
      if (!isLt2M) {
        this.$message.error('Avatar picture size can not exceed 2MB!')
      }
      return isJPG && isLt2M
    },
    gotoPage () {
      var _this = this
      _this.$router.replace('/permision')
    },

    onSubmit () {
      var _this = this
      this.dialogVisible = false
      var url = _this.$util.basicUrl() + '/api/ts/newUsers'
      _this.$axios.post(url, _this.form).then((rsp) => {
        _this.usersList = rsp.data
      })
    },
    handleClose (done) {
      done()
    },

    // 参数初始化
    paramInit () {
      var _this = this
      _this.selected = ''
      _this.selectedIndex = ''
      _this.name = ''
      _this.mobile = ''
      _this.department = ''
      _this.position = ''
    },
    // 计算table高度
    computeHeight () {
      var block = $('.table')
      return block[0] ? block[0].clientHeight : 660
    },
    // 加载用户信息
    loadUsers () {
      var _this = this
      var url = _this.$util.basicUrl() + '/api/ts/queryUsers'
      _this.$axios.post(url).then((rsp) => {
        _this.usersList = rsp.data
      })
    }

  },
  mounted () {
    var _this = this
    _this.loadUsers()
    _this.computeUrl()
    _this.vuexTest = _this.item1
  }
}
</script>
<style scoped>
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
  padding: 0;
}
.el-container {
  height: 100%;
}
body > .el-container {
  margin-bottom: 40px;
}
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  overflow:hidden;
}
.wrapper .operation {
  width: 100%;
  height: 50px;
  padding: 10px 0;
  display: flex;
  flex-flow: row;
  justify-content: left;
  align-items: center;
}
.wrapper .table {
  width: 100%;
  flex-grow: 1;
}
.test {
  width: 50px;
  height: 40px;
  margin-right: 20px;
  background-color: orangered;
  display: inline-block;
  vertical-align: middle;
}
.el-dialog__wrapper /deep/ .el-dialog /deep/ .el-dialog__footer {
  height: 70px;
}
.image {
  height: 40px;
  vertical-align: middle;
}
.dialogBlock {
  width: 100%;
  height: 300px;
}

.dialogBlock .hblock {
  width: 100%;
  height: 99px;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  border-bottom: 1px solid white;
}
.dialogBlock .hblock:last-child {
  border: none;
}
.dialogBlock .hblock .semiL {
  height: 100%;
  width: 45%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  /* background-color: orangered; */
}
.dialogBlock .hblock .semiR {
  height: 100%;
  width: 45%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  /* background-color: yellowgreen; */
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.avatar {
  width: 100px;
  height: 100px;
  display: block;
}
</style>
