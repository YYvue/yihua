<template>
	<div>
		<h3>我的订单</h3>
		<div class="jiantou" @click="jiantou">&lt</div>
		<mt-navbar v-model="selected">
			<mt-tab-item id="1">全部</mt-tab-item>
			<mt-tab-item id="2">待付款</mt-tab-item>
			<mt-tab-item id="3">待收货</mt-tab-item>
			<mt-tab-item id="4">已完成</mt-tab-item>
			<mt-tab-item id="5">已取消</mt-tab-item>
			<mt-tab-item id="6">售后</mt-tab-item>
		</mt-navbar>

		<!-- tab-container -->
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">
			  <div v-if="payed">
			  <div   class="all"
			  v-for="(elemall,i) of tasksall" :key="i">
			  	<div class="line"></div>
			  	<div class="top">
			  		<p><img src="../assets/Me/shangdian.png" alt="">潇品花卉 </p>
			  		<p><span>{{elemall.ztm}}</span></p>
			  	</div>	
			  	<div class="middle">
			  		<img :src="elemall.sptp"  alt="">
			  		<p>共{{elemall.spsl}}件<span> &gt </span></p>
			  	</div>
			     <div class="bottom">
			  		<p>消费金额<span v-text="`${(elemall.spsl*elemall.spjg).toFixed(2)}`"></span></p>
			  	</div>
			  </div>
			  </div>
			  	<div v-else class="center">
			  	<img src="../assets/Me/1.jpeg" alt="">
			  	<p>您还没有下单记录呢</p>
			  </div>
			</mt-tab-container-item>
			<mt-tab-container-item id="2">
				<div v-if="payed==true">
				<div   class="all"
				v-for="(elem0,i) of tasks0" :key="i">
					<div class="line"></div>
					<div class="top">
						<p><img src="../assets/Me/shangdian.png" alt="">潇品花卉 </p>
						<p><span>{{elem0.ztm}}</span></p>
					</div>
					<div class="middle">
						<img :src="elem0.sptp"  alt="">
						<p>共{{elem0.spsl}}件<span> &gt </span></p>
					</div>
				   <div class="bottom">
						<p>消费金额<span v-text="`${(elem0.spsl*elem0.spjg).toFixed(2)}`"></span></p>
					<button @click="pay(elem0.id)">支付</button>
					</div>
				</div>
				</div>
				<div v-else class="center">
					<img src="../assets/Me/1.jpeg" alt="">
					<p>您还没有下单记录呢</p>
				</div>
			</mt-tab-container-item>
			
			<mt-tab-container-item id="3">
			   <div class="center">
			   	<img src="../assets/Me/1.jpeg" alt="">
			   	<p>您还没有下单记录呢</p>
			   </div>	
			</mt-tab-container-item>
			
			<mt-tab-container-item id="4">
				<div v-if="payed">
				<div   class="all"
				v-for="(elem1,i) of tasks1" :key="i">
					<div class="line"></div>
					<div class="top">
						<p><img src="../assets/Me/shangdian.png" alt="">潇品花卉 </p>
						<p><span>{{elem1.ztm}}</span></p>
					</div>
					<div class="middle">
						<img :src="elem1.sptp"  alt="">
						<p>共{{elem1.spsl}}件<span> &gt </span></p>
					</div>
				   <div class="bottom">
						<p>消费金额<span v-text="`${(elem1.spsl*elem1.spjg).toFixed(2)}`"></span></p>
					</div>
				</div>
				</div>
				<div v-else class="center">
					<img src="../assets/Me/1.jpeg" alt="">
					<p>您还没有下单记录呢</p>
				</div>
				
			</mt-tab-container-item>
			<mt-tab-container-item id="5">
				<div class="center">
					<img src="../assets/Me/1.jpeg" alt="">
					<p>您还没有下单记录呢</p>
				</div>
			</mt-tab-container-item>
			<mt-tab-container-item id="6">
				<div class="center">
					<img src="../assets/Me/1.jpeg" alt="">
					<p>您还没有下单记录呢</p>
				</div>
			</mt-tab-container-item>
			</mt-tab-container-item>
		</mt-tab-container>

	</div>


</template>


<script>
	export default {
		data() {
			return {
				selected: "1",
				payed:"false",
				tasks1:"",
				tasks0:"",
				tasksall:"",
				total:"",
				idx:"",
			}
		},
		created(){
			this.total=localStorage.getItem("total");
			this.idx=localStorage.getItem("idx");
			this.idx=this.idx.split(",")
			this.hq1();
			this.hq0();
			this.hqall()
		},
		methods: {
			pay(id){
				this.$router.push("pay")
				localStorage.setItem("idx",id)
			},
         //跳转到Me界面
          jiantou(){
          this.$router.push("index")
         },
			hq1(){
				this.axios.get("hq1").then((result) => {
						this.tasks1=result.data;
						// console.log(result.data);
							this.payed=true;
					})	
			},
			hq0(){
				this.axios.get("hq0").then((result) => {
						this.tasks0=result.data;
						console.log(result.data);
					})	
			},
			hqall(){
				this.axios.get("hqall").then((result) => {
						this.tasksall=result.data;
						// console.log(result.data);
					})	
			}
		}
	}
</script>

<style scoped="scoped">
	h3 {
		border-bottom: 1px solid #ccc;
		padding-bottom: 10px;
		text-align: center;
	}

	.jiantou {
		position: absolute;
		top: 2px;
		left: 10px;
		font-size: 15px
	}

	.center img {
		width: 100px;
		height: 100px
	}

	.center {
		text-align: center;
		margin-top: 150px
	}

	p {
		font-size: 12px
	}

	.line {
		margin-top: 2px;
		height: 10px;
		width: 100%;
		background-color: #ccc
	}

	.top,
	.middle,
	.bottom {
		width: 100%;
		height: 40px;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #ccc;
	}

	.top span {
		color: red
	}

	.top p {
		font-size: 16px;
	}

	.top img {
		width: 16px;
		height: 16px;
		margin-right: 12px
	}

	.middle {
		height: 60px;
		padding-top: 10px
	}

	.middle img {
		width: 50px;
		height: 50px
	}

	.middle span {
		margin-left: 10px
	}
   .bottom{
		line-height: 40px;
	}
	.bottom span {
		margin-left: 10px
	}

	.bottom button {
		margin-top: 5px;
		width: 80px;
		height: 30px
	}
	h5{margin-left:100px}
</style>
