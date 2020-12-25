<template>
    <div class="containss">
        <div class="titles">
                <mt-header title="">
  			
    			<mt-button icon="back" @click="back"  slot="left"  ref="fanhui">编辑</mt-button>
  	
  			<!--<mt-button icon="more" slot="right"></mt-button>>!-->
			</mt-header>
         </div>
         <div class="top">
      <div class="wrap">
        <span> <img src="../../assets/我是住户/sousuo.png" alt="" /></span>
        <input type="text" placeholder="请输入搜索关键字" />
      </div>
    </div>

    <div class="biaotou">
            <span>共2人</span>
            <span @click="quanxuan">全选</span>
    </div>
    <div class="liebiao">
    <ul ref="check">
        <li>
        <div><span class='yuan'><img src="../../assets/huge.jpg" alt=""></span></div>
        <div class="banshi">
        <div class="one"> <span>胡歌</span></div>
      
            
            <p class="two">阳光小区</p>
            <p class="three">11号楼2单403</p>
        </div>
        <div class="xuanze">
        <input type="checkbox" class="yuanxing" :checked="choose" ref="xunhuan" name="biaodan" @click="pan1">
        </div>
        </li>
           <li>
        <div><span class='yuan'><img src="../../assets/dilireba.jpg" alt=""></span></div>
        <div class="banshi">
            <p class="one">胡歌</p>
            <p class="two">阳光小区</p>
            <p class="three">11号楼2单403</p>
        </div>
        <div class="xuanze">
        <input type="checkbox" class="yuanxing" :checked="choose" ref="xunhuan2" @click="pan2"  name="biaodan">
        </div>
        </li>
       
    </ul>
    </div>

        
    </div>
    
</template>
<script>
import Bus from '../../mock/bus.js'
export default {
    data() {
        return {
            choose:"",
            allint:0,
            val:[],
        
    
        }
    },
    methods: {
        back(){
           
            this.$router.go(-1);
        },
        quanxuan(){
           
        
            if(this.choose===true){
                this.choose=false;
                
               
            }
           // console.log("ok")
           else if(this.choose===''||this.choose===false){
                this.choose=true 
                
           }
           
           //console.log(this.val);
       //a= $('input[name="biaodan"]');
            this.xuanzhong();
            console.log(this.allint)
        
        },
        pan1(){
                if(this.$refs.xunhuan.checked){

                    if(this.allint==2&&this.$refs.xunhuan2.checked){
                        this.allint=2
                    }else if(this.allint==2){
                            this.allint=1
                    }
                    this.allint++;
                }
                else if(this.allint==2&&this.$refs.xunhuan2.checked){
                    this.allint=1
                }
                else{
                    this.allint=0
                }

                console.log(this.allint)

        },
        pan2(){
            
                
                if(this.$refs.xunhuan2.checked){
                    this.allint++;
         
                }
                else if(this.$refs.xunhuan.checked==false&&this.$refs.xunhuan2.checked){
                    this.allint=1;
                }
                else if(this.$refs.xunhuan2.checked==false&&this.$refs.xunhuan.checked){
                    this.allint=1;
                }
                else{
                    this.allint=0;
                }
                console.log(this.allint)
           

        },
        xuanzhong(){

        this.val=document.getElementsByClassName("yuanxing")
        
        if(this.allint==2){
            this.allint=0;
        }
        var max=this.val.length;         
        for(let i in this.val){

              if(!this.val[i].checked){

                  
                  this.allint++;
                  if(this.allint>max){
                        this.allint=0;
                  }
              }

          }
        }
          
    },beforeDestroy() {
            localStorage.setItem("int",JSON.stringify(this.allint) )
            Bus.$emit('val', this.allint)
    },


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
}

*{
    margin: 0;
    padding: 0;
    list-style: none;
}

.titles{

            position: absolute;
            width: 100%;
            height: 40px;
            left: 0;
            top: -40px;
            z-index: 10000000;
            display: block;

        }
        .top {
  width: 100%;
  background-color: rgb(29, 134, 219);
  padding: 10px 20px;
  .wrap {
    overflow: hidden;
    position: relative;
    border-radius: 60px;
    background-color: #fff;
    height: 30px;
    span {
      line-height: 30px;
      display: inline-block;
      img {
        width: 14px;
      }
    }
    input {
      position: absolute;
      font-size: 14px;
      top: -5px;
      left: 20px;
      border: none;
    }
  }
}
.biaotou{
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    padding: 0px 10px;
        span{
            font-size: 16px;
            letter-spacing: 2px;
            line-height: 40px;
        }

}
.liebiao{
    width: 100%;
        ul{

            li{
                 display: flex;   
                 justify-content: space-between;
                 background-color: #fff;
                 border-top:1px solid #333;
                 padding: 5px 10px;
                :nth-child(1){
                    width: 30%;
                        display: block;
                
                    }
                
                 :nth-child(2){
                    width: 60%;
                    
                } 
                 :nth-child(3){
                    width: 10%;
                } 

                .yuan{
                    width: 70px;
                    height:70px;
                    background-color: #000;
                    // margin-top: ;
                    display: block;
                    border-radius: 50%;
                  
                    overflow: hidden;
                    img{
                        width: 70px;

                    }



                }

                .banshi{
                  
                    width: 100%;
                    margin-left:10px;
                    .one{
                        width: 100%;

                    }
                    p{
                        width: 200px;
                        
                     font-size: 16px;
                    color:#333;
                    margin-top:4px;
                    display: block;
                    

                    .three{
                        width: 100%;
                        
                        letter-spacing: 1px;
                    }

                    }

                    
                    
                }

                .xuanze{
                    width: 30px;
                    height: 20px;
                   
                    margin-top: 30px;
                    margin-right:12px;

                .yuanxing{
                            width: 100%;
                            height: 20px;
                            background-color: #fff;
                            border: 1px solid #333;
                            //-webkit-appearance:none;
                }

                }

            }
        }

}
    
</style>
