<template>
  <div id="myChart" class="myChart">
  </div>
</template>

<script>
export default {
  name: 'pie',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  mounted() {
    // 初始化echarts
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      const myChart = this.$echarts.init(document.getElementById('myChart'));
      // 绘制图表
      myChart.setOption({
        // title: { text: '环形图' },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)',
        },
      // 左边栏文字
      // legend: {
      //   orient: 'vertical',
      //   x: 'left',
      //   data:['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
      // },
      // 环形图
      series: [
        {
          name:'访问来源',
          type:'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center',
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              },
            },
          },
          labelLine: {
            normal: {
              show: false
            },
          },
          data:[
            {value:335, name:'直接访问'},
            {value:310, name:'邮件营销'},
            {value:234, name:'联盟广告'},
            {value:135, name:'视频广告'},
            {value:1548, name:'搜索引擎'}
          ],
        }
      ]
      });
    }
  },
}
</script>
<style>
.myChart{
  float: left;
  width: 150px;
  height: 150px;
}
</style>
