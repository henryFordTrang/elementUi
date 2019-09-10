<template>
    
</template>
<script>
export default {
    name:"eee",
    data(){
        return{
            searchHistory:[],
        }
    },

    methods:{
        
        saveSearchHistory(data){
        var _this=this;
        _this.searchHistory=$.parseJSON(localStorage.searchHistory);
        console.log(_this.searchHistory);
        if(_this.searchHistory.length<10){//小于num
          _this.searchHistory.forEach(function(item,index){
            console.log(item,index);
            if(item==data){
              _this.searchHistory.remove(index);
            }
          })
        _this.searchHistory.unshift(data);
        }else{
           _this.searchHistory.remove(9);
           _this.searchHistory.unshift(data);
        }
        console.log(_this.searchHistory);
        localStorage.searchHistory=JSON.stringify(_this.searchHistory);
      }

        }
   
}
</script>
<style scoped>
@import url("//unpkg.com/element-ui@2.4.11/lib/theme-chalk/index.css");
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>

