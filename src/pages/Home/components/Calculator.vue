<template>
    <div class="Calculator_box">
        <Head>还款计算器</Head>
        <div>
            <div class="Calcu_back" :style="note">
                <ul>
                    <li><p>应还本金</p><span>{{Principal}}</span></li>
                    <li><p>应还利息</p><span>{{Interest}}</span></li>
                    <li><p>还款总金额</p><span>{{Totalsum}}</span></li>
                </ul>
            </div>
            <div class="operation">
                <div class="open_box">
                  <p class="open_text">还款金额</p>
                <div class="open_input">
                    <label for="">￥</label>
                    <input type="text" placeholder="请输入借款金额" v-model="money">
                </div>
                <div class="open_select">
                    <label for="">借款时间</label>
                    <div @click="showprop">
                       <p :class="{colorks:coltiter!=='请选择借款时间'}">{{coltiter}}</p><img src="@homeimg/right.png" alt="">
                    </div>
                </div>
                <div>
                <van-popup v-model="shows" position="bottom" :overlay="true">
                    <van-picker show-toolbar title="借款时间" ref="choice" :columns="columns" @cancel="onCancel" @confirm="conFirm" @change="onChange" />
                </van-popup>
                </div>
                <div  class="open_inputs">
                    <label for="">借款利率(月)</label>
                    <input type="text" placeholder="请输入借款利率" v-model="interests">
                </div>
                <div class="open_button">
                    <div class="openleft" @click="openleft" :class="{active:isActive==1}">等额本金</div>
                    <div class="openright"  @click="openright" :class="{active:isActive==2}">等额本息</div>
                </div>  
                </div>
                
            </div>
            <div class="operations">
                <div>
                    <table>
                        <tr>
                            <th>期数</th>
                            <th>本金</th>
                            <th>利息</th>
                            <th>每期还款金额</th>
                        </tr>
                        <tr v-for="tab in tableList">
                            <td>{{tab.qishu}}</td>
                              <td>{{tab.benjin}}</td>
                              <td>{{tab.lixi}}</td>
                             <td>{{tab.huankuan}}</td>
                        </tr>
                        
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Head from '@components/Head'
import { Popup,Picker } from 'vant';
    export default {
        name: "Calculator",
        data(){
            return{
             note: {
                    backgroundImage: "url(" + require("@homeimg/mineback.png") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%"
                },
                 shows:false,
                  columns: [],
                  coltiters:'',
                  colcodes:'',
                  coltiter:'请选择借款时间',
                  Principal:'',
                  Interest:'',
                  Totalsum:'',
                  money:'',
                  colcode:'',
                  interests:'',
                  tableList:[],
                  isActive:''
            }
        },
        mounted(){
            // for(let res in response.data){
                for (let i = 1; i <= 12; i ++) {
                      this.columns.push({keyId:i,text:i+'个月'})   
                }
                     this.columns.push({keyId:120,text:'120个月'})   
                        // }
                     this.columns.unshift({keyId:'',text:'-- 请选择 --'})   
        },
        methods:{
            showprop(index){
                this.shows=true;
            },
            onChange(picker, value, index) {
                //  if(value.text=="-- 请选择 --"){
                //       this.coltiters='请选择借款时间';
                //       this.colcodes=value.keyId;
                //  }else{
                      this.coltiters=value.text;
                      this.colcodes=value.keyId;
                //  }
            },
            onCancel() {
                this.shows=false
            },
            conFirm(){
                  if(this.coltiters=="-- 请选择 --"){
                      this.coltiter='请选择借款时间';
                     this.colcode=this.colcodes;
                 }else{
                    this.coltiter=this.coltiters;
                    this.colcode=this.colcodes;
                  }
                this.shows=false
            },
            //  Principal:'',
            //       Interest:'',
            //       Totalsum:'',
            //       money:'',
            //       colcode:'',
            //       interests:''
            openleft(){
                this.isActive=1;
                 this.tableList=[];
                this.Principal=Number(this.money);
                this.Interest=(((Number(this.colcode)+1)*Number(this.money)*(Number(this.interests/12))/2)*0.01).toFixed(2);
                this.Totalsum=(Number(this.Principal)+Number(this.Interest)).toFixed(2);
                 for (let i = 1; i <= Number(this.colcode); i ++) {
                        let benjin=(Number(this.money)/Number(this.colcode)).toFixed(2); 
                        let lixi=((Number(this.money)-Number(benjin)*(i-1))*(Number(this.interests)/12)*0.01).toFixed(2);
                        let huankuan=(Number(benjin)+Number(lixi)).toFixed(2);
                        this.tableList.push({qishu:i,benjin:benjin,lixi:lixi,huankuan:huankuan})  
                }
                 if(this.Principal!==this.Principal||this.Principal=="NaN"){
                    this.Principal=0
                }
                 if(this.Interest!==this.Interest||this.Interest=="NaN"){
                    this.Interest=0
                }
                 if(this.Totalsum!==this.Totalsum||this.Totalsum=="NaN"){
                    this.Totalsum=0
                }
            },
             openright(){
                //  var assd=10000*(0.0435/12*Math.pow((1+0.0435/12), 12)) / (Math.pow((1+0.0435/12), 12)-1)
                 this.isActive=2;
                this.tableList=[];
                this.Principal=Number(this.money);
                 this.Interest=(Number(this.colcode)*(Number(this.money)*((Number(this.interests/12)*0.01)*Math.pow((1+(Number(this.interests/12)*0.01)), Number(this.colcode)))/(Math.pow((1+(Number(this.interests/12)*0.01)), Number(this.colcode))-1))-Number(this.money)).toFixed(2);
                this.Totalsum=(Number(this.Principal)+Number(this.Interest)).toFixed(2);
                 for (let i = 1; i <= Number(this.colcode); i ++) {
                        let benjin=(Number(this.money)*(Number(this.interests/12)*0.01)*(Math.pow((1+(Number(this.interests/12)*0.01)), (i-1)))/(Math.pow((1+(Number(this.interests/12)*0.01)), Number(this.colcode))-1)).toFixed(2); 
                        let lixi=(Number(this.money)*(Number(this.interests/12)*0.01)*(Math.pow((1+(Number(this.interests/12)*0.01)), Number(this.colcode))-Math.pow((1+(Number(this.interests/12)*0.01)), (i-1)))/(Math.pow((1+(Number(this.interests/12)*0.01)), Number(this.colcode))-1)).toFixed(2);
                        let huankuan=(Number(benjin)+Number(lixi)).toFixed(2);
                        this.tableList.push({qishu:i,benjin:benjin,lixi:lixi,huankuan:huankuan})  
                }
                if(this.Principal!==this.Principal||this.Principal=="NaN"){
                    this.Principal=0
                }
                 if(this.Interest!==this.Interest||this.Interest=="NaN"){
                    this.Interest=0
                }
                 if(this.Totalsum!==this.Totalsum||this.Totalsum=="NaN"){
                    this.Totalsum=0
                }
            }
        },
        components:{
           Head,[Popup.name]:Popup,[Picker.name]:Picker
        }
    }
