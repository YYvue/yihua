<template>
    <div class='head'>
        <div><span class="iconfont icon-xiala"></span></div>
        <div><span class="iconfont icon-hua">宜花</span></div>
        <div><span class="iconfont icon-xiaoxi"></span></div>
        <div><input type='text'></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>
<style scoped>
@import "../assets/font_d/iconfont.css";

.head{
    margin-top: -9px;
    width:100%;
    height:86px;
    z-index:999;
    text-align:center;
    position: fixed;
    background:#fff;
}
.head>div:nth-child(1){
    width:20%;
    height:48px;
    float:left;
    line-height:48px;
}
.head>div:nth-child(2),.head>div:nth-child(4){
    width:60%;
    height:48px;
    float:left;
     line-height:48px;
}
.head>div:nth-child(3){
    width:20%;
    height:48px;
    float:left;
    line-height:48px;
}
.head>div:nth-child(4){
    width:100%;
    height:30px;
   
    line-height:28px;
   
}
.head>div>span{
     font-size:20px!important;
}
.head>div:nth-child(4)>input{
    width:90%;
    height:100%;
}
</style>