<template>
    <div class="bgs">
    <transition>
         <div class="tab-bar">
                            <van-nav-bar
                    title="账号管理"
                    left-text="返回"
                    left-arrow
                    @click-left="onClickLeft"
                    fixed=''
                    />

                </div>
    </transition>
        
                <div class="top">
      <div class="wrap">
        <span> <img src="../../assets/我是住户/sousuo.png" alt="" /></span>
        <input type="text" placeholder="请输入搜索关键字" />
      </div>
    </div>
    <div class="biaotis">
                <div class="list-one">全部</div>
                <div class="list-twos">客服</div>
                <div class="list-three">维修</div>
                <div class="list-four">保安</div>
                <div class="list-five">物业管理员</div>
    </div>
        <div class="list-content">
            <ul style="position:relative; height:auto;">
            <transition-group name="slide">
            
           
                <li class="no1" style="position:relative;" v-for="(item,i) in list" :key="item">
                    <div class="lefts">
                    <img :src=item.userImage alt="">
                    </div>
                    <div class="centers">
                    <div class="fonts">
                    <p>{{item.name}}</p>
                    <p>{{item.roomNumber}}</p>
                    </div>
                    </div>
                    <span style="font-size:14px; left:44%; top:30px;  position:absolute; ">Tel: {{item.tel}}</span>
                    <div class="rights">
                            <div class="kefu">{{item.title}}</div>
                            <div class="shouquan">
                                <van-button type="info" round size='mini' @click="shouquan">授权</van-button>
                                <van-button type="info" round size='mini' @click="cancel(item.userID,i)">删除</van-button>
                            </div>
                    </div>
                </li>
</transition-group>

                <li class="no1">
                    <div class="lefts">
                    <img src="../../assets/huge.jpg" alt="">
                    </div>
                    <div class="centers">
                    <div class="fonts">
                    <p>胡歌</p>
                    <p>阳光小区</p>
                    <p>1号楼一单元101</p>
                    </div>
                    </div>
                    <div class="rights">
                            <div class="kefu">客服</div>
                            <div class="shouquan">
                                <van-button type="info" round size='mini'  @click="shouquan">授权</van-button>
                                 <van-button type="info" round size='mini' >删除</van-button>
                            </div>
                    </div>
                </li>
                <li class="no1">
                    <div class="lefts">
                    <img src="../../assets/dilireba.jpg" alt="">
                    </div>
                    <div class="centers">
                    <div class="fonts">
                    <p>迪丽热巴</p>
                    <p>阳光小区</p>
                    <p>2号楼一单元401</p>
                    </div>
                    </div>
                    <div class="rights">
                            <div class="kefu">保安</div>
                            <div class="shouquan">
                                <van-button type="info" round size='mini'  @click="shouquan">授权</van-button>
                                 <van-button type="info" round size='mini'>删除</van-button>
                            </div>
                    </div>
                </li>
                 <li class="no1" style="position:relative;">
                    <div class="lefts">
                    <img src="../../assets/wangyibo.jpg" alt="">
                    </div>
                    <div class="centers">
                    <div class="fonts">
                    <p>王一博</p>
                    <p>阳光小区</p>
                    <p>3号楼一单元201</p>
                    </div>
                    
                    </div>
                    <span style="font-size:14px; left:44%; top:30px;  position:absolute; ">Tel: 43153255</span>
                    <div class="rights">
                            <div class="kefu">客服</div>
                            <div class="shouquan">
                                <van-button type="info" round size='mini' @click="shouquan">授权</van-button>
                                 <van-button type="info" round size='mini' >删除</van-button>
                            </div>
                    </div>
                </li>
                 <li class="no1">
                    <div class="lefts">
                    <img src="../../assets/yangmi.jpg" alt="">
                    </div>
                    <div class="centers">
                    <div class="fonts">
                    <p>杨幂</p>
                    <p>阳光小区</p>
                    <p>2号楼一单元201</p>
                    </div>
                    </div>
                    <div class="rights">
                            <div class="kefu">维修</div>
                            <div class="shouquan">
                                <van-button type="info" round size='mini'  @click="shouquan">授权</van-button>
                                 <van-button type="info" round size='mini' >删除</van-button>
                            </div>
                    </div>
                </li>
                  

            </ul>
        
        </div>


    </div>
</template>

<script>
import Vue from 'vue'
import {Button } from 'vant'
Vue.use(Button)
export default {
    data() {
        return {
            list:[]
        }
    },
    methods: {
        onClickLeft(){
            this.$router.push({path:'/set/wuye'})
        },
        shouquan(){
            this.$router.push({path:"/set/wuye/account/shouquan"})
        },
        requireaccount(){
                this.$http.get("/api/user/selectAllUser").then((response)=>{
                        this.list=response.body;
                            console.log(response); 
                }) 

        },
        cancel(ID,i){
                alert("当前点击的ID为:"+ID);
                this.list.splice(i,1);



        }
    },
    created() {
        this.requireaccount()
    },
}
</script>
<style lang="scss" scoped>

.v-enter,.v-leave-to{
    opacity: 1;

}
.v-enter-active,
.v-leave-active{
    transition:all 0s ease;
}
.slide-enter,.slide-leave-to{
    opacity: 0;
    transform: translateY(100px);

}
.slide-enter-active,
.slide-leave-active{
    transition:all 0.3s ease;
}
*{
    margin: 0;
}
body{
    padding-bottom:50px;
}
 .bgs{
    width: 100%;
    height: auto;
    background-color:rgb(233, 233, 233);
   position: relative;

        .top {
  width: 100%;
  background-color: rgb(29, 134, 219);

  padding:10px 20px;
  padding-top:15px;
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
.biaotis{
    background-color: #fff;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: nowrap;
    padding:0px 10px;

    .list-one{
            width: 20%;
            height: 50px;
            line-height: 50px;
            font-size: 20px;

    }
    .list-twos{
            width: 20%;
            height: 50px;
            line-height: 50px;
            
    }
        .list-three{
            width: 20%;
            height: 50px;
            line-height: 50px;
            
    }

        .list-four{
            width: 18%;
            height: 50px;
            line-height: 50px;
            
    }
        .list-five{
            width: 27%;
            height: 50px;
            line-height: 50px;
            
    }

}
    .list-content{
        margin-top: 10px;
        ul{
            list-style: none;
            width: 100%;
            height: 400px;
            background-color: #fff;
                li{
                    border-top:1px solid #3333;
                    padding:10px;
                    display: flex;
                    justify-content: space-between;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    margin-bottom: 20px;
                    margin-top: 10px;
                }
            .no1{
                width: 100%;
                height: 80px;
                //background-color:red;
                        .lefts{
                            width: 80px;
                            height: 80px;
                            background-color:red;                       
                            border-radius: 50px;  
                            overflow: hidden;
                            img{
                                width: 100%;
                                //background-position:10px 10px;

                            }                     
                                                   
                             }
                             .centers{
                                 flex: 1;
                                 height: 80px;
                                // background-color:blue;
                                 .fonts{
                                    padding:14px 0px 5px 10px; 
                                    
                                    p{
                                        color: #333 !important;
                                    }
                                 }

                             }
                             .rights{
                                 width: 80px;
                                 height: 80px;
                                 font-size: 14px;
                                 .kefu{
                                        margin-top: 14px;
                                 }
                                .shouquan{
                                    margin-left:30px;
                                }

                             }
                
            }
            .no2{
                width: 100%;
                height: 80px;
                //@at-rootbackground-color:blue;
            }
        }

    }


}


</style>