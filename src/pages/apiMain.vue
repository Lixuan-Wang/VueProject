<template>
  <div class="apiMain">
    <div class="menu">
      <el-row class="tac">
        <el-col>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <Header></Header>
    <dv-decoration-10 style="width:100%;height:5px;"></dv-decoration-10>
    <div class="content">
      <div class="row">
        <div class="gridCell">
          <dv-border-box-7>
            <dv-decoration-7 style="width:300px;height:30px;color:#fff;margin:-10px auto 0;font-size:18px;">
              重点API监控
            </dv-decoration-7>
            <MyEcharts :number="titlename[0]"></MyEcharts>
          </dv-border-box-7>
        </div>
        <div class="gridCell u-1of3">
          <dv-border-box-7>
            <FirstPagePanel></FirstPagePanel>
          </dv-border-box-7>
        </div>
        <div class="gridCell">
          <dv-border-box-7>
            <dv-decoration-7 style="width:300px;height:30px;color:#fff;margin:-10px auto 0;font-size:18px;">
              访问用户TOP10
            </dv-decoration-7>
            <commonRanking :titlename="'5'"></commonRanking>
          </dv-border-box-7>
        </div>
        <div class="gridCell">
          <dv-border-box-7>
            <!-- <dv-decoration-7 style="width:300px;height:30px;color:#fff;margin:-10px auto 0;font-size:18px;">
              公网API
            </dv-decoration-7> -->
            <commonTable :titlename="titlename[0]"></commonTable>
          </dv-border-box-7>
        </div>
      </div>
      <div class="row">
        <div class="gridCell">
          <dv-border-box-7>
            <!-- <dv-decoration-7 style="width:300px;height:30px;color:#fff;margin:-10px auto 0;font-size:18px;">
                重点API名称
            </dv-decoration-7> -->
            <commonTable :titlename="titlename[2]"></commonTable>
          </dv-border-box-7>
        </div>
        <div class="gridCell">
          <dv-border-box-7>
            <dv-decoration-7 style="width:300px;height:30px;color:#fff;margin:-10px auto 0;font-size:18px;">
              24小时区间次数统计
            </dv-decoration-7>
            <MyEcharts :number="titlename[0]"></MyEcharts>
          </dv-border-box-7>
        </div>
        <div class="gridCell">
          <dv-border-box-7>
            <dv-decoration-7 style="width:300px;height:30px;color:#fff;margin:-10px auto 0;font-size:18px;">
              API访问用户数统计
            </dv-decoration-7>
            <MyEcharts :number="titlename[0]"></MyEcharts>
          </dv-border-box-7>
        </div>
        <div class="gridCell">
          <dv-border-box-7>
            <dv-decoration-7 style="width:300px;height:30px;color:#fff;margin:-10px auto 0;font-size:18px;">
              API调用次数TOP10
            </dv-decoration-7>
            <commonRanking :titlename="'5'"></commonRanking>
          </dv-border-box-7>
        </div>
      </div>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MyEcharts from './../components/Echarts.vue'
import Header from './../components/header.vue'
import FirstPagePanel from './../components/firstPagePanel.vue'
import commonTable from './../components/commonTable.vue'
import commonRanking from './../components/commonRanking.vue'

export default {
  name: 'apiMain',
  components: {
    MyEcharts,
    Header,
    FirstPagePanel,
    commonTable,
    commonRanking
    // HelloWorld
  },
  data() {
    return {
      title: '柱状图',
      titlename: ['0','1','2','3','4'],
      isCollapse: true,
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
    }
  }
}
</script>

<style scoped lang="scss">
.apiMain {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  position: relative;
  box-sizing: border-box;
  width: 1970px;
  height: 710px;
}
.apiMain:before {
  content: "";
  width: 100%;
  height: 100%;
  background: url("../assets/background.png");
  background-size: 100%;
  top: 0;
  left: 0;
  position: absolute;
  filter: blur(4px);
  z-index: -2;
}
.menu {
  top: 60px;
  left: 0;
  position: absolute;
  z-index: 5;
}
.el-menu-vertical-demo {
  background-color: rgba(255, 255, 255, 0.6);
}
.content {
  display: flex;
  flex-wrap: wrap;
}
.row {
  flex-basis: 100%;
  display: flex;
}
.gridCell {
  flex: 1;
  padding: 10px;
}
.gridCell.u-1of3 {
  flex: 0 0 33.33%;
}
</style>
