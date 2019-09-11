<template>
  <div id="app">
    <el-container>
      <el-header></el-header>
      <el-main>
        <div class="wrapper">
          <div class="operation">
            <el-button type="success" @click="createUser">新增</el-button>
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
              <el-table-column prop="url" label="相片" width="120" show-overflow-tooltip>
                <template slot-scope="scope">
                  <img :src="scope.row.url" alt class="image" />
                </template>
              </el-table-column>
              <el-table-column prop="name" label="姓名" width="120"></el-table-column>
              <el-table-column prop="phone" label="手机号" show-overflow-tooltip></el-table-column>
              <el-table-column prop="dpt" label="部门" show-overflow-tooltip></el-table-column>
              <el-table-column prop="post" label="职务" show-overflow-tooltip></el-table-column>
            </el-table>
          </div>
        </div>
      </el-main>
    </el-container>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <div class="dialogBlock">
        <div class="hblock">
          <div class="semiL">
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
          </div>
          <div class="semiR">
            <el-input placeholder="请输入密码" v-model="name">
              <template slot="prepend">姓名:</template>
            </el-input>
          </div>
        </div>
        <div class="hblock">
          <div class="semiL">
            <el-input placeholder="请输入姓名" v-model="name">
              <template slot="prepend">姓名:</template>
            </el-input>
          </div>
          <div class="semiR">
            <el-input placeholder="请输入手机" v-model="mobile">
              <template slot="prepend">手机号:</template>
            </el-input>
          </div>
        </div>
        <div class="hblock">
          <div class="semiL">
            <el-select v-model="department" clearable placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="semiR">
            <el-select v-model="position" clearable placeholder="请选择">
              <el-option
                v-for="item in postOption"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="createCfm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      usersList: [],
      multipleSelection: [],
      dialogFormVisible: false,
      formLabelWidth: "120px",
      dialogVisible: false,
      uploadUrl: "",
      imageUrl: "",
      name: "",
      mobile: "",
      department: "",
      position: "",
      options: [
        {
          value: "黄金糕",
          label: "黄金糕"
        },
        {
          value: "双皮奶",
          label: "双皮奶"
        },
        {
          value: "蚵仔煎",
          label: "蚵仔煎"
        },
        {
          value: "龙须面",
          label: "龙须面"
        },
        {
          value: "北京烤鸭",
          label: "北京烤鸭"
        }
      ],
      postOption: [
        {
          value: "前端",
          label: "前端"
        },
        {
          value: "后端",
          label: "后端"
        },
        {
          value: "销售",
          label: "销售"
        },
        {
          value: "产品经理",
          label: "产品经理"
        },
        {
          value: "售后",
          label: "售后"
        }
      ],
      selected: "",
      selectedIndex: "",
      dialogType: 0 //0 新增 1 修改
    };
  },
  methods: {
    //选择用户--点击table row
    chooseUser(row, event, column) {
      this.$refs.multipleTable.clearSelection();
      this.$refs.multipleTable.toggleRowSelection(row);
      this.selected = row;
    },
    //选择用户--点击checkbox
    chooseUser1(selection, row) {
      this.$refs.multipleTable.clearSelection();
      this.$refs.multipleTable.toggleRowSelection(row);
      this.selected = row;
    },
    //修改用户信息
    modifyUser() {
      var _this = this;
      if (_this.selected) {
        _this.selectedIndex = _this.listPosition();
        _this.dialogType = 1;
        _this.dialogFormVisible = true;
        _this.name = _this.selected.name;
        _this.mobile = _this.selected.phone;
        _this.department = _this.selected.dpt;
        _this.position = _this.selected.post;
        _this.imageUrl = _this.selected.url;
      } else {
        _this.$message.warning("请选择一个用户");
      }
    },
    //删除用户
    delUser() {
      var _this = this;
      if (_this.selected) {
        _this.selectedIndex = _this.listPosition();
        _this.usersList.splice(_this.selectedIndex, 1);
        _this.selected = "";
      } else {
        _this.$message.warning("请选择一个用户");
      }
    },
    //根据手机查询用户对象的角标
    listPosition() {
      var _this = this;
      var feedback = "";
      _this.usersList.forEach((item, index) => {
        if (item.name == _this.selected.name) {
          feedback = index;
        }
      });
      return feedback;
    },
    //新增用户
    createUser() {
      var _this = this;
      _this.dialogType = 0;
      _this.dialogFormVisible = true;
    },
    //新建用户--确认
    createCfm() {
      var _this = this;
      if (_this.name && _this.mobile && _this.department && _this.position) {
        _this.dialogFormVisible = false;
        var obj = Object.assign({
          name: _this.name,
          phone: _this.mobile,
          dpt: _this.department,
          post: _this.position,
          url:
            "http://dev.bp.zcloudtechs.cn/resource//xxtz/20190723174445402.jpeg"
        });
        if (_this.dialogType == 0) {
          _this.usersList.unshift(obj);
        } else if (_this.dialogType == 1) {
          _this.usersList.splice(_this.selectedIndex, 1, obj);
          _this.$refs.multipleTable.clearSelection();
        }
        _this.paramInit();
      } else {
        _this.$message.error("信息填写不完整");
      }
    },
    //参数初始化
    paramInit() {
      var _this = this;
      _this.selected="";
      _this.selectedIndex="";
      _this.name = "";
      _this.mobile = "";
      _this.department = "";
      _this.position = "";
    },
    //计算table高度
    computeHeight() {
      var block = $(".table");
      return block[0] ? block[0].clientHeight : 700;
    },
    //加载用户信息
    loadUsers() {
      var _this = this;
      for (var i = 0; i < 20; i++) {
        var obj = Object.assign({
          name: "henry" + i,
          phone: 13509852145 + i,
          dpt: "dev",
          post: "mechandiser",
          url:
            "http://dev.bp.zcloudtechs.cn/resource//xxtz/20190723174445402.jpeg"
        });
        _this.usersList.push(obj);
      }
    },
    //生成图片上传路径
    computeUrl() {
      var _this = this;
      console.log(window.location.href);
      _this.uploadUrl = _this.$util.basicUrl() + "/testing/usersImg";
      console.log(_this.uploadUrl);
    },
    handleAvatarSuccess(res, file) {
      //this.imageUrl = URL.createObjectURL(file.raw);
      console.log(res, file);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  },
  mounted() {
    var _this = this;
    _this.loadUsers();
    _this.computeUrl();
  }
};
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