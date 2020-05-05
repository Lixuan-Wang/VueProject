<template>
 <div class="header">
    <span class="title">{{ this.title }}</span>
    <span class="timer">{{ this.time }}</span>
 </div>
</template>

<script>
export default {
 props: ["titlename"],
 data() {
  return {
      title: '大数据研究部api监控',
      time: this.getTimer()
  }
 },
 components: {
     
 },
 methods: {
    getTimer() {			
        var date = new Date()		
        var y = date.getFullYear()		
        var m = date.getMonth() + 1			
        var d = date.getDate()		
        var w = date.getDay()	
        var w1 = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']			
        var h = date.getHours()			
        h = h < 10 ? '0' + h : h		
        var min = date.getMinutes()		
        min = min < 10 ? '0' + min : min		
        var s = date.getSeconds()		
        s = s < 10 ? '0' + s : s
        return y + '年' + m + '月' + d + '日' + h + ':' + min + ':' + s + ' ' + w1[w]
    }
 },
 mounted() {
    this.timer = setInterval( () => {
        this.time = this.getTimer()
    },1000)
 },
 beforeDestroy() {
     clearInterval(this.timer)
 }
}
</script>

<style scoped lang="scss">
.header {
    color: #ffffff;
    padding: 10px 0;
    .title {
        font-size: 28px;
        font-weight: bold;
    }
    .timer {
        padding-left: 1300px;
    }
}
</style>
