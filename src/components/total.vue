<template>
  <div class="about">
    <div class="main">
      <div class="item" v-for="item in list" :key="item.id">
        <div class="item_left">
          <img :src="item.img" alt="" />
        </div>
        <div class="item_right">
          <p>{{ item.name }}</p>
          <p>售价{{ item.price }}元</p>
          <div class="step">
            <!-- 减 -->
            <button @click="del(item.id)" :disabled="item.num===0" class="bt2">
              -
            </button>
            <input v-model.number="item.num" type="text">
            <!-- 加 -->
            <button @click="add(item.id)" :disabled="item.num===5" class="bt1">
              +
            </button>
            <div class="piece">
              <p>已选{{ allNum }}个商品,总计{{ allMoney }}元</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "total",
  data: function () {
    return {
      list: [
        {
          id: 1,
          name: "限定商品名称1",
          price: 999,
          img: "https://proudyan-oss.oss-cn-shanghai.aliyuncs.com/2021/12/svw_mms_program_ui/images/rank/icon.head.v1.90x90.png",
          num: 0,
        },
        {
          id: 2,
          name: "限定商品名称2",
          price: 88,
          img: "",
          num: 0,
        },
        {
          id: 3,
          name: "限定商品名称3",
          price: 941,
          img: "",
          num: 0,
        },
        {
          id: 4,
          name: "限定商品名称4",
          price: 399,
          img: "",
          num: 0,
        },
        {
          id: 5,
          name: "限定商品名称5",
          price: 959,
          img: "",
          num: 0,
        },
        {
          id: 6,
          name: "限定商品名称6",
          price: 119,
          img: "",
          num: 0,
        },
      ],
    };
  },
  created() {},
  computed:{
  //商品总数量
  allNum(){
    var num = 0
    this.list.forEach(item=>{
      if(item.num===""){
      num+=0
      }else{
      num+=item.num
      }
    })
    return num 
  },
  //商品总钱数
  allMoney(){
    var money = 0
    this.list.forEach(item=>{
      if(item.num===""){
      money+=0*item.price
      }else{
      money+=item.num*item.price
      }
    })
    return money 
  }
  },
  methods: {
    add(id) {
        var addIndex = this.list.findIndex(item=>item.id===id) //找到商品的索引
        this.list[addIndex].num++  
    },
    del(id) {
        var delIndex = this.list.findIndex(item=>item.id===id) //找到商品的索引
        this.list[delIndex].num--    
    }   
  },
};
</script>
<style lang="scss" scoped>
.about {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: none;
  }
  .main {
    width: 95%;
    border: 1px solid red;
    margin: 60px auto 0;
    .item {
      width: 100%;
      height: 120px;
      border: 1px solid orange;
      margin-top: 20px;
      margin-bottom: 80px;
      display: flex;
      .item_left {
        width: 30%;
        height: 100px;
        border: 1px solid;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 90px;
          height: 90px;
        }
      }
      .item_right {
        width: 70%;
        margin-left: 20px;
        position: relative;
        border: 1px solid red;
        .step {
          position: absolute;
          top: 70px;
          right: 0;
          width: 80px;
          height: 30px;
          // border: 1px solid orange;
          background: #efefef;
          button {
            width: 25px;
            height: 25px;
            border: none;
          }
          .bt1 {
            position: absolute;
            top: 2px;
            left: 50px;
          }
          .bt2 {
            position: absolute;
            top: 2px;
            left: 0;
            border: 1px solid red;
          }
          input {
            position: absolute;
            top: 2px;
            left: 26px;
            width: 25px;
            height: 25px;
            display: inline-block;
            border: none;
            text-align: center;
          }
        }
      }
    }
    .piece {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 80px;
      background: #efefef;
    }
  }
}
</style>