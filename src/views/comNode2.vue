<template>
  <div id="wrapper">
    <div class="processwrapper">
      <div class="processwrapper__aligncenter">
        <div class="processwrapper__node">
          <div class="processwrapper__node__info">
            <div class="processwrapper__node__title"></div>
            <div class="processwrapper__node__content"></div>
          </div>
          <div class="processwrapper__node__connector">
            <div class="processwrapper__node__verticalLine"></div>
          </div>
          <img
            src="@assets/images/dataCenter/add.png"
            alt=""
            class="processwrapper__node__adder"
            @click="addTerm"
          />
        </div>
      </div>
      <div class="processwrapper__aligncenter">
        <div
          class="processwrapper__chart__horizontalLine"
          ref="horiconnector"
        ></div>
      </div>
      <div class="processwrapper__aligncenter">
        <div
          class="processwrapper__chart"
          v-for="(item, index) in processList"
          :key="index"
          :ref="'process' + index"
        >
          <div class="processwrapper__chart__verticalAxis"></div>
          <div class="processwrapper__aligncenter customized__marginTop">
            <div class="processwrapper__node">
              <div class="processwrapper__node__info">
                <div class="processwrapper__node__title"></div>
                <div class="processwrapper__node__content"></div>
                <i class="el-icon-remove processwrapper__node__delete" @click="removeTerm"></i>
              </div>
              <img
                src="@assets/images/dataCenter/add.png"
                alt=""
                class="processwrapper__node__adder"
              />
            </div>
          </div>
          <div
            class="processwrapper__branchWrapper customized__marginBottem"
            v-show="true"
          >
            <div
              class="processwrapper__chart1"
              v-for="(item1, index1) in processList"
              :key="index1"
              :ref="'subprocess' + index1"
            >
              <div class="processwrapper__chart__verticalAxis"></div>
              <div class="processwrapper__node customized__marginTop">
                <div class="processwrapper__node__info">
                  <div class="processwrapper__node__title"></div>
                  <div class="processwrapper__node__content"></div>
                </div>
                <img
                  src="@assets/images/dataCenter/add.png"
                  alt=""
                  class="processwrapper__node__adder"
                />
              </div>
            </div>
          </div>
          <div class="processwrapper__aligncenter">
            <div class="processwrapper__node">
              <div class="processwrapper__node__info">
                <div class="processwrapper__node__title"></div>
                <div class="processwrapper__node__content"></div>
              </div>
              <img
                src="@assets/images/dataCenter/add.png"
                alt=""
                class="processwrapper__node__adder"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="processwrapper__aligncenter">
        <div
          class="processwrapper__chart__horizontalLine"
          ref="horiconnectorB"
        ></div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
#wrapper {
  display: flex;
  flex-flow: row;
  justify-content: center;
}
.processwrapper {
  border: 1px dashed @regular-border-color;
  display: flex;
  flex-flow: column;
  padding: 10px;
  &__aligncenter {
    display: flex;
    flex-flow: row;
    width: 100%;
    justify-content: center;
  }
  &__chart1 {
    margin-right: 50px;
    position: relative;
  }
  &__chart1:last-child {
    margin-right: 0;
  }
  &__chart {
    margin-right: 50px;
    position: relative;
    &__verticalAxis {
      height: 100%;
      width: 0px;
      position: absolute;
      left: 50%;
      border-right: 1px solid @regular-border-color;
    }
    &__connectorH {
      width: 100%;
      display: flex;
      flex-flow: row;
      justify-content: center;
    }
    &__horizontalLine {
      height: 0px;
      border-bottom: 1px solid @regular-border-color;
    }
  }
  &__chart:last-child {
    margin-right: 0;
  }
  &__node {
    width: 120px;
    height: 119px;
    display: flex;
    flex-flow: column;
    position: relative;
    &__info {
      width: 120px;
      height: 65px;
    }
    &__title {
      width: 120px;
      height: 25px;
      background-color: yellowgreen;
    }
    &__content {
      width: 120px;
      height: 40px;
      background-color: yellow;
    }
    &__delete{
        position:absolute;
        right:-8px;
        top:-8px;
        font-size:@font-size-16;
        color:@danger;
    }
    &__connector {
      width: 120px;
      height: 54px;
      display: flex;
      flex-flow: row;
      justify-content: center;
    }
    &__verticalLine {
      width: 1px;
      height: 54px;
      border-right: 1px solid @regular-border-color;
    }
    &__connectorShort {
      width: 120px;
      height: 30px;
      display: flex;
      flex-flow: row;
      justify-content: center;
    }
    &__verticalLineShort {
      width: 1px;
      height: 30px;
      border-right: 1px solid @regular-border-color;
    }
    &__adder {
      width: 24px;
      height: 24px;
      position: absolute;
      bottom: 15px;
      left: calc(50% - 12px);
    }
  }
  &__branchWrapper {
    width: auto !important;
    display: flex;
    flex-flow: row;
    position: relative;
    background-color: @white;
  }
  &__branchWrapper:before {
    content: "";
    width: calc(100% - 120px);
    border-top: 1px solid @regular-border-color;
    position: absolute;
    left: 60px;
  }
  &__branchWrapper:after {
    content: "";
    width: calc(100% - 120px);
    border-bottom: 1px solid @regular-border-color;
    position: absolute;
    left: 60px;
    bottom: 0;
  }
}
.customized {
  &__marginTop {
    margin-top: 30px;
  }
  &__marginBottem {
    margin-bottom: 30px;
  }
}
</style>
<script>
export default {
  data() {
    return {
      processList: [1, 2]
    };
  },
  methods: {
    addTerm() {
      var _this = this;
      _this.processList.push(1);
      _this.$nextTick(() => {
        _this.calcConnectorWidth();
      });
    },
    removeTerm(){
        var _this = this;
        _this.processList.splice(0,1);
        _this.$nextTick(() => {
        _this.calcConnectorWidth();
      });
    },
    calcConnectorWidth() {
      var _this = this;
      var w = _this.$refs.process0[0].offsetLeft;
      var t =
        _this.$refs["process" + (_this.processList.length - 1)][0].offsetLeft;
      _this.$refs.horiconnector.style.width = Math.abs(w - t) + "px";
      _this.$refs.horiconnectorB.style.width = Math.abs(w - t) + "px";
    }
  },
  mounted() {
    var _this = this;
    _this.calcConnectorWidth();
  }
};
</script>
