<template>
    <div class="bgss">
    <transition>
        <div class="tab-bar">
                            <van-nav-bar
                    title="授权"
                    left-text="返回"
                    left-arrow
                    @click-left="onClickLeft"
                    fixed=''
                    />

                </div>
    </transition>
           
                <div class="contentss">
                                    <van-cell center title="信息录入">
                <template #right-icon>
                    <van-switch v-model="checked1" size="24" />
                </template>
                </van-cell>
                <van-cell center title="巡检告知">
                <template #right-icon>
                    <van-switch v-model="checked2" size="24" />
                </template>
                </van-cell>
                <van-cell center title="审查发布">
                <template #right-icon>
                    <van-switch v-model="checked3" size="24" />
                </template>
                </van-cell>

                </div>
    </div>
</template>

<style lang="scss" scoped>
            .v-enter,.v-leave-to{
                opacity: 1;
            }
            .v-enter-active,
            .v-leave-active{
                transition:all 0s ease;
            }

            .bgss{
                width: 100%;
                height: 100%;
                background-color: rgba(214, 211, 211, 0.2);
                    .tab-bar{
                        width: 100%;
                        height: 10px;
                    }

                .contentss{
                    width: 100%;
                    height: auto;
                    background-color: #fff;
                 
                }
            }
</style>

<script>
import Vue from 'vue'
import {Switch,NavBar,Cell} from 'vant'
Vue.use(Switch).use(NavBar).use(Cell);
export default {
    data() {
        return {
            checked1:false,
            checked2:false,
            checked3:false,
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1);
        }
    },
}
</script>