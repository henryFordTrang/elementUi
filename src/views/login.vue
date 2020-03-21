<template>
  <div id="app">
    <div class="sub">
      <div>
        <el-input placeholder="请输入内容" v-model="input1">
          <template slot="prepend">Http://</template>
        </el-input>
      </div>
      <div>
        <el-input placeholder="请输入内容" type="password" v-model="input2">
          <template slot="prepend">Http://</template>
        </el-input>
      </div>
      <div>
          
      <el-button type="primary" @click="gotopage">登录</el-button>
      <el-button type="primary" @click="clearRedis">删除</el-button>
      
      </div>
    </div>
  </div>
</template>
<script>
import md5 from 'js-md5';
export default {
    data(){
        return{
            input1:'',
            input2:'',
        }
    },
    methods:{
        clearRedis(){
          var _this=this;
          var url=_this.$util.basicUrl() + "/admin/delete";
          _this.$axios.post(url).then((rsp)=>{
                       
          })
        },
        gotopage(){
            var _this=this;
            var url= _this.$util.basicUrl() + "/admin/login";
            var xxx=md5(_this.input2);
            console.log(_this.input1,_this.input2,'---------',md5(_this.input2))
            var mes=Object.assign({
                phonenumber:_this.input1,
                upassword:_this.input2
            })
            console.log(mes)
            console.log(md5(_this.input2))
            //upassword:md5(_this.input2)
            _this.$axios.post(url,mes).then((rsp)=>{
               
            })
        },        
    },
    mounted(){
     
    }
};
</script>
<style scoped>
#app {
  width: 100%;
  height: 100%;
  padding: 0;
  display: flex;
  flex-flow: column;
  justify-content: center;
}
.sub {
  width: 300px;
  height: 150px;
  margin-left: calc(50% - 150px);
  display:flex;
  flex-flow:column;
  justify-content:space-between;
}
</style>