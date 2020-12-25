<template>
    <div class="containBoxs">
			<transition>
			<mt-header title="我的身份">
  			
    			<mt-button icon="back" slot="left" @click="back" ref="fanhui">返回</mt-button>
  	
  			<!--<mt-button icon="more" slot="right"></mt-button>>!-->
			</mt-header>
			</transition>
			
        	<ul class="mui-table-view mui-table-view-chevron">
							<li class="mui-table-view-cell" >
								<router-link href="#notifications" class="mui-navigate-right" to="/set/user/login/1">我是业委</router-link>
							</li>
							<li class="mui-table-view-cell">
								<router-link href="#privacy" class="mui-navigate-right" to="/set/user/login/2">我是居委</router-link>
							</li>
							<li class="mui-table-view-cell">
								<router-link href="#general" class="mui-navigate-right" to="/set/user/login/3">我是物业</router-link>
							</li>
                            <li class="mui-table-view-cell">
								<router-link href="#general" class="mui-navigate-right" to="/set/user/login/4">我是住户</router-link>
							</li>
						</ul>

                        <ul class="mui-table-view">
							<li class="mui-table-view-cell" style="text-align: center;" @click="renzheng">
								<a>认证信息页面</a>
							</li>
						</ul>
    </div>
</template>

<script>
export default {
	

	methods: {
		back(){
		
			this.$router.go(-1);
			//console.log(el)
			//this.$refs.fanhui.$root.$root.$el.style.background='red'

		}
		,renzheng(){
			this.$router.push({path:"/set/user/renzheng"})
		}
	},
}
</script>
<style lang="scss" scoped>
.containBoxs{
	padding-top: 10px;
	.mint-header-title{
		overflow:visible ;
		line-height: 44px;
	}

}

		.v-enter{
			opacity: 0;

		}
		.v-leave-to{
			opacity: 1;
		}
		.v-enter-active,
		.v-leave-active
		{
			transition:all 0s ease;
		}
			.mint-header{

				position: absolute;
				top:0;
				left:0;
				z-index:1;
				width: 100%;

			}
	
    .back{
        position: absolute;
    
        display:block;
        background-color: rgb(163, 19, 19);
        img{
                 width: 20px;
                 height: 20px;
                 z-index: 10000;
                 background: #000;
        }
       

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
				font-size: 15px
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