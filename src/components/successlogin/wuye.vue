<template>
    <div class="big-bgc">
          <header class="header"><img src="../../assets/我是业委/u91.png" alt=""><span>阿啦小区物业巡检公共平台</span></header>  
            <div class="box" v-if="flag">
            
            <div class="content-top">
                 <div class="top-lf zhanghao" >
                 <router-link to="/set/wuye/account">
                 <img src="../../assets/我是物业/u219.png" alt="">
                    <span>账号管理</span>
                    </router-link>
                 </div>   
                <div class="top-rt renzheng">
                <router-link to="/set/wuye/renzheng">
                
                <img src="../../assets/我是物业/u225.png" alt="">
                <span>认证审核</span>
                </router-link>
                </div>
            </div>
            <div class="content-bottom">
                    <div class="bm-lf daishencha">
                    <router-link to="/set/wuye/shencha3">
                     <img src="../../assets/我是业委/u96.png" alt="">
                 <span>待审查</span>
                 </router-link>
                 </div>   
                <div class="bm-rt shencha" >
                <router-link to="/set/wuye/lishi">
                <img src="../../assets/我是业委/u103.png" alt="">
                <span >审查历史</span>
                </router-link>
                </div>
            
            </div>

             <div class="content-bottom">
                    <div class="bm-lf luru">
                    <router-link to="/set/wuye/luru">
                 <img src="../../assets/我是业委/u108.png" alt="">
                 <span>信息录入</span>
                 </router-link>
                 </div>   
                <div class="bm-rt fabu">
                <router-link to="/set/wuye/fabu">
                <img src="../../assets/我是业委/u113.png" alt="">
                <span >我的发布</span>
                </router-link>
                </div>
            
            </div>

             <div class="content-bottom dibu">
                    <div class="bm-lf xunjian">
                    <router-link to="/set/wuye/xunjian">
                 <img src="../../assets/我是物业/u230.png" alt="">
                 <span>巡检告知</span>
                 </router-link>
                 </div> 
            
            </div>
            <div class="zhanwei"></div>
            </div>

            <div v-if="!flag">
                    <gerenzujian></gerenzujian>     
            </div>
            <div class="conft">
            <div class="footer">
                
                <div class="fr-lf" ref="fr" @click="zhihui">
                <img :src="lfimg" alt="" ref="lfimg">
                <span ref="lfa">智慧物业</span>
                </div>
                <div class="fr-rt"  @click="geren">
                <img :src="lrimg" alt="">
                <span ref="rfa">个人中心</span>
                </div>

            </div>
            </div>
            
    </div>
</template>

<script>
//import img from '../../../public/static/resource.json'
import gerenzujian from './yijingdenglu.vue'
export default {
    data(){
        return {
            flag:true,
            //imgGroup:img.images,
           lfimg: require("../../assets/我是业委/u119.png"),
            //lfimg:"../../assets/我是业委/u119.png",
            lrimg:require("../../assets/我是业委/u123.png")
           // rtimg:"../../assets/我是业委/u123.png"
        }
    },
    created(){

           //this.lfimg=this.imgGroup[0].src
            //console.log(this.imgGroup[0].src)
    },
    methods: {
    
        zhihui(){
             this.$refs.lfa.style.color="#6a9df9"
             this.$refs.rfa.style.color="#333"
            this.flag=true,
            //console.log(this.imgGroup[1].src)
            //this.lfimg=this.imgGroup[1].src
            this.lfimg=require("../../assets/我是业委/u119.png");
            this.lrimg=require("../../assets/我是业委/u123.png");


        },
        geren(){
            this.flag=false
        
          this.$refs.rfa.style.color="#6a9df9"
          this.$refs.lfa.style.color="#333"
          this.lrimg=require("../../assets/我是业委/u123.jpg");
          this.lfimg=require("../../assets/我是业委/u119.jpg");
         
        }
    },
    components:{
            gerenzujian

    }
    
}
</script>
<style lang="scss" scoped>
        *{
            text-decoration: none;
            list-style: none;
            height: 100%;
        }
        .big-bgc{
            width:100%;
            height:auto;
            position: relative;
        }


    .header{
        width: 100%;
        height: 40px;
        background-color: rgb(86, 139, 236);
        padding-left:40px;
        position: relative;

        img{
            position: absolute;
            width: 36px;
            height: 20px;
            left: 6px;
            top:10px;

        }
        span{
            color: white;
            margin-left: 20px;
            font-size: 16px;
            top: 10px;
            position: absolute;    
        }
    }

    .box{
        width: 100%;
       
        padding: 10px;
        div{
            border-radius: 10px;
        }
            .content-top{
                height: 210px;
            
                display: flex;
                justify-content: space-between;
            .zhanghao{
                    background-color: #8176f8;
            }
            .renzheng{
                background-color: #00bb84;
            }
            
            
                .top-lf{
                    padding-top:13% ;
                    width: 50%;    
                    //background-color: rgb(86, 139, 236);
                    margin-right: 4px;
                    span{
                        margin-left:30% ;
                    }
                    
                }
                .top-rt{
                     padding-top:13% ;
                    width: 50%;   
                    //background-color:rgb(228, 156, 24);
                    margin-left: 4px;
                }

                img{
                    margin-left: 28%;
                    width: 80px;
                    height: 80px;
                }
            }
         
            .content-bottom{
                margin-top: 6px;
                height: 210px;
            
                 display: flex;
                justify-content: space-between;
                .xunjian{
                    background-color: #1173be;
                }
                .daishencha{
                        background-color: #6da0fb;
                }
                .shencha{
                    background-color: #ffb532;
                }
                .luru{
                background-color: #12b4ff;
            }
            .fabu{
                background-color: #f01414;
            }
                    .bm-lf{
                 padding-top:16% ;
                    width: 50%;    
                    //background-color: #12b4ff;
                     margin-right: 4px;
                    
                }
                .bm-rt{
                 padding-top:16% ;
                    width: 50%;   
                    //background-color:rgb(240, 20, 12);
                     margin-left: 4px;
                }
                img{
                    margin-left: 28%;
                    width: 80px;
                    height: 80px;
                }
                .shencha span{
                    margin-left: 60px;
                }

            }

            span{
                color:white;
                font-size: 17px;
                margin-left:30%;
                margin-top: 106px;
            }

    }
    .conft{
        
        margin-top: 10px;
    
    }
    .footer{
  
        z-index:1000;
        position: relative;
        bottom: 0px;
        background-color: #fff;
        width:100%;
        height:40px;
        display: flex;
        justify-content: space-between;
                .fr-lf{
                        width: 50%;
                        border-right: solid 2px #666;
                        img{
                            z-index: 10000000;
                            margin-left:26%;
                            width: 25px;
            height: 25px;
                        }
                        span{
                            margin-left: 2%;
                            color: #6a9df9;
                            
                        }

                }
                .fr-rt{
                        width: 50%;
                        img{
                           
                            margin-left:26%;
                            width: 25px;
            height: 25px;
                        }
                        span{
                            
                            margin-left: 2%;
                            color:#333;
                           

                        }

                }
             



        img{
            margin-top:7px;
            
        }
        span{
            margin-top: 11px;
             position: absolute;
        }
    }

</style>