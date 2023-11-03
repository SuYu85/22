<template>
    <div>
        <van-swipe style="width: 100%;height: 260px;" class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item,index in bannList" :key="index">
                <img style="width: 100%;height: 100%;" :src="item.picUrl" alt="">
            </van-swipe-item>
        </van-swipe>

        <div class="box">
            <h2>---- 商品列表 ----</h2>
            <ul>
                <li v-for="item,index in listL" :key="index">
                    <img :src="item.pic" alt="">
                    <p>{{ item.name }}</p>
                    <div style="display: flex;justify-content: space-between;">
                        <div style="width: 100%;margin: auto;">
                            <span>￥{{ item.minBuyNumber }}</span>
                            <span><s>￥{{ item.originalPrice }}</s></span>
                        </div>
                        <van-button type="success" plain >购买</van-button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue';
import { bannApi ,ListApi} from '@/API/http';

const bannList = ref([])

const swipw = () => {
    bannApi().then((res:any)=>{
        // console.log(res);
        bannList.value = res.data.data
    })
}
swipw()


const listL = ref([])
const List = () => {
    ListApi().then((res:any)=>{
        console.log(res);
        listL.value = res.data.data.result
    })
}
List()
</script>
<style lang='scss' scoped>
    .box{
        width: 100%;
        h2{
            width: 100%;
            text-align: center;
            margin-top: 15px;
        }
    }

    ul{
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        flex: 1;
        margin-top: 15px;
        li{
            text-align: center;
            width: 200px;
            img{
                width: 200px;
                height: 240px;
            }
        }
    }
</style>