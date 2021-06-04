<template>
	<view class="content">
		<view class="home_top">
			<!-- 第一部分两个图片 -->
			<view class="home_top_one">
				<view class="home_top_one_left">
					<image class="log_img" src=""></image>
				</view>
				<view class="home_top_one_right">
					<image class="log_img" src=""></image>
				</view>
			</view>
			<!-- 第二部分三张图片 -->
			<view class="home_top_sec">
				<view class="home_top_sec_left">
					<image class="log_img" src=""></image>
				</view>
				<view class="home_top_sec_midle">
					<image class="log_img" src=""></image>
				</view>
				<view class="home_top_sec_right">
					<image class="log_img" src=""></image>
				</view>
			</view>
		</view>
		<view class="home_line"></view>
		<!-- 底部绘图部分 -->
		<view class="home_botom">
			<!-- 设备运行情况 -->
			<view class="device">
				<view class="device_top">
					<view class="device_top_line"></view>
					<text class="device_top_text">设备运行情况</text>
				</view>
				<view class="palette_view">
					<view class="palette_view_left">
						<qiun-data-charts class="chart_view" type="ring" :chartData="chartData" background="none"
							:ontap="false" :echartsApp="true" :eopts="ringOpts" />
					</view>
					<view class="palette_view_right">
						<view class="pv_top">
							<view class="pv_top_left">
								<view class="rectSpan"></view>
							</view>
							<view class="pv_top_right">
								<text class="pv_text">正常：50</text>
							</view>
						</view>
						<view class="pv_botom">
							<view class="pv_botom_left">
								<view class="rectSpan"></view>
							</view>
							<view class="pv_botom_right">
								<text class="pv_text">异常：26</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 分割线 -->
			<view class="home_botom_line"></view>
			<!-- 故障统计 -->
			<view class="trouble">
				<view class="device_top">
					<view class="device_top_line"></view>
					<text class="device_top_text">故障统计</text>
				</view>
				<view class="palette_view2">
					<view class="palette_view_lineView1 palette_view_lineView11">
						<view class="pt_v_1">
							<text>局放</text>
						</view>
						<view class="pt_v_2">
							<cmd-progress 
							:percent="45"
							 :showInfo="false" 
							 :stroke-width="18"
							  stroke-color="linear-gradient(to right, #6e7cfc, #ae5dfc)">
							</cmd-progress>
						</view>
						<view class="pt_v_3">
							<text>45</text>
						</view>
					</view>
					<view class="palette_view_lineView1 palette_view_lineView12">
						<view class="pt_v_1">
							<text>温度</text>
						</view>
						<view class="pt_v_2">
							<cmd-progress
							:percent="80"
							 :showInfo="false" 
							 :stroke-width="18"
							  stroke-color="linear-gradient(to right, #29ffd0, #7dcafb)">
							</cmd-progress>
						</view>
						<view class="pt_v_3">
							<text>80</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import cmdProgress from "@/components/cmd-progress/cmd-progress.vue"
	export default {
		components: {
			cmdProgress
		},
		data() {
			return {
				chartData: {

					series: [{
						tooltip: {
							trigger: 'item',
							show: false,
							formatter: "{a} <br/>{b} : {c} ({d}%)"
						},
						 clickable:false,
						name: '访问来源',
						legendHoverLink: false,
						type: 'pie',
						radius: ['60%', '80%'],
						avoidLabelOverlap: false,
						selectedMode: false,
						color:["#fdba45","#f75641"],
						label: {
							show: false,
							position: 'center'
						},
						emphasis: {
							label: {
								show: false,
								fontSize: '10',
								fontWeight: 'bold'
							},
							scale: false,
							scaleSize: 0,
						},
						labelLine: {
							show: false
						},
						select: {
							label: {
								show: false,
							}
						},
						data: [{
								value: 50,
								name: '正常',
							},
							{
								value: 26,
								name: '异常',
							}
						]
					}]
				},
				ringOpts: {
					tooltip: {
						trigger: 'item'
					},
					legend: {
						show: false,
					},
				}

				// ringOpts: {
				// 	legend: {
				// 		show: false,
				// 	},
				// 	dataLabel:false,
				// 	title: {
				// 		name: "",
				// 		fontSize: 15,
				// 		color: "#ff0099",
				// 		offsetX: 0,
				// 		offsetY: 0
				// 	},
				// 	subtitle:{
				// 		name:""
				// 	},
				// 	extra:{
				// 		ring:{
				// 			ringWidth:10,
				// 			centerColor: "#fff098",
				// 			border:false,
				// 		}
				// 	},
				// 	tooltip:{
				// 		showBox:false,
				// 	}
				// }
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.home_top {
		margin-top: 10px;
		width: 100%;
		height: 440rpx;
		background-color: white;
	}

	.home_botom {
		width: 100%;
		height: 800rpx;
		background-color: white;
	}

	.home_line {
		width: 100%;
		height: 30rpx;
		background-color: #F8F8F8;
	}

	.home_top_one {
		width: 100%;
		height: 45%;
		background-color: white;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.home_top_one_left {
		margin: 10px 5px 10px 10px;
		height: 90%;
		background-color: white;
		flex: 1;
	}

	.home_top_one_right {
		margin: 10px 10px 10px 5px;
		height: 90%;
		background-color: white;
		flex: 1;
	}

	.log_img {
		width: 100%;
		height: 100%;
		background-color: #F2F2F2;
		border-radius: 8rpx;
		
	}

	.home_top_sec {
		width: 100%;
		height: 45%;
		margin-top: 10px;
		background-color: white;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.home_top_sec_left {
		/* background-color: #F0AD4E; */
		flex: 1;
		height: 100%;
		margin: 10px 5px 10px 10px;
	}

	.home_top_sec_midle {
		/* background-color: #f48d2c; */
		flex: 1;
		height: 100%;
		margin: 10px 5px 10px 5px;
	}

	.home_top_sec_right {
		/* background-color: #9b7cee; */
		flex: 1;
		height: 100%;
		margin: 10px 10px 10px 5px;
	}

	.device {
		/* background-color: #9b7cee; */
		width: 100%;
		height: 50%;
	}

	.trouble {
		/* background-color: #a2ef00; */
		width: 100%;
		height: 50%;
	}

	.home_botom_line {
		background-color: #e9e9e9;
		height: 1px;
		margin-left: 10px;
		margin-right: 10px;
	}

	.device_top {
		display: flex;
		margin-top: 20rpx;
		width: 100%;
		height: 80rpx;
	}

	.device_top_line {
		display: inline-block;
		background-color: #31966e;
		width: 4px;
		height: 20px;
		border-radius: 4px;
		margin-top: 20rpx;
		margin-left: 30rpx;
	}

	.device_top_text {
		display: inline;
		margin-left: 12rpx;
		height: 100%;
		line-height: 80rpx;
		color: #333333;
	}

	.palette_view {
		width: 100%;
		height: 300rpx;
		margin-top: 10rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.palette_view_left {
		/* background-color: #957b00; */
		margin-left: 30rpx;
		margin-right: 10rpx;
		flex: 1;
	}

	.chart_view {
		width: 100px;
	}

	.palette_view_right {
		/* background-color: #9c3c3f; */
		flex: 1;
		margin-right: 30rpx;
		margin-left: 10rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.pv_top{
		flex: 1;
		display: flex;
		margin-top: 50rpx;
		flex-direction: row;
		justify-content: center;
	}
	.pv_top_left{
		/* background-color: #559600; */
		flex: 1;
		height: auto;
		display: flex;
		align-items: center;
	}
	.pv_top_right{
		/* background-color: #4c4196; */
		flex: 4;
		height: auto;
		display: flex;
		align-items: center;
	}
	.pv_text{
		color: #333333;
		margin: 0;
	}
	.pv_botom{
		flex: 1;
		display: flex;
		margin-bottom: 50rpx;
		flex-direction: row;
		justify-content: center;
	}
	.pv_botom_left{
		/* background-color: #559600; */
		flex: 1;
		height: auto;
		display: flex;
		align-items: center;
	}
	.pv_botom_right{
		/* background-color: #4c4196; */
		flex: 4;
		height: auto;
		display: flex;
		align-items: center;
	}
	.pv_top_left >view{
		background-color: #fdba45;
	}
	.pv_botom_left >view{
		background-color: #f75641;
	}
	.rectSpan{
		width: 40rpx;
		height: 40rpx;
		background-color: #007AFF;
	}

	.palette_view2 {
		width: 100%;
		height: 300rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.palette_view_lineView1 {
		width: 95%;
		/* margin-top: 20rpx; */
		flex: 1;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	.palette_view_lineView11{
		margin-top: 30rpx;
	}
	.palette_view_lineView12{
		margin-bottom: 20rpx;
	}

	.pt_v {}

	.pt_v_1 {
		flex: 1;
		height: 100%;
		/* background-color: red; */
		text-align: center;
	}

	.pt_v_1>text {
		width: 100%;
		height: 100%;
		line-height: 140rpx;
		color: #333333;
	}

	.pt_v_2 {
		flex: 5;
		height: 100%;
		/* background-color: green; */
		display: flex;
		align-items: center;
	}

	.pt_v_3 {
		flex: 1;
		height: 100%;
		/* background-color: blue; */
		text-align: center;
	}

	.pt_v_3>text {
		width: 100%;
		height: 100%;
		line-height: 140rpx;
		color: #555555;
	}
</style>
