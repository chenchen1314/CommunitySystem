<template>
    <div class="contains">
        <div class="titles">
                <mt-header title="">
  			
    			<mt-button icon="back" @click="back"  slot="left"  ref="fanhui">审查</mt-button>
  	
  			<!--<mt-button icon="more" slot="right"></mt-button>>!-->
			</mt-header>
         </div>

         <div class="biaodan">
       
                <form class="mui-input-group">
					<div class="mui-input-row">
						<label><span>*</span>审查结果</label>
						<input type="text" placeholder="请选择类型">
					</div>
                    </form>
            
            </div>
            <div class="biaodan2">
            <mt-field label="审查说明" placeholder="请输入审查说明" type="textarea" rows="7" class="nei"></mt-field>
            </div>
            <div class="btnmore">
            <mt-button type="primary" size="large">提交</mt-button>
                </div>
            


    </div>
</template>

<script>
export default {
    methods: {
        back(){

            this.$router.go(-1);
        }
    },
}
</script>

<style lang="scss" scoped>
    
    .contains{
            width: 100%;
    height: auto !important;
    min-height:650px;
  
    clear: both;
   // position: absolute;
    //position: absolute;
    //padding-bottom: 200px;
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
            top:80px;
                  span{
                color:red;
            }
            .nei{
                padding-left: 10px;
            }
        }
    .btnmore{
        position: absolute;
        margin-top: 350px;
        width: 100%;
    }
    }

</style>
