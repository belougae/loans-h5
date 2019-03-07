<template>
  <div id="app">
    <!-- 　<transition :name="transitionName">  -->
　　　　　　<router-view class="childview"></router-view>
<!-- 　　　　</transition> -->
        <Bottom v-show="$route.meta.navShow"></Bottom>
  </div>
</template>

<script>
import Bottom from '../src/components/Bottom';
export default {
  name: 'App',
  data() {
　　　　return {
　　
　　　　}
　　},
    components:{
            Bottom
        },
}
</script>

<style>
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.van-swipe__indicators{
  bottom: 25px !important;
}
 .van-swipe__indicator{
        width: 20px !important;
        height: 20px !important;
    }
    .van-swipe__indicator:not(:last-child){
        margin-right: 15px !important;
    }
    .van-swipe__indicator--active{
      color:#FF781E;
    }
.van-tabs__wrap{
    height: 87px !important;
}
.van-tab{
  color:#333333  !important;
   font-size:32px  !important;
   font-weight:500;
   line-height: 87px  !important;
}
.van-tab--active{
    color:#FF781E !important;
}
.van-tabs__line{
  background-color:#FF781E !important;
  height: 4px  !important;
}
.van-tabs--line{
  padding-top: 87px !important;
}
 .van-cell{
                line-height: 104px !important;
                font-size: 34px !important;
                color:rgba(51,51,51,1) !important;
                padding: 0px 0px 0px 32px  !important;
            }
            .van-cell__right-icon{
               line-height: 104px !important;
                font-size: 34px !important;
                  margin-right:32px !important;
            }
            .van-collapse-item__content{
              padding:32px !important;
              font-size:28px !important;
              color:rgba(115,128,138,1) !important;
            }
</style>
