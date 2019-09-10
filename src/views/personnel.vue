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
              :data="tableData2"
              tooltip-effect="dark"
              style="width: 100%"
              @select="chooseUser1"
              @row-click="chooseUser"
              @selection-change="handleSelectionChange"
            >
              <el-table-column type="selection" width="55"></el-table-column>            
              <el-table-column prop="url" label="相片" show-overflow-tooltip>
                <template slot-scope="scope">
                  <img :src="scope.row.url" alt="" class="image">
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
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
         <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
         <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData2:[],
      tableData3: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      multipleSelection: [],
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: '120px',
    };
  },
  methods: {
    handleSelectionChange(selection) {},
    chooseUser(row, event, column) {
      this.$refs.multipleTable.clearSelection();
      this.$refs.multipleTable.toggleRowSelection(row);
    },
    chooseUser1(selection, row) {
      this.$refs.multipleTable.clearSelection();
      this.$refs.multipleTable.toggleRowSelection(row);
    },
    createUser() {
      console.log("create");
      var _this=this;
      _this.dialogFormVisible=true;
    },
    modifyUser() {
      console.log("modify");
    },
    delUser() {
      console.log("delete");
    },
    loadUsers(){
      var _this=this;
      for(var i=0;i<20;i++){
        var obj=Object.assign({
          name:'henry'+i,
          phone:'13509852145',
          dpt:'dev',
          post:'mechandiser',
          url:'http://dev.bp.zcloudtechs.cn/resource//xxtz/20190723174445402.jpeg'
        })
        _this.tableData2.push(obj);
      }
    },
  },
  mounted(){
    var _this=this;
    _this.loadUsers();
  },
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
.el-dialog__wrapper /deep/ .el-dialog /deep/ .el-dialog__footer{
  height:70px;
}
.image{
  height:40px;
  vertical-align:middle;
}
</style>