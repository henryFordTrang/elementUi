<template>
  <div id="app" ref="app">
    <template style="width:100px;height:200px;background-color:red;display:block" v-slot:footer>
      <div>dddddd5555555ddd</div>
    </template>
    <div>
    <div id="test" ref="test">
      <div class="block"></div>
      <div class="block"></div>
      <div class="block1"></div>
      <nancy v-bind="$attrs" :name="name" @nancyClick="nancyClick1"></nancy>
    </div>
    </div>
    <div class="btnWra">
    <el-button type="primary" @click="show=!show">transition</el-button>
    </div>
    <transition name="fade" enter-active-class="enter" @enter="entering" @leave="leaving">
      <div ref="remove1" id="remove1" v-if="show">sdfdsjlkfjdslkfjds</div>
    </transition>
  </div>
</template>
<script>
export default {
  data(){
    return{
      name:'my name is nancy',
      xxx:'',
      show:true,
      enterClass:'enter'
    }
  },
  methods:{
    entering(){
      console.log('entering.......')
    },
    leaving(){
      console.log('leaving.......')
    },
    nancyClick1(i){
      alert(i)
    },
    add(){
      var _this=this;
      var div=document.createElement('div');
      div.id='remove1';
      div.innerHTML='sdfdsjlkfjdslkfjds'
      div.$refs='33333'
      console.log($('#remove1'))
      _this.$refs.app.appendChild(div)
    },
    remove(){
      var _this=this;
      _this.$refs.remove1.remove()
      console.log(_this.$refs.remove1,$('#remove1'))
    }
  },
  created(){
    
  },
  mounted(){
   
  }
};
</script>
<style scoped>
#test{
  width:500px;
  height:500px;
  display:flex;
  flex-flow:row;
  flex-wrap:wrap;
  background-color:yellowgreen;
}
#test .block{
  width:50%;
  height:100px;
  border:1px solid white;
}
#test .block1{
  background-color:orange;
  width:100%;
}
.fade-enter-active, .fade-leave-active {
  /* transition: opacity 1.5s */
}
.fade-enter, .fade-leave-active {
  /* opacity: 0.5 */
}
#remove1{
  background-color:greenyellow;
  height:200px;
  width:300px;
}
.btnWra{
  width:100px;
  height:70px;
}
.enter,.leave{
  /* transition: all 2s;
  transform: translateX(150px) translateY(100px) scale(0.8) rotate(360deg); */
  animation:mymove 2s;
}

@keyframes mymove
{
from {background-color:orangered}
to {background-color:orange}
}

</style>