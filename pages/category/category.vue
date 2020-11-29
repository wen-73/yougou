<template>
	<view class='category'>
		<search></search>
		<view class="content">
			<view class="left">
				<view class="tab">
					<view  v-for='item in 100' :key='item'>
						
					  {{item}}
					</view>
				</view>
			</view>
			<view class="right">
				<view  v-for='item in 100' :key='item'>
					
				  {{item}}
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import search from '../../components/search.vue'
	export default {
		components:{search},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang='less'>
  .category{
		.content{
			position:fixed;
			top:100rpx;
			left:0;
			right:0;
			bottom:0;
			background-color: #ccc;
			display: flex;
			.left{
				width:200rpx;
				height:100%;
				background-color: #f00;
			  overflow: auto;
				.tab{
				
				}
			}
			.right{
				flex:1;
				height:100%;
				background-color: #0ff;
				overflow: auto;
			}
		}
	}
</style>
