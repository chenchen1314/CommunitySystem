<template>
  <div>
    <div class="contains" v-if="flags">
      <div class="titles">
        <mt-header title="审查历史">
          <mt-button icon="back" @click="back" slot="left" ref="fanhui"
            >返回</mt-button
          >

          <!--<mt-button icon="more" slot="right"></mt-button>>!-->
        </mt-header>
      </div>

      <div class="top">
        <div class="wrap">
          <span> <img src="../../assets/我是住户/sousuo.png" alt="" /></span>
          <input type="text" placeholder="请输入搜索关键字" />
        </div>
      </div>

      <div class="status">
        <span class="quanbu">全部</span>
        <span class="gonggao">公告</span>
        <span class="tongzhi">通知</span>
      </div>

      <div class="listone">
        <div class="text">
          <p class="title">抗议:本小区实行全面封锁</p>
          <p class="p">新冠肺炎疫情,在一段时间的好转后,似乎出现...</p>
        </div>

        <img src="../../assets/我是住户/u435.jpg" alt="" />
        <div class="dibu">
          <span>公告</span>
          <span>已发布</span>
          <span>物业</span>
          <span>2020-09-15 12-04-15 12:25:44</span>
        </div>
        <div class="edit">
          <mt-button plain size="small" class="bianji" @click="bianji"
            >编辑</mt-button
          >
        </div>
      </div>

      <div class="listone">
        <div class="text">
          <p class="title">抗议:本小区实行全面封锁</p>
          <p class="p">新冠肺炎疫情,在一段时间的好转后,似乎出现...</p>
        </div>

        <img src="../../assets/我是住户/u435.jpg" alt="" />
        <div class="dibu">
          <span>公告</span>
          <span>未发布</span>
          <span>物业</span>
          <span>2020-09-15 12-04-15 12:25:44</span>
        </div>

        <div class="edit">
          <mt-button plain size="small" class="shencha" @click="detail">
            审查详情</mt-button
          >
        </div>
      </div>

      <div class="btnmore">
        <mt-button plain size="large">点击我获得更多</mt-button>
      </div>
    </div>

    <component :is="current" v-if="!flags"></component>

    <transition name="fade">
      <div class="mask" v-if="flag" @touchmove.prevent>
        <div class="contains">
          <div class="topbar">
            <span class="one">审查详情</span>
          </div>

          <div class="contents">
                <p class="onep"><span class="one">审查人:</span><span>小明</span></p>
                <p><span class="two">审查时间:</span><span>2020-05-06 12:26:24</span></p>
                <p><span class="three">审查说明:</span><span class="shuoming">由于施工所以明天整个小区停电整个小区停电</span></p>
          </div>
          <div class="bottom">
            <div class="center" @click="quxiao"><span>关闭</span></div>
          
             
            
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>


<script>
import bianji from "../gonggong/bianjizizujian.vue";
import shencha from "../gonggong/shencha.vue";
export default {
  data() {
    return {
      flags: true,
      current: "",
      flag: false, //控制的遮罩
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    bianji() {
      this.flags = false;
      this.$router.push({path:'/set/fabu3/bianji'})
      this.current = bianji;
    },
    shencha() {
      this.flags = false;
      this.current = shencha;
    },
    detail() {
      this.flag = true;
    },
    quxiao(){
        this.flag=false;
    }
  },

  components: {
    bianji,
    shencha,
  },
};
</script>


<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.contains {
  background-color: rgb(238, 236, 236);
  width: 100%;
  height: auto;
  position: relative;

  .titles {
    position: absolute;
    width: 100%;
    height: 40px;
    left: 0;
    top: -40px;
    z-index: 1000000000;
  }

  .status {
    width: 100%;
    height: 40px;
    background-color: #fff;
    padding: 0px 10px;
    span {
      line-height: 40px;
      display: inline-block;
      margin-left: 15px;
    }
    .quanbu {
      font-size: 20px;
      font-weight: bold;
      margin-left: 0px;
    }
  }

  .listone {
    width: 100%;
    height: auto;
    background-color: #fff;
    margin-top: 10px;
    padding: 20px 10px 10px 10px;

    .text {
      margin-left: 6px;
      .title {
        display: inline-block;
        font-size: 20px;
        font-weight: bold;
        color: #333;
      }
      .p {
        color: #666;
      }
    }
    img {
      width: 100%;
    }

    .dibu {
      height: 40px;
      //margin-top: 10px;
      //background-color: red;

      border-bottom: 1px solid #999;
      span {
        font-size: 14px;
        line-height: 20px;
        margin-left: 16px;
        color: #666;
      }

      :nth-child(1) {
        margin-left: 0px;
      }
    }

    .edit {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
    }
  }
}

.top {
  width: 100%;
  background-color: rgb(29, 134, 219);
  padding: 10px 20px;
  .wrap {
    overflow: hidden;
    position: relative;
    border-radius: 60px;
    background-color: #fff;
    height: 30px;
    span {
      line-height: 30px;
      display: inline-block;
      img {
        width: 14px;
      }
    }
    input {
      position: absolute;
      font-size: 14px;
      top: -5px;
      left: 20px;
      border: none;
    }
  }
}
.mask {
  z-index: 10000000000;
  width: 100%;
  height: 100%;
  background-color: rgba(184, 183, 183, 0.596);
  position: absolute;
  top: 360px;
  left: 0;

  .contains {
    width: 260px;
    height: 210px;
    background-color: #fff;
    margin: 240px auto;
    z-index: 10000;
    border-radius: 20px;
    padding: 15px 0px;
        .topbar{
            border-bottom:1px solid #999;
            padding-bottom: 5px;
        }
    
    .topbar .one {
      font-size: 18px;
      color: #333;
      margin-left: 10px;
      margin-top: 20px;
      font-weight: bold;
      font: verdana;
      position: relative;
    }
            .contents{
                width: 100%;
                height: 100px;
                margin-top: 10px; 
                .onep{
                    margin-left: 33px;
                }
                p{
                    line-height: 20px;
                    color:#333;
                    margin-left:20px;
                    font-style: 14px;

                    .three{
                        
                        display: inline-block;
                        position: absolute;
                        
                        
                    }

                        span{
                            margin-left: 10px;
                        }
                        .shuoming{
                            display: inline-block;
                            width: 150px;
                            height: 40px;
                            position: absolute;
                            left: 90px;


                        }
                    

                }       
                

            }
    .bottom{
                width:100%;
        height: 20px;
        border-top: 1px solid #999;
        display: flex;
        justify-content: space-between;
        margin-top: 18px;
        .center{
            
            width: 50px;
            height: 50px;
            margin: 10px auto;
            text-align: center;
            span{
                width: 100%;
            }
        }
    }
  }
}
</style>