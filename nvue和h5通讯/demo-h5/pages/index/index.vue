<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title" @click="goBack1">这是h5页面(点我存储)</text>
			
			<text class="title" @click="goBack2">这是h5页面(点我获取)</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			goBack1() {
				this.$webUni.postMessage({
					data:{
						pathUrl: '我是h5传递过来的参数',
						setStorage: {
							key: 'name',
							value: 'qilei'
						}
					}
				})
				// this.$webUni.navigateTo({url: '/pages/index/index'}) //点击返回到指定页面
			},
			goBack2() {
				this.$webUni.postMessage({
					data:{
						pathUrl: '我是h5传递过来的参数',
						getStorage: {
							key: "name"
						}
					}
				})
				// this.$webUni.navigateTo({url: '/pages/index/index'}) //点击返回到指定页面
			}
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

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
