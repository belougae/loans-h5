<template>
    <div id="head">
        <div class="content">
            <p class="content_left" @click="back"><van-icon name="arrow-left" /></p>
            <span class="content_center"><slot></slot></span>
            <p class="content_right" @click="registers">{{register}}</p>
        </div>
    </div>
</template>

<script>
    import { Icon } from 'vant';
    export default {
        name: "Head",
        methods:{
            back(){
                 let slot=this.$slots.default[0].text;
                if(slot=="基础资料认证"||slot=="实名认证"||slot=="绑定银行卡"||slot=="信用认证"||slot=="订单确认页"){
                    this.$router.push({path: '/Home'})
                }else if(slot=="借款记录"){
                   this.$router.push({path: '/Mine'})
                }else{
                    this.$router.go(-1)
                }
            },
            registers(){
                let Reg="立即注册";
                if(this.$route.query.channelType){
                  this.$router.push({
                    path: '/Registered',
                    query: {
                        Reg: Reg,
                        channelType:this.$route.query.channelType
                    }
                    })  
                }else{
                    this.$router.push({
                    path: '/Registered',
                    query: {
                        Reg: Reg,
                    }
                    }) 
                }
                
            }
        },
        props:['register'],
        components: {
            [Icon.name]:Icon
        },
    }
</script>

<style scoped lang="less">
    #head{
        width:100%;
        height:96px;
        background:#FFFFFF;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 101;
        border-bottom:1px solid #f2f2f2;
        .content{
            line-height:96px;
            .content_left{
                /*float: left;*/
                /*padding-top: 10px;*/
                // margin-left:32px;
                .van-icon{
                    float: left;
                    padding-top: 31px;
                    padding-left:32px;
                    /*width: 22px;*/
                    /*height: 39px;*/
                    font-size:32px;
                }
            }
            .content_center{
                float: left;
                /*position: absolute;*/
                width: 200px;
                display: block;
                text-align: center;
                /*margin: auto;*/
                margin-left: 215px;
                font-size: 32px;
            }
            .content_right{
                float: right;
                font-size: 32px;
                margin-right: 32px;
                color:#FF9D01;
            }
        }
    }
</style>
