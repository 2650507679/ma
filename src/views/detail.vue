<template>
  <div id="vue-box">
    <h1>首页</h1>
    <vab-chart autoresize theme="vab-echarts-theme" :options="option" />
    <!-- <areaTable></areaTable> -->
    <!-- <total></total> -->
  </div>
</template>
<script>
import areaTable from '@/components/area-table.vue'
import total from '@/components/total.vue'
var data = [{
        name: '频繁停电户数',
        value: 11,

    }, {
        name: '频繁停电台区',
        value: 40
    }];
    var backGroundData = [],
        nameData = [],
        valueData = [],
        maxValue = 0,
        len = data.length;
    for (var i = 0; i < len; i++) {
        if (data[i].value > maxValue) {
            maxValue = data[i].value;
        }
    }
    for (var i = 0; i < len; i++) {
        backGroundData.push(maxValue * 1.1);
        nameData.push(data[i].name);
        valueData.push(data[i].value);
    }
export default {
  data() {
    return {
        option: {
        backgroundColor:'#070931',
        grid: {
            left: '20%',
            right:'20%',
            top: '25%',
            bottom: '25%',
        },
        tooltip: {
            show: false,
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
            },
            formatter: '{b}：{c}',
            textStyle: {
                fontSize: "20"
            }
        },
        xAxis: {
            type: 'value',
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel:{
                show:false
            },
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            data: nameData
        },
        series: [{
            barWidth: 20,
            z: 10,
            itemStyle: {
                color:(params)=>{
                    if(params.name == '频繁停电户数'){
                        return  new this.$echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [{
                                offset: 0,
                                color: '#e9ea07' /*#0085FA*/
                            }, {
                                offset: 0.7,
                                color: '#e9ea07' /*#00BBFD*/
                            }])
                    }else{
                        return  new this.$echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [{
                                offset: 0,
                                color: '#e9ea07' /*#0085FA*/
                            }, {
                                offset: 0.7,
                                color: '#e9ea07' /*#00BBFD*/
                            }])
                    }
                },
                barBorderRadius: 15
            },
            label: {
                show: true,
                fontSize: 18,
                distance: 5,
                position: [0, "-100%"],
                formatter: "{b}",
                offset: [0, -5],
                color: '#e9ea07'
            },
            type: 'bar',
            data: valueData
        },
            {
                type: 'bar',
                barGap: '-100%',
                barWidth: 20,
                animation: false,
                z: -1,
                itemStyle: {
                    color: 'rgba(42,41,71,.5)',
                    barBorderRadius: 15
                },
                label: {
                    show: true,
                    position: ['90%', "-100%"],
                    fontSize: 18,
                    color:'#fff',
                    offset: [0, -5],
                    rich:{
                        a:{
                            color:'#e9ea07',
                            fontSize:18
                        },
                        b:{
                            color:'#e9ea07',
                            fontSize:18
                        }
                    },
                    formatter: (param)=> {

                        for (var i = 0; i < data.length; i++) {
                            if (param.name == data[i].name && param.name == '频繁停电户数') {
                                return '{b|'+data[i].value+'}';
                            }else if(param.name == data[i].name && param.name == '频繁停电台区'){
                                return '{a|'+data[i].value+'}';
                            }
                        }
                    }
                },
                data: backGroundData
            }
        ]
        }
    };
  },
  components: {
    areaTable,
    total
  },
  created(){
    console.log(this.$echarts);
  },
  methods: {
  }
};
</script>
<style scoped lang="scss">
.sqsbox{
  height:120px;
  width:300px;
  border:1px solid red;
  display: flex;
  justify-content: center;
.sqs{
  transform: rotate(90deg);
  border:1px solid red;
  height:300px;
  width:120px;
}
}
</style>
