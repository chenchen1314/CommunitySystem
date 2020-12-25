<template>
  <div class="contain">
    <div id="account" class="mui-page">
      <div class="mui-navbar-inner mui-bar mui-bar-nav">
    
        <h1 class="mui-center mui-title">账号与安全</h1>
      </div>
      <div class="mui-page-content">
        <div class="mui-scroll-wrapper">
          <div class="mui-scroll">
            <ul class="mui-table-view">
              <li class="mui-table-view-cell">
                <a id="head" class="mui-navigate-right"
                  >头像
                  <span class="mui-pull-right head">
                    <img
                      class="head-img mui-action-preview"
                      id="head-img1"
                      src=""
                    />
                  </span>
                </a>
              </li>
              <li class="mui-table-view-cell">
                <a>姓名<span class="mui-pull-right">Hbuilder</span></a>
              </li>
              <li class="mui-table-view-cell">
                <a
                  >HBuilder账号<span class="mui-pull-right"
                    >hbuilder@dcloud.io</span
                  ></a
                >
              </li>
            </ul>
            <ul class="mui-table-view">
              <li class="mui-table-view-cell">
                <a>QQ号<span class="mui-pull-right">88888888</span></a>
              </li>
              <li class="mui-table-view-cell">
                <a>手机号<span class="mui-pull-right">18601234567</span></a>
              </li>
              <li class="mui-table-view-cell">
                <a
                  >邮箱地址<span class="mui-pull-right"
                    >hbuilder@dcloud.io</span
                  ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <mt-button type="primary" size="large"  class="mt" @click="change">退出登录</mt-button>

    <transition name="fade">
    

    <div class="mask" v-if="flag">
    <div class="contains"> 
    <div class="topbar"><br><span class="one">亲~才来一会</span>
    <span class="two">确认要离开嘛</span>
    </div>
    <div class="bottom">
    <div class="left" @click="quxiao"><span >取消</span></div>
    <div class="right" @click="queren"><router-link to="/set">确认</router-link></div>
    
    </div>
    </div>
    
    </div>
        </transition>
  </div>
</template>

<script>
import Bus from '../../mock/bus.js'
export default {
inject:['reload'],
    data() {
        return {
           flag:false,
           elementValue: true
        }
    },
    methods: {
        change(){
             console.log(this.$route.fullPath )   
            //    this.$route.replace({
            //        path:"./refresh.vue"
            //    })
            //this.reload();
            //this.$router.go("")
            this.flag=true;


        },
        quxiao(){
            this.flag=!this.flag;

        },
        
        queren(){
          //console.log("12345")
           // this.$emit('func',false);


           localStorage.setItem("cmts","[]")
           Bus.$emit('val', this.elementValue)



        }
    },
};
</script>
<style lang="css" scoped>
.fade-enter-active,.fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.v-enter-active,
.v-leave-active{
  transition:all 0.4s ease;
}

.contain{
  overflow-x:hidden;
  width: 100%;
  height: 100%;
  

}
.mui-views,
.mui-view,
.mui-pages,
.mui-page,
.mui-page-content {

  width: 100%;
  height: 100%;

}
.mui-pages {
  top: 30px;
 height: 100%;
}
.mui-scroll-wrapper,
.mui-scroll {

  margin-top: 0px;
  position: relative;
}
.mui-page.mui-transitioning {
  -webkit-transition: -webkit-transform 300ms ease;
  transition: transform 300ms ease;
}
.mui-page-left {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.mui-ios .mui-page-left {
  -webkit-transform: translate3d(-20%, 0, 0);
  transform: translate3d(-20%, 0, 0);
}
.mui-navbar {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 10;
  height: 44px;

}
.mui-navbar .mui-bar {
  position: absolute;
  background: transparent;
  text-align: center;
}
.mui-android .mui-navbar-inner.mui-navbar-left {
  opacity: 0;
}
.mui-ios .mui-navbar-left .mui-left,
.mui-ios .mui-navbar-left .mui-center,
.mui-ios .mui-navbar-left .mui-right {
  opacity: 0;
}
.mui-navbar .mui-btn-nav {
  -webkit-transition: none;
  transition: none;
  -webkit-transition-duration: 0s;
  transition-duration: 0s;
}
.mui-navbar .mui-bar .mui-title {
  display: inline-block;
  width: auto;
}
.mui-page-shadow {
  position: absolute;
  right: 100%;
  top: 0;
  width: 16px;
  height: 100%;
  z-index: -1;
  content: "";
}
.mui-page-shadow {
  background: -webkit-linear-gradient(
    left,
    rgba(0, 0, 0, 0) 0,
    rgba(0, 0, 0, 0) 10%,
    rgba(0, 0, 0, 0.01) 50%,
    rgba(0, 0, 0, 0.2) 100%
  );
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0,
    rgba(0, 0, 0, 0) 10%,
    rgba(0, 0, 0, 0.01) 50%,
    rgba(0, 0, 0, 0.2) 100%
  );
}
.mui-navbar-inner.mui-transitioning,
.mui-navbar-inner .mui-transitioning {
  -webkit-transition: opacity 300ms ease, -webkit-transform 300ms ease;
  transition: opacity 300ms ease, transform 300ms ease;
}

.contain .mui-pages {
  top: 46px;
  height: auto;
}

.mui-page {
  display: block;
}
.mui-pages .mui-page {
  display: block;
}
.mui-page .mui-table-view:first-child {
  margin-top: 15px;
}
.mui-page .mui-table-view:last-child {
  margin-bottom: 30px;
}
.mui-table-view {
  margin-top: 20px;
}

.mui-table-view span.mui-pull-right {
  color: #999;
}
.mui-table-view-divider {
  background-color: #efeff4;
  font-size: 14px;
}
.mui-table-view-divider:before,
.mui-table-view-divider:after {
  height: 0;
}
.head {
  height: 40px;
}
#head {
  line-height: 40px;
}
.head-img {
  width: 40px;
  height: 40px;
}
#head-img1 {
  position: absolute;
  bottom: 10px;
  right: 40px;
  width: 40px;
  height: 40px;
}
.update {
  font-style: normal;
  color: #999999;
  margin-right: -25px;
  font-size: 15px;
}
.mui-fullscreen {
  position: fixed;
  z-index: 20;
  background-color: #000;
}
.mt {
  margin-top:10px;
  display: block;
  z-index:1000
}

.mask{
  z-index: 100000;
  width: 100%;
  height: 100%; 
  background-color: rgba(184, 183, 183, 0.596);
  position: absolute;
  top: 0;
  left: 0;

   
}
.mask .contains{
  width: 260px;
  height: 130px;
  background-color: #fff;
  margin: 240px auto;
  z-index: 10000;
  border-radius: 20px;
}
.contains .topbar .one{
  font-size: 18px;
  color: #333;
  margin-left: 80px;
  margin-top:6px;
  font-weight: bold;
  font: verdana;
}
.topbar .two{
  font-size: 16px;
  color: #333;
   font: verdana;
   margin-left: 82px;
   letter-spacing:1px;  

}
.contains .bottom{
  width:100%;
  height: 20px;
  border-top: 1px solid #999;
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
  
}
.bottom .left{
  border-right:1px solid #999;
  color: #007aff;
  font-weight:  bold;
  padding: 14px 46px;
  width: 50%;
  height: 46px;
  

}
.bottom .right{
  color: #191dcf;
  font: 200 ;
  padding: 14px 46px;
  z-index:1000000;
  width: 50%;
  height: 46px;
}


/*问题反馈在setting页面单独的css*/
</style>