<template>
    <div v-bind:class="{ 'dark-background': isDark, 'linght-background': !isDark }">
        <van-pull-refresh v-model="loading" @refresh="onRefresh">
            <van-cell v-for="item in list" :key="item" :title="item" />
            <van-swipe style="width: 100%;height: 260px;" class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="item, index in bannList" :key="index">
                    <img style="width: 100%;height: 100%;" :src="item.picUrl" alt="">
                </van-swipe-item>
            </van-swipe>


            <div class="box">
                <h2>---- 商品列表 ----</h2>
                <ul>
                    <li v-for="item, index in listL" :key="index">
                        <img :src="item.pic" alt="">
                        <p>{{ item.name }}</p>
                        <div style="display: flex;justify-content: space-between;width: 100%;align-items: center;">
                            <div style="width: 100%;margin: auto;">
                                <span style="color: #3c9e81;">￥{{ item.minBuyNumber }}</span>&nbsp;
                                <span><s>￥{{ item.originalPrice }}</s></span>
                            </div>
                            <van-button type="success" plain>购买</van-button>
                        </div>
                    </li>
                </ul>
                <div style="position: fixed;bottom: 100px;right: 25px; width: 45px;height: 45px;text-align: center;
        line-height: 45px;background-color: #3c9e81;border-radius: 50%;color: #fff;" @click="genggai()">
                    更换
                </div>
            </div>
            <van-back-top />
        </van-pull-refresh>
    </div>
</template>
<script setup lang='ts'>
import { showToast } from 'vant';
import { ref } from 'vue';
import { bannApi, ListApi } from '@/API/http';

const isDark = ref(false)

const genggai = () => {
    console.log(111);
    isDark.value = ! isDark.value
}


const bannList = ref([])

const swipw = () => {
    bannApi().then((res: any) => {
        // console.log(res);
        bannList.value = res.data.data
    })
}
swipw()


const listL = ref([])
const List = () => {
    ListApi().then((res: any) => {
        console.log(res);
        listL.value = res.data.data.result
    })
}
List()

const count = ref(0);
const loading = ref(false);
const onRefresh = () => {
    setTimeout(() => {
        showToast('刷新成功');
        loading.value = false;
        count.value++;
    }, 1000);
    List()
}



</script>
<style lang='scss' scoped>
.box {
    width: 100%;
    height: 100%;

    h2 {
        width: 100%;
        text-align: center;
        margin-top: 15px;
    }
}

ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    flex: 1;
    margin-top: 15px;

    li {
        width: 200px;
        margin: 15px 0;
        img {
            width: 200px;
            height: 240px;
        }
    }
}

.dark-background{
    background-color: #000;
    color: #fff;
}
.linght-background{
    background-color: #fff;
    color: #000;
}
</style>