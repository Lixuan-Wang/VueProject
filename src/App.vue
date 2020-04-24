<template>
  <div id="app">
    <div>{{ title }}</div>
    <dv-decoration-10 style="width:100%;height:5px;"></dv-decoration-10>
    <MyEcharts></MyEcharts>
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MyEcharts from './components/Echarts.vue'

export default {
  name: 'App',
  components: {
    MyEcharts
    // HelloWorld
  },
  data() {
    return {
      title: '柱状图'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
