<template>
	<div>
		<img :src="focused ? selectedImage: normalImage"  class="imgstyle">
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:{
			focused:false,
			selectedImage:"",
			normalImage:"",
		}
	}
</script>

<style>
	.imgstyle{
		width: 24px;
		height: 24px;
		margin-bottom:5px;
	}
</style>
