<template>
	<view>
		<view class="charts-box">
			<!-- 开启滚动条，需要开启拖动功能，即:ontouch="true"，微信小程序需要开启canvas2d，否则会很卡，开启2d需要指定canvasId -->
			<qiun-data-charts type="tarea" :chartData="chartData" :loadingType="1" :errorShow="false"
				:inScrollView="true" background="none" :ontouch="true" :opts="parmares" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				chartData: {
					categories: [
						"1",
						"2",
						"3",
						"4",
						"5",
						"6",
						"7",
						"8",
						"9",
						"10",
						"11",
						"12",
						"13",
						"14",
						"15",
						"16",
						"17",
						"18",
						"19",
						"20",
						"21",
						"22",
						"23",
						"24",
						"25",
						"26",
						"27",
						"28",
						"29",
						"30"
					],
					series: [{
							"name": "日收入",
							"data": [
								12,
								34,
								56,
								34,
								44,
								76,
								54,
								44,
								23,
								64,
								22,
								76,
								56,
								87,
								97,
								23,
								13,
								55,
								23,
								55,
								34,
								76,
								45,
								52,
								75,
								25,
								45,
								54,
								67,
								100
							]
						},
						{
							"name": "日支出",
							"data": [
								23,
								43,
								43,
								34,
								23,
								5,
								65,
								23,
								53,
								56,
								77,
								44,
								65,
								75,
								97,
								46,
								22,
								68,
								45,
								34,
								66,
								45,
								67,
								25,
								55,
								75,
								43,
								23,
								34,
								5
							]
						},
				
					],
				},
				parmares: {
					color: ["#00a1fb", "#db0000"], //配置每个线条颜色
					legend: { //图例配置
						show: true, //是否显示图例
						position: "top", //显示位置（上下左右）
						float: "center", //图例对齐方式
						itemGap: 30, //各个图例之间的间距
				
					},
					enableScroll: true,
					rotate: false, //是否开启横屏
					dataPointShape: true, //是否显示数据点的图形标识
					dataPointShapeType: "hollow", //空心
					inScrollView: true,
					ontouch: true,
					xAxis: { //x轴配置
						disabled: false, //是否隐藏X轴坐标
						axisLine: true, //绘制坐标轴轴线
						axisLineColor: "#ff9900", //坐标轴轴线颜色
						calibration: true, //是否显示X轴坐标刻度线
						fontColor: "#295afe", //X轴刻度点数字颜色
						fontSize: 10, //X轴刻度点字体大小
						rotateLabel: true, //刻度点）文字是否旋转 (貌似没反应)
						itemCount: 6,
						boundaryGap: "justify", //折线图、区域图起画点结束点方法 (两端对齐)
						disableGrid: true, //是否关闭纵向网格线
						scrollShow: true, //是否显示滚动条
						max: 30, //x轴最大值
						min: 1, //X轴最小值
					},
					yAxis: { //Y轴的配置
						splitNumber: 10, //横向向网格数量
						data: [ //Y轴，可能有多个
							{ //第一个Y轴
								textAlign: "center", //数据点（刻度点）相对轴线的对齐方式
								max: 100, //当前Y轴终止值（默认数据中的最大值）
								min: 0, //当前Y轴起始值（默认数据中的最小值）
								tofix: 0, //Y轴刻度值保留的小数位数
								unit: '万', //Y轴刻度值后附加单位
								fontSize: 10, //Y轴字体大小
							}
						]
					},
					extra: { //扩展配置
						area: {
							type: "curve", //区域图类型 ：straight尖角模式 curve：圆滑曲线模式
							opacity: 0.5, //渐变填充的透明度
							width: 3, //曲线的粗细
							gradient: true, //是否开启渐变色
						},
						tooltip: { //提示窗配置
							showBox: true, //是否显示点击选中点的 气泡弹窗 
						}
					}
				},
			}
			
			
		},
		methods: {
			
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
