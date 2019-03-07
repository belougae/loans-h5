<template>
<div class="airList">
     <div class="airdrop_box" v-if="airList.length != 0" v-for="air in airList" @click="airUrl(air.id,air.url)">
        <div class="aires">
            <div class="aires_top">
                <div>
                    <img :src="air.thumbnail" alt="">
                    <p>
                        {{air.name}}
                    </p>
                    <span>{{air.description}}</span>
                </div>
                <button>立即申请</button>
            </div>
            <div  class="aires_text" v-if="commend==1"><p>上线时间 <em>{{air.online_at}}</em></p></div>
            <div  class="aires_text" v-else><p>利息低至 <em>{{air.rate}}%</em></p><span>最高额度 <em>{{air.max_limit}}</em></span></div>
            <div  class="aires_bottom">
                <button>
                    {{air.label_first}}
                </button>
                <button class="aires_recode">
                    {{air.label_second}}
                </button>
                <button>
                    {{air.label_third}}
                </button>
            </div> 
        </div>

    </div>
</div>
   
</template>

<script>
import storage from '../../../../src/assets/js/storage'
    export default {
        name: "Airdrop",
        data(){
            return{
                airList:[]
            }
        },
        props:["message","commend"],
        watch:{   // 使用监听的方式，监听数据的变化
            message(val){
                this.airList = val;
            }
        },
        //  mounted(){
        //     console.log(this.message);
        //     this.airList=this.message;
        // },
        methods:{
          airUrl(id,url){
            //   alert(storage.get("access_token"));
            //   window.location.href=url
              if(storage.get("access_token")){
                  this.$post(this.HOST+'/api/merchants/clicks',{merchant_id:id}).then((response) => {
                   if(response.code=="200") {
                        // this.parentMsg=response.meta.index_top_banner;
                        window.location.href=url
                    }else{
                            Toast(response.msg);
                        }
                },(err)=>{
                //    console.log(err.message);
                }); 
              }else{
                  this.$router.push({  //核心语句
                    path:'/Login',   //跳转的路径
                    query:{           //路由传参时push和query搭配使用 ，作用时传递参数
                        state:1,  
                    }
            })
              }
               
          }
        },
        components:{
            
        }
    }
</script>

<style lang="less" scoped>
.airList{
    margin-bottom: 120px;
     .airdrop_box{
        width: 686px;
        height: 314px;
        margin: 24px auto;
         box-shadow:0px 0px 3px 3px #F3F3F3;
        overflow: hidden;
        position: relative;
        // margin-bottom: 120px;
        .aires_top{
            width: 100%;
            height: 70px;
            overflow: hidden;
            margin-top: 24px;
            margin-bottom: 47px;
            div{
                width: 50%;
                height: 70px;
                float:left;
              img{
                width: 70px;
                height: 70px;
                float:left;
                margin: 0px 20px 0px 24px;
            }  
            p{
                font-size: 28px;
                color:rgba(51,51,51,1);
            }
            span{
                font-size: 22px;
                color:rgba(105,118,128,1);
            }
            }
            button{
                width:180px;
                height:60px;
                background:rgba(255,120,30,1);
                box-shadow:0px 0px 6px 0px rgba(255,165,0,0.4);
                border-radius:30px;
                color:#fff;
                font-size: 28px;
                float:right;
                margin-top: 5px;
                margin-right: 57px;
            }
            
        }
        .aires_text{
            font-size:28px;
            overflow: hidden;
            p{
                color:rgba(51,51,51,1);
                float:left;
                margin-left: 57px;
                em{
                     font-size:34px;
                     color:rgba(240,74,76,1);
                     font-weight:bold;
                }
            }
            span{
                 float:right;
                color:rgba(51,51,51,1);
                 margin-right: 57px;
                em{
                     font-size:34px;
                     color:rgba(240,74,76,1);
                     font-weight:bold;
                     
                }
            }
        }
        .aires_bottom{
            width: 643px;
            height: 98px;
            position: absolute;
            bottom: 0;
            left:21px;
            border-top:1px solid #E2EAF1;
            button{
                width:180px;
                height:55px;
                border-radius:28px;
                border:2px solid rgba(255,120,30,1);
                background: #fff;
                font-size:28px;
                color:rgba(255,120,30,1);
                line-height:40px;
                margin-top: 20px;
            }
            .aires_recode{
                margin: 0px 44px;
            }
        }
    }
}
   

 

    
</style>
