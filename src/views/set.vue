<template>
<div>
  <div class="contain">
    <div class="mui-page-content" v-if="flags">
      <div class="mui-scroll-wrapper">
        <div class="mui-scroll">
          <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell mui-media">
              <router-link class="mui-navigate-right" to="/set/user">
                <img
                  class="mui-media-object mui-pull-left head-img"
                  id="head-img"
                  src="../assets/account.png"
                />
                <div class="mui-media-body">
                  Hello 新用户
                  <p class="mui-ellipsis">账号:请先登录</p>
                </div>
              </router-link>
            </li>
          </ul>
          <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell">
              <a href="#account" class="mui-navigate-right">账号与安全</a>
            </li>
          </ul>
          <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell">
              <a href="#notifications" class="mui-navigate-right">新消息通知</a>
            </li>
            <li class="mui-table-view-cell">
              <a href="#privacy" class="mui-navigate-right">隐私</a>
            </li>
            <li class="mui-table-view-cell">
              <a href="#general" class="mui-navigate-right">通用</a>
            </li>
          </ul>
          <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell">
              <a href="#about" class="mui-navigate-right"
                >小浩码龄 <i class="mui-pull-right update">V9.9.9</i></a
              >
            </li>
          </ul>
          <ul class="mui-table-view">
            <li class="mui-table-view-cell" style="text-align: center">
              <a>请先登录</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
</div>
    <div v-if="!flags">
	<transition>
		 <component :is="showspe"></component>
	</transition>
     
    </div>
  </div>
</template>

<script>
import Bus from "../mock/bus.js";
import juwei from "../components/successlogin/juwei.vue";
import wuye from '../components/successlogin/wuye.vue'
import yewei from '../components/successlogin/yewei.vue'
import zhuhu from '../components/successlogin/zhuhu.vue'
export default {
  data() {
    return {
      list: [],
      flags: true,
      showspe: "",
    };
  },
  //用于获取点击确认按钮传回来的true 将此页的flags进行显示
  mounted: function () {
    var vm = this;
    // 用$on事件来接收参数
    Bus.$on("val", (data) => {
      console.log(data+"这是从yidenglu组件获取到的值");
	 this.flags = data;
	  console.log(this.flags)
    });
  },

  methods: {
    query() {
      this.list = JSON.parse(localStorage.getItem("cmts") || "[]");
     console.log(this.list[0].identity);
      for (let i in this.list) {
        if (this.list[i].identity == "1" || "2" || "3" || "4") {
          this.flags = false;
          //console.log("ok12345");

        
          switch (this.list[i].identity) {
            case 1: this.showspe = "yewei"; break;
            case 2: this.showspe='juwei';break;
            case 3: this.showspe='wuye';  console.log("ok");break;
            case 4: this.showspe='zhuhu';break;
          }

          
        }
      }
    },
  },
  components: {
    Bus,
    juwei,
    wuye,
    yewei,
    zhuhu
  },

  created() {
    this.query(); //当登录之后判断网页缓存当中是否有成功登录的信息，并且根据信息做出相应的判断
  },
};
</script>
<style lang="scss" scoped>
body{
  background-color: #fff !important;
}

.contain{
	width: 100%;	
	height: auto;
	//position: relative;
	//z-index: 100000000000000;
}
  .v-enter{
	  opacity: 1;
  }
  .v-leave-to{
	  opacity: 1;
  }
  .v-enter-active,
  .v-leave-active{
	  transition:all 0s ease;
  }


.mui-views,
.mui-view,
.mui-pages,
.mui-page,
.mui-page-content {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: #efeff4;
}
.mui-pages {
  top: 46px;
  height: auto;
}
.mui-scroll-wrapper,
.mui-scroll {
  padding-top: 20px;
  padding-bottom: 0px;
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
  background-color: #f7f7f8;
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
.mui-page {
  display: none;
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
.mui-ios .mui-navbar .mui-bar .mui-title {
  position: static;
}
</style>