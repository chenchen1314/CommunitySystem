<template>
    <div class="bgss">
    <div class="nei">
    <div class="image">
         <img src="../assets/外星人.png" alt="">
         </div>
         <div class="wenzi"><span>暂未开发，请联系编程人员</span>
    
    </div>
         </div>   
        
    </div>
</template>

<script>
export default {
    components:{
    
    }
}
</script>
<style lang="scss" scoped>
.bgss{
    width:100%;
    height:100%;
    background-color:rgba(216, 216, 216, 0.2);
    position: absolute;


    //position: relative;
.image{
        width: 100%;
        height: auto;
     
        img{
            width: 50%;
              //position: relative;
            display: block;
            
              //left: 50%;
               //top: 50px;
               margin:0px auto;
            
        }
      margin: 10px auto;
      
       
      
        

    }

    .wenzi{
        color: #777;
       // position: absolute;
       //position: absolute;
        width: 205px;
        top: 320px;
        //left: 14%;
        margin: 0 auto;
        span{

        }
    }
}
    

</style>