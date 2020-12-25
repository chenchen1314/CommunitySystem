<template>
    <div class="containss">

        <div  v-if="flag">
         <div class="titles">
                <mt-header title="">
  			
    			<mt-button icon="back" @click="back"  slot="left"  ref="fanhui">编辑</mt-button>
  	
  			<!--<mt-button icon="more" slot="right"></mt-button>>!-->
			</mt-header>
         </div>
            <div class="biaodan">
       
                <form class="mui-input-group">
					<div class="mui-input-row">
						<label><span>*</span>类型</label>
						<input type="text" placeholder="普通输入框">
					</div>
                    </form>
            
            </div>

            <div class="biaodan2">
            <form class="mui-input-group">
					<div class="mui-input-row">
						<label><span>*</span>标题</label>
						<input type="text" placeholder="" :value="list.title">
					</div>

                    
                    </form>
            
                    <mt-field label="内容" placeholder="introduction" type="textarea" rows="7" class="nei" :value="list.subtitle"></mt-field>


            </div>

            <div class="tupian">
            <span >图片</span>
                        <div class="moxing">
                        <img src="../../assets/inload.png" alt="">
                        </div>


            </div>
            <div class="">
                <div class="jieshou" @click="push">
                    <mt-cell title="接收人" value='>'></mt-cell>
                </div>
                <span class="juanjiang">已选择{{currentren}}个人</span>
            </div>

            
            <mt-button type="primary" size="large"  plain  class="mt" >修改...</mt-button>

           
            </div>
              <div v-show="false">
                  <jieshouren ref="huoqu"></jieshouren>     
            </div> 
    </div>
</template>
<script>

import jieshouren from './jieshouren.vue'
import Bus from '../../mock/bus.js'
export default {
    inject: ['reload'],

    data() {
        return {
            flag:true,
            currentpath:"",
            currentren:0,
            list:[],
            currentid:0
        }
    },
    

    beforeMount: function (){
      var vm=this
      // 用$on事件来接收参数
      Bus.$on('val', (data) => {
        console.log(data)

        vm.currentren=data
      })
    },
    methods: {
        back(){
                this.$router.go(-1);

        },
        chang(){
                    this.flag=false;

        },
        push(){
            this.$router.push({path:this.currentpath+'/jieshou'})
            //console.log(this.$refs.huoqu.allint)
        },
        getPath(){
            console.log(this.$route.path+"123456");
        
            this.reload();
  }
    }, 
    components:{
        jieshouren
       
    } ,created() {

        this.currentren= JSON.parse(localStorage.getItem('int')||'[]')
              // this.reload()
               
         this.currentid=this.$route.params.id || 0;

          // t
           this.currentpath= this.$route.path
    

           
        //this.currentren=this.$refs.huoqu.allint;
            //console.log(this.shuju)
                // var vm=this
       
       
           this.$http.get("/login").then((data) => {
        //console.log(data)
        if (data.status === 200) {
          this.list = data.body.info[this.currentid];
          // console.log(this.list)
        console.log(this.list);

        } else {
          Toast("请求数据出错");
        }
      });
      

     

        }

}
</script>
<style lang="scss" scoped>
.containss{
    width: 100%;
    height: 650px;
   // position: absolute;
    position: relative;
    padding-bottom: 200px;
    background-color: rgb(224, 221, 221);
        .titles{

            position: absolute;
            width: 100%;
            height: 40px;
            left: 0;
            top: -40px;
            z-index: 10000000;
            display: block;

        }
        .biaodan{

            margin-top: 10px;
             position: absolute;    
            display: block;
            width: 100%;
            span{
                color:red;
            }


        }
        .biaodan2{

            width: 100%;
            position:absolute;
            display:block;
            margin-top: 60px;
                  span{
                color:red;
            }
            .nei{
                padding-left: 10px;
            }
        }
.tupian{

        width: 100%;
        height: 80px;
        background-color: #fff;
        position: absolute;
        top:320px;
        padding: 10px 19px;
      .moxing{
            width: 50px;
            height: 50px;
            border: 1px solid #000000;
            margin-left:60px;
            position:relative;
            margin-top: -20px;
            overflow: hidden;
                img{

                    background: cover;
                    width: 50px;
                    margin-top:2px;
                    margin-left: -1px;

                }
            
      }
        
}
            .jieshou{
                width: 100%;
                height: 48px;
                position: absolute;
                margin-top:410px;
                background-color:#fff;
                 padding-left:5px;
               
                title{
                    font-style: 16px;
                   
                }
           
            
            }
                 .zhanwei{
                    width:100%;
                    height: 48px;
                    background-color:#000000;
                    z-index: 100000;
                    position:absolute;
                    top:410px;
                    span{
                        width: 100%;
                        background-color: #fff;
                    }
                }

            .juanjiang{
                position: relative;
                 margin-top: 425px;
                 color:#333;
                   
                 display: inline-block;
                 margin-left: 100px;

                 
                } 

                .mt{
                    //@at-rootposition:relative;
                   // margin-top:460px;
                    z-index: 10000;
                    top:25px;

                } 

}
    
</style>