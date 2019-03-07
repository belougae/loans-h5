<template>
    <div class="home_box">
        <swipe :message="parentMsg"></swipe>   
        <p class="horn"><img src="@homeimg/laba.png" alt="">{{hot_ad}}</p>
        <ul>
            <li>
                <img src="@homeimg/xiakuan.png" alt="" @click="paragraph(0)">
                <p>本周下款王</p>
            </li>
            <li>
                <img src="@homeimg/kozi.png" alt="" @click="paragraph(1)">
                <p>本周新口子</p>
            </li>
            <li>
                <img src="@homeimg/jisq.png" alt="" @click="Calculator">
                <p>还款计算器</p>
            </li>
        </ul>
        <airdrop :message="dataList"></airdrop>
    </div>
</template>

<script>
    import swipe from './components/Swipe'
    import airdrop from './components/Airdrop'
    import storage from '../../../src/assets/js/storage'
    export default {
        name: "Home",
        data(){
            return{
              parentMsg:[],
              dataList:[],
              hot_ad:''
            }
        },
        mounted(){
             if(this.$route.query.channel_id){
                 let channel=this.$route.query.channel_id;
                 storage.set('channel_id',channel);
                this.$post(this.HOST+'/api/channels/visit',{channel_id:channel}).then((response) => {
                   if(response.code=="200") {
                        // this.parentMsg=response.meta.index_top_banner;
                        // this.dataList=response.data;
                        // this.hot_ad=response.meta.hot_ad
                    }else{
                            // Toast(response.msg);
                        }
                },(err)=>{
                //    console.log(err.message);
                }); 
            }
              this.$get(this.HOST+'/api/merchants').then((response) => {
                   if(response.code=="200") {
                        this.parentMsg=response.meta.index_top_banner;
                        this.dataList=response.data;
                        this.hot_ad=response.meta.hot_ad
                    }else{
                            Toast(response.msg);
                        }
                },(err)=>{
                //    console.log(err.message);
                }); 
        },
        methods:{
          paragraph(index){
            this.$router.push({  //核心语句
                path:'/Recommend',   //跳转的路径
                query:{           //路由传参时push和query搭配使用 ，作用时传递参数
                    id:index,  
                }
            })
          },
          Calculator(){
                this.$router.push({path: '/Calculator'})
          }
        },
        components: {
           swipe,airdrop
        },
    }
</script>

<style lang="less" scoped>
.home_box{
    width: 100%;
    height: 100%;
    // overflow: hidden;
    background: #FDFDFD;
    .horn{
        width: 688px;
        height: 50px;
        margin: 24px auto;
        line-height: 50px;
        font-size: 24px;
        color:rgba(105,118,128,1);
        img{
            width: 34px;
            height: 34px;
            float:left;
            margin: 8px 18px;
        }
    } 
    ul{
        overflow: hidden;
        li{
            width: 140px;
            height: 130px;
            float:left;
            margin-left: 81px;
            img{
                width: 80px;
                height: 80px;
                margin:0px auto 10px auto;
                display: block;
            }
            p{
                text-align: center;
                color:rgba(51,51,51,1);
                font-size: 28px;
            }
        }
    }
}
   
</style>
