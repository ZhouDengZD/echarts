<template>
<div class="container">
  <div class="header">
    <div class="title"><strong>薪资单</strong></div>
    <div class="user"><strong>周邓</strong>（E10086）<span>2017-07</span></div>
  </div>
  <div class="main" >
    <div class="add">
      <div class="type">应发</div>
      <div>月固定收入<span>￥ {{filterdata.add.shouru}}</span></div>
      <div>固定津贴<span>￥ {{filterdata.add.jintie}}</span></div>
      <div>全勤奖金<span>￥ {{filterdata.add.quanqin}}</span></div>
      <div>其他奖金<span>￥ {{filterdata.add.qita}}</span></div>
      <div>其他<span>￥ {{filterdata.add.others}}</span></div>
      <div class="all"><span>小计 {{filterdata.add.all}}</span></div>
    </div>
    <div class="del">
      <div class="type">应扣</div>
      <div>养老保险<span>￥ {{filterdata.del.yanglao}}</span></div>
      <div>失业保险<span>￥ {{filterdata.del.shiye}}</span></div>
      <div>医疗保险<span>￥ {{filterdata.del.yiliao}}</span></div>
      <div>住房公积金<span>￥ {{filterdata.del.zhufang}}</span></div>
      <div>租房<span>￥ {{filterdata.del.zufang}}</span></div>
      <div>餐费<span>￥ {{filterdata.del.canfei}}</span></div>
      <div class="all"><span>小计 {{filterdata.del.all}}</span></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Salary',
  data() {
    return {
      index: 0,
      lists: [
        {
          add: {
            shouru: 5000,
            jintie: 1800,
            quanqin: 500,
            qita: 1000,
            others: 1000,
            all: 0,
          },
          del: {
            yanglao: 100,
            shiye: 50,
            yiliao: 100,
            zhufang: 300,
            zufang: 800,
            canfei: 1000,
            all: 0,
          },
        },{
          add: {
            shouru: 8000,
            jintie: 2000,
            quanqin: 500,
            qita: 1000,
            others: 1000,
            all: 0,
          },
          del: {
            yanglao: 100,
            shiye: 50,
            yiliao: 100,
            zhufang: 300,
            zufang: 800,
            canfei: 1000,
            all: 0,
          },
        },
        {
          add: {
            shouru: 6500,
            jintie: 2000,
            quanqin: 500,
            qita: 1000,
            others: 1000,
            all: 0,
          },
          del: {
            yanglao: 100,
            shiye: 50,
            yiliao: 100,
            zhufang: 300,
            zufang: 800,
            canfei: 1000,
            all: 0,
          },
        },
      ],
    };
  },
  beforeMount() {
    this.index = this.$route.params.id;
  },
  computed: {
    filterdata: function() {
      const data = this.lists[this.index];

      for(let x in data.add){
        if(x !== 'all'){
          data.add.all += data.add[x];
        }
      }
      for(let x in data.del){
        if(x !== 'all'){
          data.del.all += data.del[x];
        }
      }
      return data;
    }
  }
}
</script>

<style lang="less" scoped>
.container{
   text-align:left;
   font-size:14px;
   min-width: 320px;
  .header{
    width: 100%;
    .title{
      height: 35px;
      line-height: 35px;
      margin-bottom: 10px;
      text-align: center;
      font-size:16px;
    }
    .user{
      overflow:hidden;
      margin-bottom: 10px;
      span{
        float: right;
      }
    }
  }
  .main{
    .add,.del{
      div{
        height: 30px;
        line-height: 30px;
        span{
          float: right;
        }
      }
      .type{
          height: 20px;
          width: 40px;
          color: #fff;
          padding-left: 10px;
          line-height: 20px;
          border-bottom-right-radius: 10px;
        }
    }
    .add{
      .type{
        background-color: #1ABDE6;
      }
      .all{
        color: #1ABDE6;
      }
    }
    .del{
      .type{
        background-color: #f93;
      }
      .all{
        color: #f93;
      }
    }

  }
}

</style>
