
<template>
<div class="container">
  <div class=header>
    <div class="title"><strong>薪资报表</strong></div>
    <ul class="tab">
      <li>汉得信息▼</li>
      <li>年初至今▼</li>
      <li>占比最高▼</li>
    </ul>
    <div class="pie">
      <Pie/>
      <div class="pie-text">
        <p>预计薪资：￥8000</p>
        <p>实发薪资：￥6000</p>
      </div>
    </div>
  </div>
  <div class="main">
    <div class="main-title">薪资明细</div>
    <template v-for="(data, index) in datas">
        <router-link :id="index" :to="{name:'list', params:{id:index}}">
        <div>{{data.time}}<span>实发 ￥{{data.money}}</span></div>
      </router-link>
    </template>
  </div>
</div>
</template>

<script>
import Pie from './Pie';
import Salarylist from './Salarylist'

export default {
  name: 'Salary',
  components: {
    Pie,
    Salarylist,
  },
  data() {
    return {
      datas: [
        {
          time: '2017-05',
          money: 6800
        },
        {
          time: '2017-06',
          money: 7500
        },
        {
          time: '2017-07',
          money: 7800
        },
      ],
    };
  }
};

const routes = [

]
</script>

<style lang="less" scoped>
div,ul,li,p{
  padding: 0;
  margin: 0;
}
.container{
  font-size: 14px;
  text-align: left;
  // min-width: 320px;
  .header{
    width: 100%;
    color: #fff;
    background-color: #1ABDE6;
    .title{
      padding-top: 5px;
      height: 30px;
      line-height: 30px;
      font-size: 16px;
      text-align: center;
    }
    .tab{
      overflow: hidden;
      li{
        float: left;
        width: 33%;
        height: 30px;
        text-align: center;
        line-height: 30px;
        list-style-type: none;
        }
      p{
        height: 25px;
        line-height: 25px;
      }
    }
    .pie{
      heigth: 150px;
      overflow: hidden;

      .pie-text{
        float:left;
        margin: 50px 0 0 40px;

      }
    }
  }
  .main{
    .main-title{
      margin-top: 5px;
      height: 30px;
      line-height: 30px;
      text-indent: 1em;
      color: gray;
      border-left: 4px solid #1ABDE6;
    }
    a{
      height:35px;
      line-height: 35px;
      text-decoration: none;
      color: #3C3C3C;
      div{
        padding:0 5px;
        overflow: hidden;
        span{
          float: right;
        }
      }
    }
  }
}
</style>

