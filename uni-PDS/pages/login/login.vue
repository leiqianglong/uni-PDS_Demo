<template>
	<view>
		<view class="login_view">
			<button @click="login">登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			login(){
				uni.switchTab({
					url:"../home/home"
				})
			}
		}
	}
</script>

<style>
.login_view{
	margin-top: 400rpx;
}
</style>
