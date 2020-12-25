<template>
    <div class="bgs">
    <transition>
    

             <div class="tab-bar">
                            <van-nav-bar
                    title="信息认证"
                    left-text="返回"
                    left-arrow
                    @click-left="onClickLeft"
                    fixed=''
                    />

                </div>
    </transition>
                <div class="shang">
                    <div class="list-one">
                        <van-field readonly  clickable name="picker"
                :value="value"
                label="模式"
                center
                placeholder="点击选择城市"
                @click="showPicker = true"
                class="biaodan1 van-cell--required"
                />
                <van-popup v-model="showPicker" position="bottom">
                <van-picker
                    show-toolbar
                    :columns="columns"
                    @confirm="onConfirm"
                    @cancel="showPicker = false"
                />
                </van-popup>
                </div>

                 <div class="list-two">
                        <van-field readonly  clickable name="picker"
                :value="value2"
                label="类型"
                center
                placeholder="点击选择城市"
                @click="showPicker2 = true"
                class="biaodan1 van-cell--required"
                />
                <van-popup v-model="showPicker2" position="bottom">
                <van-picker
                    show-toolbar
                    :columns="columns2"
                    @confirm="onConfirm2"
                    @cancel="showPicker2 = false"
                />
                </van-popup>
                </div>
                
                </div>
                <div class="xia">
                <div class="xia-one">
                <van-cell-group>
  <van-field v-model="value3"  center label="标题" placeholder="请输入用户名"  class="van-cell--required"/>
</van-cell-group>
                </div>
                <div class="xia-two">
                <van-cell-group>
  <van-field v-model="value4"  center label="位置" placeholder="请输入用户名" class="van-cell--required"/>
</van-cell-group>
                </div>
                <div class="xia-three">
                <van-cell-group>
  <van-field v-model="value5"  center label="问题" placeholder="请输入用户名" class="van-cell--required" />
</van-cell-group>
                </div>
                <div class="xia-four">

                <div class="left">
                        <span>图片上传</span>
                </div>
                <div class=right>
                         <van-uploader v-model="fileList" multiple />
                </div>
               
                </div>
                </div>
                <div class="bottom">
                     <van-cell-group>
                <van-field
                    v-model="username"
                    error
                    required
                    label="姓名"
                    placeholder="请输入姓名"
                    class="name"
                />
                <van-field
                    v-model="phone"
                    required
                    label="手机号"
                    placeholder="请输入手机号"
                    error-message="手机号格式错误"
                />
                                    <van-field
                    v-model="sms"
                    center
                    clearable
                    label="短信验证码"
                    placeholder="请输入短信验证码"
                    >
                    <template #button>
                        <van-button size="small" type="primary">发送验证码</van-button>
                    </template>
                    </van-field>
                </van-cell-group>
                
                </div>
                <router-link to="/set/wuye/xunjian/jieshou">
                <div class="jieshouren">
                    
                    <div class="wenan">接收人</div>
                    <div class="zhongxin">请选择接收人</div>
                    <div class="icon">></div>
                    
                    </div>
                    </router-link>
                    <div class="buttons">
                        <van-button type="info" size="large">信息按钮</van-button>
                    
                    </div>
                
            

    </div>
</template>

<script>
import Vue from 'vue';
import { Form,Button,Field,Popup,CellGroup,Picker,NavBar,Uploader  } from 'vant';
 Vue.use(Form).use(Button).use(Field).use(Popup).use(CellGroup).use(Picker).use(NavBar).use(Uploader)
export default {
    data() {
        return {
        fileList: [
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
      ,
      ],

             value: '',
             value2: '',
             value3: '',
             value4: '',
             value5: '',
             username:'',
             phone:'',
             sms:'',

      columns: ['巡检', '告知'],
      columns2: ['公告', '通知'],
      showPicker: false,
      showPicker2: false,
        }
    },
    methods: {
         afterRead(file) {        //图片的上传
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
        onClickLeft(){
            this.$router.go(-1);
        },
        onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
       onConfirm2(value) {
      this.value2 = value;
      this.showPicker2 = false;
    },
    },
}
</script>
<style lang="scss" >
        .v-enter,
        .v-leave-to{
            opacity: 1;

        }
.v-enter-active,
.v-leave-active{
    transition:all 0s ease;
}

    .bgs{
        
        background-color:rgba(216, 216, 216, 0.2);
        width: 100%;
        height: auto;
        
        .tab-bar{
            width: 100%;
            height: 20px;
        }
            .shang{
                width: 100%;
                height: auto;
                background-color: #fff;
                position: relative;

                .list-one{
                
            display: block;
            width: 100%;
            position: absolute;
            input[type=text]{
                margin-bottom: 0px;
            }
            .van-cell--required::before{
                position: absolute;
                left: 8px;
                color: #ee0a24;
                font-size: 14px;
                content: '*';
                
            }
           
  }
  .list-two{
      display: block;
            width: 100%;
            position: absolute;
            top: 60px;
            input[type=text]{
                margin-bottom: 0px;
            }


  }
        
        
    }
            

        
            .xia{
                width: 100%;
                height: auto;
               
                //@at-roottop: 20px;
                margin-top: 135px;
                  input[type=text]{
                margin-bottom: 0px;
            }
             
            .xia-four{
                width: 100%;
                height: 80px;
                display: flex;
                justify-content: flex-start;
                flex-wrap: nowrap;
                flex-direction: row;
                background-color: #fff;
                        .left{
                            width: 80px;
                            height: 80px;
                            padding-left: 10px;
                            span{
                                line-height: 80px;
                                color:#646566;
                                font-size: 14px;
                            }

                        }
                        .right{
                            flex: 1;
                            height: 80px;
                            padding-left: 30px;
                        }
            }

            }
            .bottom{

                width: 100%;
                height: auto;
                margin-top:20px;
                background-color: #fff;
                input[type=text]{
                    margin-bottom:0px;
                }
            }

            .jieshouren{
                    width: 100%;
                    height: 60px;
                    background-color: #fff;
                    margin-top: 10px;
                    color: #646566;
                    font-size: 14px;
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: nowrap;
                    line-height: 60px;

                    .wenan{
                        width: 60px;
                        height: 60px;
                        padding-left: 18px;

                    }
                    .zhongxin{
                        color:#999999;
                        flex:1;
                        padding-left: 60px;
                                            
                         }
                    .icon{
                        width: 40px;
                        height: 60px;

                    }
            }

            .buttons{
                width: 100%;
                height: 60px;
                padding: 10px 10px 0px 10px;
            }
    }


</style>