<template>
  <div>
  <div v-if="flag">
  <transition>
  <mt-header :title="currenttitle+'身份'">
  			
    			<mt-button icon='back' slot="left" ref="fanhui" @click="back">返回</mt-button>
  	
  			<!--<mt-button icon="more" slot="right"></mt-button>>!-->
			</mt-header>
  </transition>
    

    <div class="panel-primary" >
      <div class="panel-heading">添加或注册账号</div>
      <div class="panel-body form-inline">
        <label for="zhanghao">
          账号:
        </label>
         <input id="zhanghao" type="text" class="form-control" v-model="name" placeholder="请输入您的邮箱/手机号" />
        <label for>
          密码:
          <input type="password" class="form-control" v-model="pass" placeholder="请输入您的密码" />
        </label>
       <router-link  to="/set/user/login/0/register">沒有账户，注册一个!</router-link> 
        <mt-button type="primary" size="large" @click="add" class="mt">登录</mt-button>
    
      </div>
    </div>
</div>
    <div v-if="!flag">
              <transition>
              <component :is="showcpt"></component>
              </transition>
            
          
    </div>



  </div>
</template>
<script>
import { Toast } from "mint-ui";
import juwei from '../successlogin/juwei.vue'
import wuye from '../successlogin/wuye.vue'
import yewei from '../successlogin/yewei.vue'
import zhuhu from '../successlogin/zhuhu.vue'
export default {
  data() {
    return {
      name: "",
      pass: "",
      id: "",
      list: "",
      index:"",
      flag:true,
      showcpt:"" , //展现当前的组件，
      currenttitle:""

    };
  },
  created() {
    this.requireData() //获取到后端的信息 
  },
  methods: {

  back(){
      this.$router.go(-1);
  }
    ,
    add() { 
      //console.log(this.currenttitle) 
      console.log(this.list);
   for (let i in this.list) {
       console.log(this.list[i])
        if(this.list[i].identity==this.id){
            this.index=i;
            console.log(this.index)
            console.log(this.list[this.index].usertitle)
            if(this.name==this.list[this.index].username&&this.pass==this.list[this.index].password){
                        
                         
                        Toast("登录成功",0.2)
                        //判断该显示哪一个具体的组件
                        switch(this.id){
                          case '1' : this.showcpt='yewei';this.$router.push({path:'/set/yewei'});break;
                          case '2' : this.showcpt='juwei'; break;
                          case '3' : this.showcpt='wuye'; break;
                          case '4' : this.showcpt='zhuhu'; break;
                        }
                        //console.log(this.showcpt) 
                        this.flag=false;
                        this.postlocalStorge(this.index);
                        
            }
            else{
                Toast("登录失败")
                
            }

        }
    
       
        if(this.index==''){
          continue;
        };
       

    // console.log(this.list[i].id)
   }
        
        this.name = this.pass = "";
      
        // 这次做判断 看路由传过来的值是多少
       console.log("123456789"+this.index)

        //调用把当前用户的登录信息传到localStorage当中
          

    },
    requireData() {

      this.id = this.$route.params.id;
      //数据库请求地址 
      this.$http.get("/api/user/selectLogin").then((data)=>{
                    console.log(data)
                  if (data.status === 200) {
             


          this.list = data.body;
          // console.log(this.list)
        this.currenttitle=this.list[(this.id)].title

        } else {
          Toast("请求数据出错");
        }




      })

      // this.$http.get("/login").then((data) => {
      //   //console.log(data)

      // });
      
      //console.log(this.id)
      //console.log(this.list)
      //this.currenttitle='';

    
    },
    postlocalStorge(i){
            var currentlist=JSON.parse(localStorage.getItem("cmts")||'[]')
            currentlist.unshift(this.list[i])
            localStorage.setItem("cmts",JSON.stringify(currentlist) )

    }


  },
components:{
    juwei,
    wuye,
    yewei,
    zhuhu

}

}

</script>
<style lang="scss" scoped>
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


	.mint-header{

				position: absolute;
				top:0;
				left:0;
				z-index:1;
				width: 100%;

			}

.panel-primary{
    padding-top:25px;
        .panel-heading{

               text-align: center;
               tab-size: 16px;


        }

        .mt{

            margin-top:30px;

        }

    

}
</style>