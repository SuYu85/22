<template>
    <div>
        <div class="top">
            <h1>账号密码登录</h1>
            <p>为了你的账号安全，请用手机号登录</p>
        </div>
        <van-form @submit="onSubmit" class="from">
            <van-cell-group inset>
                <van-field v-model="username" label="中国 +86" placeholder="请输入手机号"
                    :rules="[{ required: true, message: '请填写用户名' }]" />
                <van-field v-model="password" type="password" placeholder="请输入密码"
                    :rules="[{ required: true, message: '请填写密码' }]" />
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button style="background-color: #98cfbe; border: 0;width: 430px; margin: auto;" block type="primary" native-type="submit">
                    登录
                </van-button>
            </div>
        </van-form>
        <div class="btn">
            <van-button>验证码登录</van-button>
            <div>
                <van-button>忘记密码</van-button>
                <van-button>免费注册</van-button>
            </div>
        </div>
    </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()

const username = ref('');
const password = ref('');
const onSubmit = () => {
    router.push('/')
};
</script>
<style lang='scss' scoped>
.top{
    width: 450px;
    margin: 200px 0 0 25px;
    p{
        margin: 15px 0;
        color: #a3a3a3;
    }
}

.from{
    width: 500px;
    margin: auto;
}
.btn{
    display: flex;
    justify-content: space-between;
}
</style>