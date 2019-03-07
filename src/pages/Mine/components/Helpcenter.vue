<template>
    <div class="help_box">
        <Head>帮助中心</Head>
        <div class="actless">
            <van-collapse v-model="activeNames">
                    <van-collapse-item v-for="act in actList" :title="act.title" :name="act.name">
                        {{act.text}}
                    </van-collapse-item>
            </van-collapse>
        </div>
    </div>
</template>

<script>
 import Head from '@components/Head'
import { Collapse, CollapseItem } from 'vant';
    export default {
        name: "Helpcenter",
        data(){
            return{
             activeNames: ['1'],
             actList:[]
            }
        },
          mounted(){
              this.$get(this.HOST+'/api/help_center').then((response) => {
                   if(response.code=="200") {
                        // this.parentMsg=response.meta.index_top_banner;
                        this.actList=response.data;
                    }else{
                            Toast(response.msg);
                        }
                },(err)=>{
                //    console.log(err.message);
                }); 
        },
        methods: {
           
        },
        components:{
          [Collapse.name]:Collapse,[CollapseItem.name]:CollapseItem,Head
        }
    }
</script>

<style lang="less" scoped>
       .help_box{
             width: 100%;
            height: 100%;
            position: absolute;
            .actless{
                margin-top: 96px;
            }
       }

    
</style>
