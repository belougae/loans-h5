<template>
    <div class="login_box">
        <!-- <Head>快捷登录</Head> -->
        <div class="login_img" :style="reversedMessage?notes:note">
        </div>
        <div class="user_name">
            <input type="tel" v-model="items.phone" ref="phone" placeholder="请输入11位手机号">
        </div>
         <!-- <div class="Verifications">
            <input type="tel" v-model="items.imgcode"  ref="imgcode" placeholder="请输入图形验证码">
            <canvas id="canvas" width="100" height="30" @click="imgcode()"></canvas>
        </div> -->
        <div class="Verifications">
            <input type="tel" v-model="items.ficats"  ref="ficats" placeholder="请输入短信验证码">
            <button :disabled="disableds" @click="sendcode()">{{btntxt}}</button>
        </div>
        <button class="butt" :disabled="disabled" :class="{butts:disabled===false}" @click="Signin">{{logintext}}</button>
    </div>
</template>

<script>
    import { Toast } from 'vant';
    // import Head from '@components/Head'
    import storage from '../../../src/assets/js/storage'
    // import $ from 'jquery'
    export default {
        name: "Login",
        data(){
            return{
                note: {
                    backgroundImage: "url(" + require("@homeimg/logobk.png") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%"
                },
                notes: {
                    backgroundImage: "url(" + require("@homeimg/logobk1.png") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%"
                },
                items:{
                    phone:'',
                    ficats:'',
                },
                btntxt:'获取验证码',
                disabled:true,
                disableds:false,
                key:'',
                logintext:"快捷登录"
            }
        },
        computed: {
    // 计算属性的 getter
        reversedMessage: function () {
      // `this` 指向 vm 实例
            return this.$route.query.state
        }
        },
        watch: {
            items: {
                handler: function() {
                    let reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
                    let regm=/^\d{4}$/;
                    if(regm.test(this.$refs.ficats.value)&&reg.test(this.$refs.phone.value)){
                        this.disabled=false
                    }else{
                        this.disabled=true
                    }

                },
                deep: true
            }
        },
        mounted(){
            // this.imgcode();
            if(this.$route.query.state){
                this.logintext="立即借款"
            }
        },
        methods: {
            sendcode() {
                let regm=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
                if(!regm.test(this.$refs.phone.value)){
                    this.items.phone="";
                    Toast("请输入正确的手机号")
                }else{
                    this.$post(this.HOST+'/api/verificationCodes',{ phone: this.$refs.phone.value}).then((response) => {
                        if(response.code=="200"){
                            this.key=response.data.key;
                            this.time=60;
                            this.disableds=true;
                            this.timer()
                        }else{
                            Toast(response.msg);
                            // this.items.imgcode="";
                        }
                    },(err)=>{

                    });
                }
            },
            Signin(){
                if(storage.get('channel_id')){
                     this.$post(this.HOST+'/api/users',{verification_key :this.key,verification_code:this.$refs.ficats.value,channel_id:storage.get('channel_id')}).then((response) => {
                   if(response.code=="200") {
                        storage.set('access_token',response.data.access_token);
                        storage.set('phone',this.$refs.phone.value);
                        this.$router.push({path: '/Home'})
                    }else{
                            Toast(response.msg);
                        }
                },(err)=>{
                //    console.log(err.message);
                }); 
                }else{
                       this.$post(this.HOST+'/api/users',{verification_key :this.key,verification_code:this.$refs.ficats.value}).then((response) => {
                   if(response.code=="200") {
                        storage.set('access_token',response.data.access_token);
                        storage.set('phone',this.$refs.phone.value);
                        this.$router.push({path: '/Home'})
                    }else{
                            Toast(response.msg);
                        }
                },(err)=>{
                //    console.log(err.message);
                }); 
                }
                   
               
            },
            timer(){
                if (this.time > 0) {
                    this.time--;
                    this.btntxt=this.time+"s后重新获取";
                    setTimeout(this.timer, 1000);
                } else{
                    this.time=0;
                    this.btntxt="获取验证码";
                    this.disableds=false;
                }
            }
        },
        components: {
            [Toast.name]:Toast,
            // Head
        },
    }
</script>

<style lang="less" scoped>
    .login_box{
        width: 100%;
        height: 100%;
        position: absolute;
        .login_img{
            width:100%;
            height:599px;
            // margin: 186px 275px 118px 275px;
            // margin-top: 186px;
        }
        .user_name{
            width: 686px;
            height: 90px;
            border:2px solid #EAEAEA;
            margin: 68px 32px 0px 32px;
            border-radius:50px;
            input{
                width:614px;
                height:90px;
                font-size:32px;
                font-weight:400;
                line-height:90px;
                border-radius:50px;
                padding-left: 72px
                // margin-top: 15px;
                // margin-left: 16px;
            }
            input::-webkit-input-placeholder {
                color: #AFBBC3;
            }
            input:-moz-placeholder {
                color: #AFBBC3;
            }
            input:-ms-input-placeholder {
                color: #AFBBC3;
            }
        }
        .Verifications{
            width: 686px;
            height: 90px;
            border:2px solid #EAEAEA;
            margin: 32px 32px 0px 32px;
            border-radius:50px;
            input{
                width:300px;
                height:90px;
                font-size:32px;
                font-weight:400;
                line-height:90px;
                border-radius:50px;
                padding-left: 72px
            }
            input::-webkit-input-placeholder {
                color: #AFBBC3;
            }
            input:-moz-placeholder {
                color: #AFBBC3;
            }
            input:-ms-input-placeholder {
                color: #AFBBC3;
            }
            button{
                font-size: 32px;
                color:#FF781E;
                background: #ffffff;
                float: right;
                margin: 23px 72px 0 0;
            }
        }
        .butt{
            width: 692px;
            height: 90px;
            border-radius: 47px;
            text-align: center;
            font-size:32px;
            color:#AFBBC3;
            line-height:90px;
            display: block;
            background: #F5F5F5;
            margin: 54px auto 30px auto;
        }
        .butts{
            color: #ffffff;
           background:linear-gradient(45deg,rgba(255,176,64,1) 0%,rgba(255,120,30,1) 100%);
        }
    }

</style>