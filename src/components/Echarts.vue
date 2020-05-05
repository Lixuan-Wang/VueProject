<template>
 <div class="Echarts">
     <div :id="echarts" class="echarts" ref="echarts"></div>
 </div>
</template>

<script>
import echarts from 'echarts';
import 'echarts/theme/macarons.js';

export default {
	name: 'Echarts',
	props: ["number"],
    methods: {
		myEcharts(){
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById(this.echarts),'macarons');
		// 指定图表的配置项和数据
		// 请求后台方法
		// this.$axios.post('api/select').then(data => {
		// 	alert('222')
		// }).catch(error => {
		// 	console.dir('Error', error.message)
		// })
		var option = {
			tooltip: {},
			legend: {
				data: this.legend[this.number]
			},
			xAxis: {
			},
			yAxis: {
				data: this.xAxis[this.number]
			},
			grid: {
				left: '15%'
			},
			series: [{
				name: this.legend[this.number],
				type: 'bar',
				data: this.series[this.number]
			}]
		};
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
	}
},
mounted(){
	this.myEcharts();
},
data() {
	return {
		legend: [
			['aa'],
			['bb']
		],
		xAxis: [
			["衬衫","羊毛衫","雪纺衫"],
			["裤子","高跟鞋","袜子"]
		],
		series: [
			[5, 20, 36],
			[10, 10, 20]
		]
	}
},
components: {},
computed: {
	echarts() {
		return 'echarts' + Math.random()*100000;
	}
}
}
</script>

<style scoped lang="scss">
.Echarts {
    width: 90%;
    height: 280px;
}
.echarts {
	width: 100%;
	height: 100%;
}
</style>
