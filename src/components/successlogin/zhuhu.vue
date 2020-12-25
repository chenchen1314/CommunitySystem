<template>
<div class="waibox">
  <div  v-if="flag">
      <div class="contains">
      
      
      <div class="top"> 
      <div class="wrap"><span> <img src="../../assets/我是住户/sousuo.png" alt=""></span>
      <input type="text" placeholder="请输入搜索关键字" ></div>
      </div>
    <div class="image">
    <img src="../../assets/我是住户/u455.png" alt="">
    </div>
     <div class="control-center">
          <div class="inner">
          <span class="quanbu">全部</span>
          <span class="gonggao">公告</span>
          <span class="tongzhi">通知</span>
          </div>

     </div>

            

     <div class="content-one"> 

          <div class="one-inner">
          
          <p class="title">抗议:本小区实行全面封锁</p>
            <p>新冠肺炎疫情，在一段时间的好转后，似乎出现...</p>
              <img src="../../assets/我是住户/u435.jpg" alt=""></div>
             
          <div class="bottom-font">
          <span>公告</span>
          <span>物业</span>
          <span>2020-04-15 12:25:55</span>
          
          </div>
     </div>

     <div class="tiaoxing">
     </div>

     <div class="content-one"> 

          <div class="one-inner">
          
          <p class="title">抗议:本小区实行全面封锁</p>
            <p>新冠肺炎疫情，在一段时间的好转后，似乎出现...</p>
              <img src="../../assets/我是住户/u435.jpg" alt=""></div>
             
          <div class="bottom-font">
          <span>公告</span>
          <span>物业</span>
          <span>2020-04-15 12:25:55</span>
          
          </div>
     </div>

     <div class="btn-more">
     <mt-button plain size="large">点击我获得更多</mt-button>
     </div>

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
      <div v-if="!flag">
                    <gerenzujian></gerenzujian>     
            </div>
      <div class="footer" v-if="!flag">
                
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

</template>

<script>
import gerenzujian from './yijingdenglu.vue'

export default {

  data() {
    return {
          flag:true,
            //imgGroup:img.images,
           lfimg: require("../../assets/我是业委/u119.png"),
            //lfimg:"../../assets/我是业委/u119.png",
            lrimg:require("../../assets/我是业委/u123.png")
    }
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
  },components:{
    gerenzujian
  }

};
</script>

<style lang="scss">

.waibox{
  width: 100%;
 //@error height: 100%;

}

.contains{
 width: 100%;
 height: auto;
 //position: relative;

.top{
  width: 100%;
  background-color:rgb(29, 134, 219);
  padding:10px 13px;
  .wrap{
    overflow: hidden;
    position: relative;
      border-radius: 60px;
      background-color: #fff;
      height: 30px;
      span{
        line-height: 30px;
        display: inline-block;
         img{
           width: 14px;


         }
      }
      input{
        position: absolute;
        font-size: 14px;
        top:-5px;
        left: 20px;
        border:none;
      }
    }

}

    


  .image{
      margin-top:10px;
      width: 100%;
      img{
          width: 100%;
      }
  }

  .control-center{
    width: 100%;
    height: 60px;
    background-color:#e5e2e2;
    margin-top: 10px;
    padding-top: 10px;
    .inner{
      background-color: #fff;
      height: 40px;
        span{
          display: inline-block;
          line-height: 40px;
        }
      .quanbu{
          font-size: 20px;
          font-weight: bold;
          margin-left: 10px;
      }
      .gonggao{
        margin-left: 20px;

      }
      .tongzhi{
        margin-left: 20px;
      }
    }
  }

  .content-one{
      width: 100%;
      height: auto;
      padding: 20px 10px 0px 10px;
      
    .one-inner{

      p{
        margin-left:4px;

      }

    .title{
        font-size: 21px;
        font-weight: bold;
        color:#333;
      }
      :nth-child(2){

        font-size: 16px;

        color: #333;

      }

      img{

        width: 100%;

      }



}
      .bottom-font{

        display: flex;
        justify-content: space-between;

          span{
            font-size: 16px;
            color:#999;
          }
          :nth-child(2){
              margin-left: 100px;

          }
          :nth-child(3){
            display: inline-block;
            margin-right: 10px;
          }
          

      }
      

  }
  .tiaoxing{
    width: 100%;
    height: 10px;
    background-color:#e5e2e2;
    margin-top: 4px;


  }
  .btn-more{
    margin-top: 20px;
    margin-bottom: 20px;
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

   
}
.footer{
  
        z-index:1000;
        position: absolute;
        bottom: 50px;
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