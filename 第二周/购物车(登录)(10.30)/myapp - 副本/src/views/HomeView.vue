<template>
  <div>
    <router-view></router-view>
    <van-tabbar router v-model="active">
      <van-tabbar-item to="/index" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/classify" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/my" icon="contact-o">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue'
const active = ref(0);
</script>
<style lang='scss' scoped></style>
