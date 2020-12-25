<template>
  <div class="containBox">
      <div class="nav">

<!--header-->
<mt-header fixed title="阿啦啦小区"></mt-header>
    </div>
<!--content-->
 <transition>
  <router-view v-if="isRouterAlive"></router-view>
</transition>
<nav class="mui-bar mui-bar-tab tabbar">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/account">
				<span class="mui-icon mui-icon-extra mui-icon-extra-express"></span>
				<span class="mui-tab-label">生活服务</span>
			</router-link>
			<router-link class="mui-tab-item" to="/cart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-notice">
        <span class="mui-badge">0</span>
        </span>
			<span class="mui-tab-label">最新发布</span>
			</router-link>
			<router-link class="mui-tab-item" to="/set">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">我的小区</span>
			</router-link>
		</nav>  
  </div>
</template>
<style lang="scss" scoped>
.tabbar{
  z-index:100000000;
}
.containBox{
  padding-top: 40px;
    overflow-x:hidden;
   padding-bottom: 50px;
   background-color: rgb(255,255,255);
         height: 100%;
         position: fixed;
         width: 100%;
         
}
.v-enter{
  transform: translateX(100%);
  opacity: 0;
}
.v-leave-to{
  transform: translateX(-100%);
  opacity: 0;
  position: absolute;
}
.v-enter-active,
.v-leave-active{
  transition: all 0.2s ease;
}


</style>
<script>
export default {
	  provide () {    //父组件中通过provide来提供变量，在子组件中通过inject来注入变量。                                             
            return {
                reload: this.reload                                              
            }
        },data() {
            return{
                isRouterAlive: true                    //控制视图是否显示的变量
            }
        },methods: {
            reload () {
                this.isRouterAlive = false;            //先关闭，
                this.$nextTick(function () {
                    this.isRouterAlive = true;         //再打开
                }) 
            }
        }
}
</script>