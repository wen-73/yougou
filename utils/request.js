const baseUrl='https://www.uinav.com/api/public/v1'

// 封装公共的发送请求方法
/**
 * @request：发送请求方法
 * @url：请求地址
 * @method：请求方式
 * @data：请求参数
 * @headers：请求头
 */

export default function request({
	url,
	method='get',
	data,
	header
}) {
	uni.showLoading({
		title: '加载中'
	})
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl+url,
			data:data,
			method,
			header,
			success: (res) => {
				console.log(res);
				resolve(res.data.message);
			},
			fail: (err) => {
				reject(err)
			},
			complete: () => {
				uni.hideLoading()
			}
		})
	})
}
