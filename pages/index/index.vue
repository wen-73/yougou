<template>
	<view class="index">
		<!-- 1.顶部搜索栏 -->
		<search></search>
	<!-- 2.新品轮播图 -->
	<view class="banner">
		<swiper circular indicator-dots indicator-color='#7fdffa' indicator-active-color='#fffeff'
		        autoplay interval='3000'>
		        <block v-for="(item,index) in bannerUrls" :key="index">
		          <swiper-item>
		          <image :src="item.image_src"></image>
		          </swiper-item>
		        </block>
		</swiper>
		
	</view>
	<!-- 3.导航栏 -->
	<view class="nav">
		<view class="item" v-for='(item,index) in navData' :key='index'>
			<image :src="item.image_src " mode="aspectFit"></image>
		</view>
	</view>
	<view class="floor" v-for='(item,index) in floorData' :key='index'>
	<!-- 4.横条 -->
		<view class="floor_title" :style="{'background-image': 'url('+item.floor_title.image_src+')'    }">
		</view>
		<!-- 5.商品信息 -->
		<view class="pic_floor">
			<view class="item left">
				<image :src="item.product_list[0].image_src"></image>
			</view>
			<view class="item center">
		    <image :src="item.product_list[1].image_src"></image>
				<image :src="item.product_list[2].image_src"></image>
			</view>
			<view class="item right">				
				<image :src="item.product_list[3].image_src"></image>
				<image :src="item.product_list[4].image_src"></image>
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
				bannerUrls:[],
				navData:[],
				floorData:[]
			
			}
		},
		async onLoad() {
      // uni.request({
	     //  url:'https://www.uinav.com/api/public/v1/home/swiperdata',
	     //  success:(res)=>{
		    // this.bannerUrls=res.data.message;
	     //  }
      // });
			const res_swiper= await this.$http({url:'/home/swiperdata'})
			this.bannerUrls=res_swiper
			
      const res_nav= await this.$http({url:'/home/catitems'})
			this.navData=res_nav
			
      const res_floor=await this.$http({url:'/home/floordata'})
			this.floorData=res_floor
		},
		methods: {
     //  request({url,method,data,headers}){
			  // uni.showLoading({
			 	//   title:'加载中'
			  // })
     //  	return new Promise( (resolve,reject)=>{uni.request({
     //  	  url:url,
     //  	  success:(res)=>{
     //  	    console.log(res);
					// 	resolve(res.data.message);
     //  	  },
					// fail:(err)=>{
					// 	reject(err)
					// },
					// complete:()=>{
					// 	uni.hideLoading()
					// }
     //  	})})
     //  }
			
			
			// request({url,method,data,headers}){
			//  	uni.request({
			//  	  url:url,
			//  	  success:(res)=>{
			//  	    console.log(res);
			//  	    this.floorData=res.data.message;
			//  	  }
			//  	})
			//  }
		}
	}
</script>

<style lang='less' scoped>
	
	.index{
		padding-top:100rpx;
		/* 1.顶部搜索栏 */
	
		/* 2.轮播图 */
		.banner{
			background-color: #f0f;
			swiper,swiper swiper-item,swiper swiper-item image{
				height:170px;
				width:750rpx;
			}
		}
			
		.nav{
			height:95px;
			display:flex;
			justify-content: space-between;
			padding:0 10px;
			.item{
				text-align: center;
				image{
				  width:70px;
				  height:100%;
				}
			}
			
		}
		.floor{
			.floor_title{
		    height:45px;
	  	  width:100%;
	  	  background-size:contain;
	  	  background-repeat: no-repeat;
	  	  background-color: #f4f3f4;
	  	  background-position: bottom;
		  }
		  .pic_floor{
		  	padding:20rpx 16rpx;
		  	display:flex;
		  	height:390rpx;
		  	.item{
		  		flex:1;
		  		image{
		  	  	width:232rpx;
		  			height:100%;
						margin-right:7rpx;
		  		}
		  		&.center,&.right{
		  			image{
		  				height:190rpx;
		  			}
		  		}
			  }
		  }
		}
	}
	
</style>
