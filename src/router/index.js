import Vue from 'vue'
import VueRouter from 'vue-router'
import account from '../views/account.vue'
import cart from '../views/cart.vue'
import home from '../views/home.vue'
import set from '../views/set.vue'
import user from '../components/chooseuser/user.vue'
import renzheng from '../components/gonggong/renzheng.vue'
import login from '../components/chooseuser/login.vue'
import register from '../components/chooseuser/register.vue'

import yeweidaishencha from '../components/subyewei/daishencha.vue'
import yeweishenchalishi from '../components/subyewei/shenchalishi.vue'
import yeweiwodefabu from '../components/subyewei/wodefabu.vue'
import yeweixinxiluru from '../components/subyewei/xinxiluru.vue'
import jieshouren from '../components/gonggong/jieshouren.vue'
import shencha from '../components/gonggong/shencha.vue'
import bianji from '../components/gonggong/bianjizizujian.vue'
//import root from '../views/root.vue'

import successyewei from '../components/successlogin/yewei.vue'
import successjuwei from '../components/successlogin/juwei.vue'
import successwuye from '../components/successlogin/wuye.vue'
//导入居委模块 
import juweidaishencha from '../components/subjuwei/daishencha.vue'
import juweishenchalishi from '../components/subjuwei/shenchalishi.vue'
import juweifabu from '../components/subjuwei/wodefabu.vue'
import juweiluru from '../components/subjuwei/xinxiluru.vue'


//导入物业模块
import wuyeaccount from '../components/subwuye/account.vue'
import wuyedaishencha from '../components/subwuye/daishencha.vue'
import wuyerenzheng from '../components/subwuye/renzheng.vue'
import wuyeshenchalishi from '../components/subwuye/shenchalishi.vue'
import wuyewodefabu from '../components/subwuye/wodefabu.vue'
import wuyeluru from '../components/subwuye/xinxiluru.vue'
import wuyexunjian from '../components/subwuye/xunjian.vue'
import wuyeshouquan from '../components/subwuye/shouqunzujian/shouquan.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: "/home" },

  { path: '/home', component: home },
  { path: '/cart', component: cart },
  { path: '/account', component: account },
  { path: '/set', component: set },
  { path: '/set/yewei', component: successyewei },
  { path: '/set/juwei', component: successjuwei },
  { path: '/set/wuye', component: successwuye },   //点击返回时直接反回到此页面

  {path:"/set/user",component:user},
  { path: '/set/user/renzheng', component: renzheng },
  {path:"/set/user/login/:id",component:login},
  {path:"/set/user/login/0/register",component:register},

  //业委模块
  { path: '/set/daishencha1', component: yeweidaishencha },
  { path: '/set/shenchalishi1', component: yeweishenchalishi },
  { path: '/set/xinxiluru1', component: yeweixinxiluru },
  { path: '/set/daishencha1/bianji/:id', component: bianji },
  { path: '/set/daishencha1/bianji/:id/jieshou', component: jieshouren },
  { path: '/set/daishencha1/shencha', component: shencha },

  { path: '/set/shenchalishi1/jieshou', component: jieshouren },
  { path: '/set/shenchalishi1/bianji/:id', component: bianji },
  { path: '/set/shenchalishi1/bianji/:id/jieshou', component: jieshouren },
  { path: '/set/xinxiluru1/jieshou', component: jieshouren },
  //{ path: '/set/daishencha1/jieshou', component: jieshouren }
  { path: '/set/wodefabu1', component: yeweiwodefabu },
  { path: '/set/wodefabu1/bianji', component: bianji },
  { path: '/set/wodefabu1/bianji/jieshou', component: jieshouren },


  //居委模块
  { path: '/set/daishencha2', component: juweidaishencha },
  { path: '/set/shenchalishi2', component: juweishenchalishi },
  { path: '/set/xinxiluru2', component: juweiluru },
  { path: '/set/xinxiluru2/jieshou', component: jieshouren },
  { path: '/set/wodefabu2', component: juweifabu },
  { path: '/set/daishencha2/bianji/:id', component: bianji },
  { path: '/set/daishencha2/bianji/:id/jieshou', component: jieshouren },
  { path: '/set/daishencha2/shencha', component: shencha },
  { path: '/set/wodefabu2/bianji', component: bianji },
  { path: '/set/wodefabu2/bianji/jieshou', component: jieshouren },

  //物业模块
  { path: '/set/wuye/account', component: wuyeaccount },
  { path: '/set/wuye/account/shouquan', component: wuyeshouquan },
  { path: '/set/wuye/shencha3', component: wuyedaishencha },
  { path: '/set/shencha3/bianji/:id', component: bianji },
  { path: '/set/shencha3/bianji/:id/jieshou', component: jieshouren },
  { path: '/set/wuye/renzheng', component: wuyerenzheng },
  { path: '/set/wuye/lishi', component: wuyeshenchalishi },
  { path: '/set/lishi3/bianji/:id', component: bianji },
  { path: '/set/lishi3/bianji/:id/jieshou', component: jieshouren },
  { path: '/set/wuye/fabu', component: wuyewodefabu },
  { path: '/set/fabu3/bianji', component: bianji },
  { path: '/set/fabu3/bianji/jieshou', component: jieshouren },
  { path: '/set/wuye/luru', component: wuyeluru },
  { path: '/set/wuye/luru/jieshou', component: jieshouren },

  { path: '/set/wuye/xunjian', component: wuyexunjian },
  { path: '/set/wuye/xunjian/jieshou', component: jieshouren }




]

const router = new VueRouter({
  routes,
  linkActiveClass: "mui-active"
})

export default router
