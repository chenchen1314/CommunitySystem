<template>
    <div class="boxs">
         <div class="top">
      <div class="wrap">
        <span> <img src="../assets/我是住户/sousuo.png" alt="" /></span>
        <input type="text" placeholder="请输入搜索关键字" />
      </div>
    </div>

    <div class="status">
      <span class="quanbu">全部</span>
      <span class="gonggao">公告</span>
      <span class="tongzhi">通知</span>
    </div>

    <div class="listone" v-for="(item,i) in list" :key="item.subtitle">
      <div class="text">
        <p class="title">{{item.title}}</p>
        <p class="p">{{item.subtitle}}</p>
      </div>

      <img src="../assets/我是住户/u435.jpg" alt="" />
      <div class="dibu">
        <span>{{item.type}}</span>
        <span>未发布</span>
        <span>{{item.renwu}}</span>
        <span>2020-09-15 12-04-15 12:25:44</span>
      </div>
    </div>
  </div>
    
</template>

<script>

export default {

    data() {
        return {
        current:"",
        list:[],
        kehu:"123"
        }
    },methods: {
        
    },
    created() {
   this.$http.get("/login").then((data) => {
        //console.log(data)
        if (data.status === 200) {
          this.list = data.body.info;
          // console.log(this.list)
        console.log(this.list);

        } else {
          Toast("请求数据出错");
        }
      });
},
}
</script>
<style lang="scss" scoped>
.boxs{
    width: 100%;
    height: auto;
    background-color: rgb(223, 223, 223);


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

  .status {
    width: 100%;
    height: 40px;
    background-color: #fff;
    padding: 0px 10px;
    span {
      line-height: 40px;
      display: inline-block;
      margin-left: 15px;
    }
    .quanbu {
      font-size: 20px;
      font-weight: bold;
      margin-left: 0px;
    }
  }

   .listone {
    width: 100%;
    height: auto;
    background-color: #fff;
    margin-top: 10px;
    padding: 20px 10px 10px 10px;

    .text {

        margin-left: 6px;
      .title {
        display: inline-block;
        font-size: 20px;
        font-weight: bold;
        color: #333;
      }
      .p{
          color: #666;
      }
    }
            img{
                width: 100%;
                
            }

        .dibu{
            height: 20px;
               //margin-top: 10px;
               //background-color: red;

           
            span{
                font-size: 14px;
             line-height: 20px;
             margin-left: 16px;
                color: #666;
            }

            :nth-child(1){
                
                margin-left: 0px;
            }        
        }

        .edit{
                display: flex;
                justify-content: space-between;
              margin-top: 10px;

        }
  }




}

</style>