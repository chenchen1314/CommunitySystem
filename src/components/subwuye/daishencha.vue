<template>

<div>
  <div class="contains" v-show="flags">
  <div class="titles">
   <mt-header title="待审查">
  			
    			<mt-button icon="back" @click="back"  slot="left"  ref="fanhui">返回</mt-button>
  	
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

    <div class="listone" v-for="(item,i) in list" :key="item.subtitle">
      <div class="text">
        <p class="title">{{item.title}}</p>
        <p class="p">{{item.subtitle}}</p>
      </div>

      <img src="../../assets/我是住户/u435.jpg" alt="" />
      <div class="dibu">
        <span>公告</span>
        <span>未发布</span>
        <span>物业</span>
        <span>2020-09-15 12-04-15 12:25:44</span>
      </div>
      <div class="edit">
           
     <mt-button plain size="small" class="bianji" @click="bianji(i)">编辑</mt-button>
     <mt-button plain size="small" class="shencha" @click="shencha">删除</mt-button>
     
      </div>
    </div>

        <div class="btnmore">
     <mt-button plain size="large">点击我获得更多</mt-button>
     </div>

  </div>

  <component :is="current"  v-show="!flags"></component>
  </div>
</template>


<script>

import bianji from '../gonggong/bianjizizujian.vue'
import shencha from '../gonggong/shencha.vue'
import {Toast} from 'mint-ui'
import Bus from '../../mock/bus.js'

export default {
data() {
    return {
        flags:true,
        current:"",
        list:[]
    }
},
methods: {
   back(){

        this.$router.push({path:"/set/wuye"});


    },
    bianji(i){
            this.flags=false;
             Bus.$emit('vals', this.list)
            this.$router.push({path:'/set/shencha3/bianji/'+i})
            //this.current=bianji
           



    },
    shencha(){
      this.flags=false;
          this.$router.push({path:'/set/daishencha2/shencha'})
            this.current=shencha;
    }
},
components:{

    bianji,
    shencha
},
created() {
   this.$http.get("/login").then((data) => {
        //console.log(data)
        if (data.status === 200) {
          this.list = data.body.info;
          // console.log(this.list)
        console.log(this.list);

        } else {
          Toast("请求数据出错");
        }
      });
},

};
</script>

<style lang="scss" scoped>
.contains {
  background-color: rgb(238, 236, 236);
  width: 100%;
  height: auto;
  position: relative;

        .titles{

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
      .p{
          color: #666;
      }
    }
            img{
                width: 100%;
                
            }

        .dibu{
            height: 20px;
               //margin-top: 10px;
               //background-color: red;

           
            span{
                font-size: 14px;
             line-height: 20px;
             margin-left: 16px;
                color: #666;
            }

            :nth-child(1){
                
                margin-left: 0px;
            }        
        }

        .edit{
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
</style>