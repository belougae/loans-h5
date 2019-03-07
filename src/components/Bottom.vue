<template>
    <div>
        <div class="bottom-tab">
            <div class="tab-item" @click="switchTo('/Home')">
                <img :src="'/Home' === $route.path ? tabBarImgArr[0].selected : tabBarImgArr[0].normal" alt="首页" class="img1">
                <span :class="{on: '/Home' === $route.path}">首页</span>
            </div>
            <div class="tab-item" @click="switchTo('/Recommend')">
                <img :src="'/Recommend' === $route.path ? tabBarImgArr[1].selected : tabBarImgArr[1].normal" alt="推荐" class="img2">
                <span :class="{on: '/Recommend' === $route.path}">推荐</span>

            </div>
            <div class="tab-item" @click="switchTo('/Mine')">
                <img :src="'/Mine' === $route.path ? tabBarImgArr[2].selected : tabBarImgArr[2].normal" alt="搜索" class="img3">
                <span :class="{on: '/Mine' === $route.path}">我的</span>
            </div>
        </div>
    </div>
</template>

<script>
import storage from '../assets/js/storage'
    export default {
        name: "Bottom",
        data(){
            return{
                tabBarImgArr:[   //图片切换
                    {normal: require('@homeimg/loan1.png'), selected: require('@homeimg/loan.png')},
                    {normal: require('@homeimg/recommend1.png'), selected: require('@homeimg/recommend.png')},
                    {normal: require('@homeimg/mine1.png'), selected: require('@homeimg/mine.png')}
                ]
            }
        },
        methods:{
            switchTo(path){
                // console.log(this.$router);
                // storage.set('left',true);
                this.$router.replace(path)
            }
        }
    }
</script>

<style lang="less" scoped>
    .bottom-tab{
        width:100%;
        height:100px;
        background-color:#fff;
        position:fixed;
        left:0;
        bottom:0;
        display:flex;
        z-index:2;
      border-top: 1px solid rgba(229,229,229,1);
        .tab-item{
        display:flex;
        flex:1;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        font-size:20px;
        color:#AFBBC3;
            img{
            margin-bottom:5px;
            }
            .on{
                color:#FF9D01;
            }
            span{
                font-size: 20px;
            }
          .img1{
            width:45px;
            height: 45px;
          }
          .img2{
            width:45px;
            height: 45px;
          }
          .img3{
            width:45px;
            height: 45px;
          }
        }
    }



</style>
