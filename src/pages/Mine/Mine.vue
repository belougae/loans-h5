<template>
    <div class="mine_box">
        <div class="mine_back" :style="note">
            <div @click="denglu" class="denglu">
                    <div>
                        <img src="@homeimg/icon_mine.png" alt="">
                    </div>
                     
                    <p>{{phone}}</p> 
            </div>
        </div>
        <div class="banzhu" @click="bangzhu"> <img src="@homeimg/bangzhu.png" alt=""><span>帮助中心</span></div>
         <div class="banzhu" @click="yinsi"> <img src="@homeimg/yinsi.png" alt=""><span>隐私政策</span></div>
         <button @click="signout" v-if="phone!=='未登录'">退出登录</button>
    </div>
</template>

<script>
import storage from '../../../src/assets/js/storage'
    export default {
        name: "Mine",
        data(){
            return{
               note: {
                    backgroundImage: "url(" + require("@homeimg/mineback.png") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%"
                },
                phone:'未登录'
            }
        },
        mounted(){
            // alert(storage.get("phone"));
            if(storage.get("phone")){
                let phones=storage.get("phone");
                let reg = /^(\d{3})\d{4}(\d{4})$/;
                this.phone = phones.replace(reg, "$1****$2");
            }
        },
        methods: {
           bangzhu(){
               this.$router.push({path:'/Helpcenter'});
           },
           yinsi(){
               this.$router.push({path:'/Privacy'});
           },
           signout(){
                //  storage.remove("access_token");
                //         storage.remove("phone");
                //          this.$router.push({path: '/Login'})
                 this.$get(this.HOST+'/api/users/logout').then((response) => {
                   if(response.code=="200") {
                        // this.parentMsg=response.meta.index_top_banner;
                        storage.remove("access_token");
                        storage.remove("phone");
                         this.$router.push({path: '/Login'})
                    }else{
                            Toast(response.msg);
                        }
                },(err)=>{
                //    console.log(err.message);
                }); 
           },
           denglu(){
                this.$router.push({path: '/Login'})
           }
        },
        components:{
          
        }
    }
</script>

<style lang="less" scoped>
        .mine_box{
            width: 100%;
            height: 100%;
            position: absolute;
            .mine_back{
                width: 100%;
                height: 507px;
                margin-bottom: 56px;
                .denglu{
                    width: 200px;
                    margin: auto;
                    padding-top: 83px;
                    div{
                         width: 150px;
                        height: 150px;
                          margin: 0 auto 24px auto;
                          border-radius: 150px;
                          background-color: #ffffff;
                          img{
                            width:80%;
                            height: 80%;
                            margin: 10%;
                             border-radius: 150px;
                        }
                    }
                p{
                    font-weight: 500;
                    font-size: 32px;
                    color:rgba(255,255,255,1);
                    text-align:center;
                } 
                }
                
            }
            .banzhu{
                height: 104px;
                line-height: 104px;
                font-size:34px;
                color:rgba(51,51,51,1);
                font-family:PingFangSC-Regular;
                border-bottom:1px solid #EEEEEE;
                img{
                    width: 40px;
                    height: 40px;
                    float:left;
                    margin: 32px 24px 32px 32px;
                }
            }
            button{
                width:600px;
                height:90px;
                border-radius:45px;
                border:2px solid rgba(255,120,30,1);
                font-size:28px;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(255,120,30,1);
                line-height:40px;
                background: #ffffff;
                margin: 46px auto 0 auto;
                display: block
                }
        }
 

    
</style>
