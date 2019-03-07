<template>
    <div class="img_box">
        <van-swipe :autoplay="3000" v-if="images.length != 0">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image" />
            </van-swipe-item>
        </van-swipe>

    </div>
</template>

<script>
import { Swipe,SwipeItem } from 'vant';
    export default {
        name: "Swipe",
        data(){
            return{
               images:[]
            }
        },
        props:["message"],
        watch:{   // 使用监听的方式，监听数据的变化
            message(val){
                this.images = val;
            }
        },
        methods:{
          
        },
        components:{
            [Swipe.name]:Swipe,[SwipeItem.name]:SwipeItem
        }
    }
</script>

<style lang="less" scoped>
.img_box{
    // width: 100%;
        width: 686px;
        height: 386px;
        margin: 32px auto;
        border-radius:10px;
        overflow: hidden;
    img{
        width: 100%;
        height: 386px;
        // margin: 32px auto;
    }
}

 

    
</style>
