<template>
  <div class="apiProject">
    <Header></Header>
    <dv-decoration-10 style="width:100%;height:5px;"></dv-decoration-10>
    <div class="content">
      <div class="row">
        <div class="gridCell">
          <dv-border-box-7>
            <dv-decoration-7 style="width:300px;height:30px;color:#fff;margin:-10px auto 0;font-size:18px;">
              API项目信息
            </dv-decoration-7>
            <MyEcharts :number="titlename[0]"></MyEcharts>
          </dv-border-box-7>
        </div>
        <div class="gridCell">
          <dv-border-box-7>
            <dv-decoration-7 style="width:300px;height:30px;color:#fff;margin:-10px auto 0;font-size:18px;">
              调用次数排名
            </dv-decoration-7>
            <commonRanking :titlename="'5'"></commonRanking>
          </dv-border-box-7>
        </div>
        <div class="gridCell">
          <dv-border-box-7>
            <dv-decoration-7 style="width:300px;height:30px;color:#fff;margin:-10px auto 0;font-size:18px;">
              API项目发布统计
            </dv-decoration-7>
            <commonRanking :titlename="'5'"></commonRanking>
          </dv-border-box-7>
        </div>
      </div>
      <div class="row">
        <div class="gridCell">
          <dv-border-box-7>
            <dv-decoration-7 style="width:300px;height:30px;color:#fff;margin:-10px auto 0;font-size:18px;">
              API项目架构图
            </dv-decoration-7>
            <MyEcharts :number="titlename[0]"></MyEcharts>
          </dv-border-box-7>
        </div>
        <div class="gridCell">
          <dv-border-box-7>
            <dv-decoration-7 style="width:300px;height:30px;color:#fff;margin:-10px auto 0;font-size:18px;">
              近七天API调用次数统计
            </dv-decoration-7>
            <MyEcharts :number="titlename[0]"></MyEcharts>
          </dv-border-box-7>
        </div>
        <div class="gridCell">
          <dv-border-box-7>
            <dv-decoration-7 style="width:300px;height:30px;color:#fff;margin:-10px auto 0;font-size:18px;">
              API名称
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
import commonRanking from './../components/commonRanking.vue'

export default {
  name: 'apiProject',
  components: {
    MyEcharts,
    Header,
    commonRanking
    // HelloWorld
  },
  data() {
    return {
      title: '柱状图',
      titlename: ['0','1','2','3','4']
    }
  },
  
}
</script>

<style scoped lang="scss">
.apiProject {
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
.apiProject:before {
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
  flex: 0 0 50%;
}
</style>
