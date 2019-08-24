<template>
	<div>
		<div class='head'>
        <h3><span @click="fhgwc"><</span> 宜花收银台</h3>
        </div>
        <div class='top'>
        <ul>
            <li>订单号:<span>1907154029063</span></li>
            <li>订单金额<span>￥{{total}}</span></li>
        </ul>
        </div>
		<div class='pay'>
			<ul>
				<li><img src="../assets/index_headimg/yh.jpg" alt="" /></li>
				<li><img src="../assets/index_headimg/wx.jpg" alt="" /></li>
				<li><img src="../assets/index_headimg/zfb.jpg" alt="" /></li>

			</ul>
			<h3 @click="paywin"> <span>￥{{total}}</span> &nbsp;去支付</h3>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				idx:'',
				total:'',
			}
		},
		methods: {
			fhgwc(){
				this.axios.get("payerr",{params:{
				idx:this.idx
				}}).then((result) => {
						console.log(result);
						this.$router.push("Pay1")
		   })
			},
			paywin(){
				this.axios.get("paywin",{params:{
					idx:this.idx
				}}).then((result) => {
						console.log(result);
						this.$router.push("Pay1")
					})	
			},
			 
		},
		created() {
			this.idx=localStorage.getItem("idx");
			this.idx=this.idx.split(",");
			console.log(this.idx)
			this.total=localStorage.getItem("sum");
		},
		
	}
</script>
<style scoped="scoped">
	ul {
		padding-left: 0;
	}

	ul li {
		list-style: none;
	}

	.head {
		width: 100%;
		height:86px;
	}

	.head h3 {
		text-align: center;
		font-weight: 500;
		margin: 0;
		height: 86px;
		line-height: 86px;
	}

	.head h3 span {
		float: left;
		margin-left: 30px;
	}

	.top {
		width: 100%
	}

	.top ul {
		padding: 0 20px 0px 20px;
	}

	.top ul li {

		height: 80px;
		line-height: 80px;
	}

	.top ul li:nth-child(1) {
		border-bottom: 1px solid #e5e5e5;
	}

	.pay {
		width: 100%;
		background: #e5e5e5;
	}

	.pay ul {
		padding-top: 10px;
	}

	.pay ul li img {
		height: 82px;
		max-width: 414px;

	}

	.pay h3 {
		margin-top: 80px;
		text-align: center;
		background: #d72c2c;
		height: 80px;
		line-height: 80px;
		color: #fff;
		font-weight: 500;
	}
</style>
