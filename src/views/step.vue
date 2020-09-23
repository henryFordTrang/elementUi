<template>
  <div id="app">
    <el-table id="table" :data="tableData" border :cell-style="bg" style="width: 100%">
      <el-table-column fixed prop="date.value" label="日期" width="150"></el-table-column>
      <el-table-column prop="name.value" label="姓名" width="120"></el-table-column>
      <el-table-column prop="province.value" v-if="auth.indexOf('eee')>-1" label="省份" width="120"></el-table-column>
      <el-table-column prop="city.value" label="市区" width="120"></el-table-column>
      <el-table-column prop="address.value" label="地址" width="300"></el-table-column>
      <el-table-column prop="zip.value" label="邮编" width="120"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="scope.row.zip.status=!scope.row.zip.status" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
          {{auth.indexOf('dd')}}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
// import FileSaver from "file-saver";
// import XLSX from "xlsx";
export default {
  name: 'eee',
  data () {
    return {
      tableData: [
        {
          date: { value: '2016-05-03', status: true },
          name: { value: '王小虎', status: false },
          province: { value: '上海', status: true },
          city: { value: '普陀区', status: false },
          address: { value: '上海市普陀区金沙江路 1518 弄', status: false },
          zip: { value: '200333', status: false }
        },
        {
          date: { value: '2016-05-03', status: false },
          name: { value: '王小虎', status: false },
          province: { value: '上海', status: true },
          city: { value: '普陀区', status: false },
          address: { value: '上海市普陀区金沙江路 1518 弄', status: false },
          zip: { value: '200333', status: false }
        },
        {
          date: { value: '2016-05-03', status: true },
          name: { value: '王小虎', status: true },
          province: { value: '上海', status: false },
          city: { value: '普陀区', status: false },
          address: { value: '上海市普陀区金沙江路 1518 弄', status: true },
          zip: { value: '200333', status: false }
        },
        {
          date: { value: '2016-05-03', status: true },
          name: { value: '王小虎', status: true },
          province: { value: '上海', status: false },
          city: { value: '普陀区', status: false },
          address: { value: '上海市普陀区金沙江路 1518 弄', status: false },
          zip: { value: '200333', status: true }
        }
      ],
      auth: []
    }
  },

  methods: {
    handleClick (row) {
      console.log(row)
    },
    getUploadUrl () {
      return ''
    },
    // 生成图片上传路径
    computeUrl () {
      var _this = this
      _this.uploadUrl = _this.$util.basicUrl() + '/api/ts/fileUpload1'
    },
    queryRoleAuth () {
      var _this = this
      var url = _this.$util.basicUrl() + '/api/ts/queryRoleAuth'
      var mes = Object.assign({
        role: 'mng'
      })
      _this.$axios.post(url, mes).then((rsp) => {
        rsp.data.forEach((item, index) => {
          console.log(index, item.authoriCode, '===========')
          _this.auth.push(item.authoriCode)
        })
        console.log(_this.auth)
        if (_this.auth.indexOf('ddd')) {
          console.log(888)
        }
      })
    },
    bg (a) {
      var _this = this
      var index = a.columnIndex
      var count = 0
      var name1 = ''
      for (var key in _this.tableData[a.rowIndex]) {
        if (count === index) {
          name1 = key
        }
        count++
      }
      switch (name1) {
        case 'name':
          if (_this.tableData[a.rowIndex].name.status) {
            return 'background-color:yellowgreen'
          }
          break
        case 'city':
          if (_this.tableData[a.rowIndex].city.status) {
            return 'background-color:yellowgreen'
          }
          break
        case 'date':
          if (_this.tableData[a.rowIndex].date.status) {
            return 'background-color:yellowgreen'
          }
          break
        case 'province':
          if (_this.tableData[a.rowIndex].province.status) {
            return 'background-color:yellowgreen'
          }
          break
        case 'address':
          if (_this.tableData[a.rowIndex].address.status) {
            return 'background-color:yellowgreen'
          }
          break
        case 'zip':
          if (_this.tableData[a.rowIndex].zip.status) {
            return 'background-color:yellowgreen'
          }
          break
      }
    },
    exportExcel () {
      //   var wb = XLSX.utils.table_to_book(document.querySelector("#table"));
      //   var wbout = XLSX.write(wb, {
      //     bookType: "xlsx",
      //     bookSST: true,
      //     type: "array"
      //   });
      //   try {
      //     FileSaver.saveAs(
      //       //Blob 对象表示一个不可变、原始数据的类文件对象。
      //       //Blob 表示的不一定是JavaScript原生格式的数据。
      //       //File 接口基于Blob，继承了 blob 的功能并将其扩展使其支持用户系统上的文件。
      //       //返回一个新创建的 Blob 对象，其内容由参数中给定的数组串联组成。
      //       new Blob([wbout], { type: "application/octet-stream" }),
      //       //设置导出文件名称
      //       "sheetjs.xlsx"
      //     );
      //   } catch (e) {
      //     if (typeof console !== "undefined") console.log(e, wbout);
      //   }
      //   return wbout;
    }
  },
  mounted () {
    this.queryRoleAuth()
  }
}
</script>
<style lang="less" scoped>
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
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.el-dialog__wrapper /deep/ .dialog-footer {
  display: inline-block;
}

.el-dialog__wrapper /deep/ .avatar-uploader {
  text-align: left;
}
.el-dialog__wrapper /deep/ .el-form-item__content {
  text-align: left;
}
</style>
