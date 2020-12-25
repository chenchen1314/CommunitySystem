import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './lib/mui/css/mui.min.css'
Vue.config.productionTip = false
//按需导入header组件
import { Header,Swipe, SwipeItem,Button,Field,Cell  } from 'mint-ui';
import 'mint-ui/lib/style.css'
import './lib/mui/css/icons-extra.css'
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name,Button);
Vue.component(Field.name,Field);
Vue.component(Cell.name,Cell);

//按需导入Search资源  vant
//import {Search} from 'vant'
//Vue.use(Search);


//引入resource资源 http请求
import VueResource from 'vue-resource'
Vue.use(VueResource);
if (process.env.NODE_ENV !== 'production') require('./mock/index')


//导入bootstrap 资源


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
