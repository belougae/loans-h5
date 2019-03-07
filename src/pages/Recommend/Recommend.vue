<template>
    <div class="recommend_box">
        <van-tabs @click="onClick" v-model="active">
            <van-tab v-for="index in tables" :title="index.title"><airdrop :message="dataList" :commend="1"></airdrop></van-tab>
            <!-- <van-tab title="最新口子">最新口子</van-tab> -->
        </van-tabs>
    </div>
</template>

<script>
import { Tab, Tabs } from 'vant';
import airdrop from '@pages/Home/components/Airdrop'
    export default {
        name: "Recommend",
        data(){
            return{
                tables:[{title:"最新下款王"},{title:"最新口子"},],
                dataList:[],
                active:0
            }
        },
        mounted(){
            if(this.$route.query.id){
                this.active=this.$route.query.id;
                 this.onClick();   
            }else{
                this.onClick();   
            }
        },
        methods: {
            onClick(index, title) {
               if(title=="最新下款王"){
            this.$get(this.HOST+'/api/merchants/new_loan_king').then((response) => {
                   if(response.code=="200") {
                        // this.parentMsg=response.meta.index_top_banner;
                        this.dataList=response.data;
                    }else{
                            Toast(response.msg);
                        }
                },(err)=>{
                //    console.log(err.message);
                }); 
               }else{
                this.$get(this.HOST+'/api/merchants/new_holes').then((response) => {
                   if(response.code=="200") {
                        // this.parentMsg=response.meta.index_top_banner;
                        this.dataList=response.data;
                    }else{
                            Toast(response.msg);
                        }
                },(err)=>{
                //    console.log(err.message);
                }); 
               }
            }
        },
        components:{
            [Tab.name]:Tab,[Tabs.name]:Tabs,airdrop
        }
    }
</script>

<style lang="less" scoped>

 

    
</style>
