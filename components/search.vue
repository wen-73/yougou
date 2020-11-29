<template>
	<view class="search">
		<view class="input">
		  <text class="iconfont icon-search"></text>
			<text>搜索</text>
		</view>
	</view>
</template>

<script>
</script>

<style lang='less'>
	@import url("../static/font.css");
	.search{
		background-color: #ff2e49;
		padding: 20rpx;
		z-index: 999;
		position:fixed;
		top:0;
		width:100%;
		box-sizing: border-box;
		.input{
			height:60rpx;
		  line-height: 60rpx;
		  text-align: center;
			background-color: #fff;
	    font-size:14px;
			color:#bbbbbb;
			.icon-search{
			  margin-right:12rpx;
			  font-size:20px;
			  vertical-align: middle;
		  }		
	  }
	}
</style>
