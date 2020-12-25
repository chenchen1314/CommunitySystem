<template>
    <div class="bg">
                <div class="tab-bar">
                <transition>
                
                
                            <van-nav-bar
                    title="信息认证"
                    left-text="返回"
                    left-arrow
                    @click-left="onClickLeft"
                    fixed='true'
                    />
                    </transition>

                </div>
                <div class="list-one">
                        <van-field readonly  clickable name="picker"
                :value="value"
                label="身份"
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
                label="小区"
                center
                placeholder="请选择小区"
                @click="showPicker2 = true"
                class="biaodan2 van-cell--required"
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
                 <div class="list-three">
                        <van-field readonly  clickable name="picker"
                :value="value3"
                label="详细地址"
                center
                placeholder="请选择详细地址"
                @click="showPicker3 = true"
                class="biaodan3 van-cell--required"
                />
                <van-popup v-model="showPicker3" position="bottom">
                <van-picker
                    show-toolbar
                    :columns="columns3"
                    @confirm="onConfirm3"
                    @cancel="showPicker3 = false"
                />
                </van-popup>
                </div>
                <div class="list-four">
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
            <div class="button">
            <van-button type="info" size="large" >提交</van-button>
            </div>
                    
    </div>
</template>

<script>
import Vue from 'vue';
import { Form,Button,Field,Popup,CellGroup,Picker,NavBar  } from 'vant';
 Vue.use(Form).use(Button).use(Field).use(Popup).use(CellGroup).use(Picker).use(NavBar);

export default {
    data() {
        return {
            value: '',
            value2:'',
            value3:'',
            columns: ['物业经理', '客服', '维修人员', '保安', '物业管理人员'],
            columns2:['阳光小区','阴间住宅'],
            columns3: [
        {
          text: '一号楼',
          children: [
            {
              text: '一单元',
              children: [{ text: '101' }, { text: '102' },{ text: '201' },{ text: '202' },{ text: '301' },{ text: '302' }],
            },
            {
              text: '二单元',
              children: [{ text: '001别墅' }, { text: '002别墅' }],
            },
          ],
        },
        {
          text: '二号楼',
          children: [
            {
              text: '一单元',
              children: [{ text: '101' }, { text: '102' },{ text: '103' },{ text: '201' },{ text: '202' },{ text: '203' }],
            },
            {
              text: '二单元',
              children: [{ text: '201' }, { text: '202' }],
            },
          ],
        },
      ],
            showPicker: false,
            showPicker2: false,
            showPicker3: false,
        }
    },
    methods: {
        onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },    onConfirm2(value) {
      this.value2 = value;
      this.showPicker2 = false;
    },
    onConfirm3(value) {
      this.value3 = value;
      this.showPicker3 = false;
    },
    onClickLeft(){
this.$router.go(-1);

    }
        
    },
    components:{
          

    },
    props:[],
    created() {
        
    },
    mounted() {
        
    },
    
}
</script>
<style lang="scss">
        .v-enter,
        .v-leave-to{
            opacity: 1;
        }
        .v-enter-active,
        .v-leave-active{
            transition:all 0s ease;
        }



.bg{
    background-color: rgb(224, 223, 223);
    width: 100%;
    height: 100%;
    .list-one{
            display: block;
            width: 100%;
            position: absolute;
            input[type=text]{
                margin-bottom: 0px;
            }

            .biaodan1{
                margin-top:20px ;
            }
        
    }
    .list-two{
        display: block;
        width: 100%;
        height:60px;
        position:absolute;
         margin-top:90px ;
        input[type=text]{
                margin-bottom: 0px;
            }
    }
    .list-three{
        border-top: 1px solid #3333;
        display: block;
        width: 100%;
        height:60px;
        position:absolute;
         margin-top:150px ;
        input[type=text]{
                margin-bottom: 0px;
            }
    }
    .list-four{
        border-top: 1px solid #3333;
        display: block;
        width: 100%;
        height:60px;
        position:absolute;
         margin-top:220px;
        input[type=text]{
                margin-bottom: 0px;
            }
            .name{
                border-bottom: 1px solid #3333 !important;
            }

    }
    .button{
        position: absolute;
        margin-top:450px;
        width: 100%;
    }
}

    


</style>