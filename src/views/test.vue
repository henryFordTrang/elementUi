<template>
  <div id="app" ref="app">
    <template style="width:100px;height:200px;background-color:red;display:block">
    </template>
    <van-field
    v-model="message"
    rows="1"
    autosize
    label="留言"
    type="textarea"
    placeholder="请输入留言"
  />
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
    <div>
      <div id="test" ref="test">
        <div class="block"></div>
        <div class="block"></div>
        <div class="block1"></div>
        <nancy v-bind="$attrs" :name="name" :nancyPara="enterClass" @nancyClick="nancyClick1">1111</nancy>
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
  data () {
    return {
      name: 'my name is nancy',
      xxx: '',
      imageUrl: '',
      show: true,
      enterClass: 'enter',
      uploadUrl: '',
      message: ''
    }
  },
  methods: {
    // 生成图片上传路径
    computeUrl () {
      var _this = this
      // console.log(window.location.href);
      _this.uploadUrl = _this.$util.basicUrl() + '/api/ts/fileUpload1'

      // console.log(_this.uploadUrl);
    },
    handleAvatarSuccess (res, file) {
      // console.log(res,file)
      this.imageUrl = URL.createObjectURL(file.raw)
      //  console.log("2",file.raw)
      //   console.log("3",URL.createObjectURL(file.raw))
      //    console.log("22",this.imageUrl)
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
    entering () {
      // console.log("entering.......");
    },
    leaving () {
      // console.log("leaving.......");
    },
    nancyClick1 (i) {
      alert(i)

      window.location.hash = 'www.baidu.com'
    },
    add () {
      var _this = this
      var div = document.createElement('div')
      div.id = 'remove1'
      div.innerHTML = 'sdfdsjlkfjdslkfjds'
      div.$refs = '33333'
      // console.log($("#remove1"));
      _this.$refs.app.appendChild(div)
    },
    remove () {
      var _this = this
      _this.$refs.remove1.remove()
      // console.log(_this.$refs.remove1, $("#remove1"));
    }
  },
  created () {},
  mounted () {
    this.computeUrl()
  }
}
</script>
<style scoped>
#test {
  width: 500px;
  height: 500px;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  background-color: yellowgreen;
}
#test .block {
  width: 50%;
  height: 100px;
  border: 1px solid white;
}
#test .block1 {
  background-color: orange;
  width: 100%;
}
.fade-enter-active,
.fade-leave-active {
  /* transition: opacity 1.5s */
}
.fade-enter,
.fade-leave-active {
  /* opacity: 0.5 */
}
#remove1 {
  background-color: greenyellow;
  height: 200px;
  width: 300px;
}
.btnWra {
  width: 100px;
  height: 70px;
}
.enter,
.leave {
  /* transition: all 2s;
  transform: translateX(150px) translateY(100px) scale(0.8) rotate(360deg); */
  animation: mymove 2s;
}

@keyframes mymove {
  from {
    background-color: orangered;
  }
  to {
    background-color: orange;
  }
}
 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
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
</style>
