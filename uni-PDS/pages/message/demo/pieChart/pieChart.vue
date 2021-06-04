<template>
	<view>
		<view class="charts-box">
			<!-- 饼状图 -->
			<qiun-data-charts type="pie" :chartData="chartData1" :errorShow="false" :inScrollView="true"
				:errorReload="false" background="none" :tooltipShow="false" :loadingType="2" :opts="parmares1"/>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				chartData1: {
					series: [{
						"data": [{
								"name": "一班",
								"value": 50
							},
							{
								"name": "二班",
								"value": 30
							},
							{
								"name": "三班",
								"value": 20
							},
							{
								"name": "四班",
								"value": 18
							},
							{
								"name": "五班",
								"value": 8
							}
						]
					}]
				},
							
				parmares1:{
					//基本配置
					animation:true, //是否开启动画（貌似没作用）
					duration:500, //动画时长
					padding:[40,30,20,10],//画布填充边距[上,右,下,左]
					rotate:false, //是否开启横屏模式
					fontSize:12, //全局默认字体大小
					fontColor:"#666666",//全局默认字体颜色
					dataLabel:true,//是否显示提示文案（每一项的文案）
					legend:{ //图例配置
						show:true, //是否显示图例提示块
						position:"bottom",
						float:"left",//图例位置对其方式
						margin:10, //图例外边距
					},
					extra:{ //扩展配置
					   pie:{
						   labelWidth:10,//数据标签 到 饼图 外圆连线的长度
						   border:true,//每个扇形之间是否有空格
						   borderWidth:1,//每个扇形之间的空格间距（border=true 时）
						   borderColor:"#f2f2f2",//分割线的颜色
						   linearType:"custom", //渐变类型，设置为custom就可以开启，不写此字段就关闭。
						   customColor:["#FA7D8D"], //渐变颜色
					   },
					   tooltip:{ //提示框配置
						   showBox:false,
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
