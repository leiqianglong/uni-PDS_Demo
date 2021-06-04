<template>
	<view>
		<button @click="baseChartClick(0)">基本图表</button>
		<button @click="baseChartClick(1)">饼状图</button>
	</view>
</template>

<script>
	export default {

		data() {
			return {
				
			}
		},

		methods: {
			baseChartClick(e){
				if(e == 0){
					uni.navigateTo({
						url:'./demo/baseChart/baseChart'
					})
				}else if(e == 1){
					uni.navigateTo({
						url:'./demo/pieChart/pieChart'
					})
				}
				
			}
		}
	}
</script>

<style>
	.charts-box {
		margin-top: 10px;
		width: 100%;
		height: 300px;
	}
</style>