</script>

<style lang="less" scoped>
    .Calculator_box{
          width: 100%;
            height: 100%;
            position: absolute;
            background: #f6f6f8;
            .Calcu_back{
                width: 100%;
                height: 320px;
                position: relative;
                top:96px;
                ul{
                    padding-top:60px; 
                    li{
                        width: 200px;
                        float:left;
                        text-align: center;
                        margin-left: 37.5px;
                        p{
                            font-size: 30px;
                            color:#fff;
                            margin-bottom: 15px;
                        }
                         span{
                            font-size: 42px;
                            color:#fff;
                            }
                    }
                }
            }
            .operation{
                width: 680px;
                height: 600px;
                position: relative;
                // border:1px solid red;
                left:35px;
                box-shadow:0px 0px 1px 1px #F3F3F3;
                background: #FFFFFF;
                border-radius: 20px;
                margin-bottom: 30px;
                padding: 60px 50px; 
                box-sizing:border-box;
                -moz-box-sizing:border-box; /* Firefox */
                -webkit-box-sizing:border-box; /* Safari */
                .open_box{
                    overflow: hidden;
                   .open_text{
                    font-size: 30px;
                    // color:#7b7e7f;
                    margin-bottom: 10px;
                    // overflow: hidden;
                    } 
                    .open_input{
                        // overflow: hidden;
                        height: 100px;
                        border-bottom: 1px solid #ebebeb;
                        // line-height: 100px;
                        label{
                            font-size: 35px;
                            float:left;
                            margin-top: 25px;
                        }
                        input{
                            width: 400px;
                            height: 40px;
                            float: left;
                            font-size: 30px;
                            margin-top: 30px;
                        }
                    }
                    .open_select{
                        // overflow: hidden;
                        height: 100px;
                        border-bottom: 1px solid #ebebeb;
                        // line-height: 100px;
                        label{
                            font-size: 30px;
                            float:left;
                            line-height: 100px;
                        }
                        div{
                            float: right;
                            p{
                                font-size: 30px;
                                float:left;
                                line-height: 100px;
                                color:#7f7d78;
                            }
                            .colorks{
                                color:#2c3e50;
                            }
                            img{
                                width: 20px;
                                height: 30px;
                                float:right;
                                margin: 32.5px 10px 32.5px 20px;
                            }
                        }
                    }
                    .open_inputs{
                        // overflow: hidden;
                        height: 100px;
                        border-bottom: 1px solid #ebebeb;
                        // line-height: 100px;
                        label{
                            font-size: 30px;
                            float:left;
                            line-height: 100px;
                        }
                        input{
                            width: 300px;
                            height: 40px;
                            float: right;
                            font-size: 30px;
                            text-align: right;
                            margin-top: 30px;
                        }
                    }
                    .open_button{
                        div{
                            width: 240px;
                            height: 70px;
                            line-height: 70px;
                            font-size: 28px;
                            text-align: center;
                            border:2px solid #ff781e;
                            border-radius: 100px;
                            color:#ff781e;
                            margin-top: 40px;
                        }
                        .openleft{
                            float:left;
                        }
                         .openright{
                            float:right;
                        }
                        .active{
                            background:#ff781e;
                            color:#FFFFFF
                        }
                    }
                }
                
            }
            .operations{
                  width: 680px;
                height: 350px;
                position: relative;
                // border:1px solid red;
               overflow-x: hidden;
                overflow-y: scroll;
                left:35px;
                box-shadow:0px 0px 1px 1px #F3F3F3;
                background: #FFFFFF;
                border-radius: 20px;
                 padding: 60px 50px; 
                box-sizing:border-box;
                -moz-box-sizing:border-box; /* Firefox */
                -webkit-box-sizing:border-box; /* Safari */
                table{
                    font-size: 30px;
                    color: #333;
                    border-color: #666;
                    border-collapse: collapse;
                    width: 100%;
                    padding: 15px;
                    th{
                        padding:15px;
                        font-weight: 600;
                    }
                    td{
                         padding: 10px;
                         text-align: center
                    }
                }
            }
             /deep/ .van-picker-column{
            font-size: 32px;
        }
        /deep/ .van-picker__toolbar{
            height: 90px !important;
            line-height: 90px !important;
            .van-picker__cancel,.van-picker__confirm{
                font-size:28px;
                padding: 0 32px;
                color: #ff781e;
            }
            .van-picker__title{
                font-size: 32px;
            }
        }
    }

    
</style>
