<template>
  <div id="app">
    <el-container>
      <el-header>超星学习通</el-header>
      <el-container>
        <el-aside width="200px">
          <div class="brandContainer">
            <div class="brand" @click="brand1">
              <img src="../assets/logo.png" alt class="brandLogo" />
            </div>

            <div class="brand" @click="brand2">
              <img src="../assets/logo.png" alt class="brandLogo" />
            </div>

            <div class="brand" @click="brand3">
              <img src="../assets/logo.png" alt class="brandLogo" />
            </div>
          </div>
        </el-aside>
        <el-main>
          <el-table :data="tableData5" style="width: 100%" :cell-style="advanceMark">
            <el-table-column type="expand">
              <template slot-scope="props">
                <!-- <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="商品名称">
                    <span>{{ props.row.name }}</span>
                  </el-form-item>
                  <el-form-item label="商品名称">
                    <span>{{ props.row.name }}</span>
                  </el-form-item>
                  <el-form-item label="商品名称">
                    <span>{{ props.row.name }}</span>
                  </el-form-item>
                  <el-form-item label="商品名称">
                    <span>{{ props.row.name }}</span>
                  </el-form-item>
                  <el-form-item label="商品名称">
                    <span>{{ props.row.name }}</span>
                  </el-form-item>
                  <el-form-item label="商品名称">
                    <span>{{ props.row.name }}</span>
                  </el-form-item>
                  <el-form-item label="商品名称">
                    <span>{{ props.row.name }}</span>
                  </el-form-item>
                  <el-form-item label="商品名称">
                    <span>{{ props.row.name }}</span>
                  </el-form-item>
                  <el-form-item label="所属店铺">
                    <span>{{ props.row.shop }}</span>
                  </el-form-item>
                  <el-form-item label="商品 ID">
                    <span>{{ props.row.id }}</span>
                  </el-form-item>
                  <el-form-item label="店铺 ID">
                    <span>{{ props.row.shopId }}</span>
                  </el-form-item>
                  <el-form-item label="商品分类">
                    <span>{{ props.row.category }}</span>
                  </el-form-item>
                  <el-form-item label="店铺地址">
                    <span>{{ props.row.address }}</span>
                  </el-form-item>
                  <el-form-item label="商品描述">
                    <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="props.row.desc" :autosize="{minRows:2,maxRows:4}"></el-input>
                  </el-form-item>
                </el-form>-->
                <div class="innerWrapper">
                  <div class="block">
                    <div class="left">
                      <el-input placeholder="请输入内容" v-model="props.row.name">
                        <template slot="prepend">商品名称://</template>
                      </el-input>
                    </div>
                    <div class="right">
                      <el-input placeholder="请输入内容" v-model="props.row.shop">
                        <template slot="prepend">Http://</template>
                      </el-input>
                    </div>
                  </div>
                  <div class="block">
                    <div class="left">
                      <el-input placeholder="请输入内容" v-model="props.row.shopId">
                        <template slot="prepend">Http://</template>
                      </el-input>
                    </div>
                    <div class="right">
                      <el-input placeholder="请输入内容" v-model="props.row.category">
                        <template slot="prepend">Http://</template>
                      </el-input>
                    </div>
                  </div>
                  <div class="block">
                    <div class="left">
                      <el-input placeholder="请输入内容" v-model="props.row.address">
                        <template slot="prepend">Http://</template>
                      </el-input>
                    </div>
                    <div class="right">
                      <el-input placeholder="请输入内容" v-model="props.row.desc">
                        <template slot="prepend">Http://</template>
                      </el-input>
                    </div>
                  </div>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="商品 ID" prop="id"></el-table-column>
            <el-table-column label="商品名称" prop="name"></el-table-column>
            <el-table-column label="描述" prop="desc"></el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import {} from 'iview'
export default {
  name: 'home',
  data () {
    return {
      input10: '',
      tableData5: [
        {
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        },
        {
          id: '12987123',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        },
        {
          id: '12987125',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        },
        {
          id: '12987126',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }
      ]
    }
  },
  methods: {
    detailCheck (index) {
      console.log(index)
      this.$router.replace('./step')
    },
    procedure (index) {
      console.log(this.$refs.hey[index].innerHTML)
      console.log(this.$refs.hey[index])
    },
    toBitch () {
      this.$router.replace('./mainPage')
    },
    advanceMark (row) {
      if (
        row.rowIndex === 3 &&
        row.columnIndex <= 1 &&
        row.row.id === '12987126' &&
        row.row.shopId === '10333'
      ) {
        console.log(row.rowIndex, row.columnIndex, row.row.address, row.row.id)
        return 'background-color:orange'
      }
    },
    brand1 () {},
    brand2 () {},
    brand3 () {},
    create () {
      this.$router.replace('./mainPage')
    }
  },
  mounted () {}
}
</script>
<style scoped>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.el-table__body-wrapper /deep/ table tbody /deep/ tr /deep/ td.el-table__expanded-cell {
  padding: 20px 0;
}
.innerWrapper {
  width: 100%;
  min-height: 50px;
}
.innerWrapper .block {
  width: 100%;
  height: 50px;

  border-bottom: 1px solid white;
  display: flex;
  flex-flow: row;
}
.innerWrapper .block:last-child {
  border: none;
}
.innerWrapper .block .left {
  width: 50%;
  background-color: orange;
}
.innerWrapper .block .right {
  width: 50%;
  background-color: yellowgreen;
}
/* body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  } */
</style>
