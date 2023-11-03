<template>
    <div style="width: 100vw;height: 100vh;background-color: #f8f8f8;">
        <div class="top">
            <img src="../assets/logo.png" alt="">
            <h2>登录/注册</h2>
        </div>
        <div class="jf">
            <div>
                <b>--</b>
                <p>积分</p>
            </div>
            <div>
                <b>--</b>
                <p>优惠券</p>
            </div>
            <div>
                <b>--</b>
                <p>余额</p>
            </div>
        </div>
        <div class="dd">
            <h3>我的订单</h3>
            <ul>
                <li>待付款</li>
                <li>待发货</li>
                <li>待收货</li>
                <li>评价</li>
                <li>退款/售后</li>
            </ul>
        </div>
        <div class="cy">
            <h3>常用功能</h3>
            <ul>
                <li>我的钱包</li>
                <li>积分兑换</li>
                <li>优惠券</li>
                <li>收货地址</li>
                <li>设置</li>
                <li>主题</li>
                <li>我的设备</li>
            </ul>
        </div>
    </div>
</template>
<script setup lang='ts'>
import { ref , reactive,computed,watch } from 'vue';
import { useRoute,useRouter } from 'vue-router';
import {myApi} from '../API/http'

myApi().then(res=>{
    console.log(res);
})
</script>
<style lang='scss' scoped>
.top {
    width: 100%;
    height: 200px;
    background-color: #20a884;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 20px;

    img {
        width: 80px;
        height: 80px;
        border-radius: 40px;
        background-color: #fff;
    }

    h2 {
        margin-left: 15px;
    }
}

.jf {
    width: 96%;
    height: 100px;
    display: flex;
    margin: auto;
    flex: 1;
    align-items: center;
    justify-content: space-around;
    background-color: #fff;
    margin-top: 20px;
    border-radius: 5px;
    text-align: center;
}

.dd {
    width: 96%;
    height: 100px;
    background-color: #fff;
    margin: 20px auto;
    border-radius: 5px;
    h3{
        height: 50px;
        line-height: 50px;
        margin-left: 15px;
    }
    ul {
        display: flex;
        flex: 1;
        height: 50%;
        align-items: center;
        justify-content: space-around;
        text-align: center;
    }
}

.cy {
    width: 96%;
    height: 100px;
    background-color: #fff;
    margin: 20px auto;
    border-radius: 5px;
    h3{
        height: 50px;
        line-height: 50px;
        margin-left: 15px;
    }
    ul {
        display: flex;
        flex-wrap: wrap;
        flex: 1;
        height: 50%;
        align-items: center;
        justify-content: space-around;
        text-align: center;
    }
}
</style>