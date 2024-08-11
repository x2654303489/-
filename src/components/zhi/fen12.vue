<template>
    <div class="zon">
    <div class="aleft">
        <el-card class="qa" style="height:300px ;">
        <div class="aleft1">
            <div >
                <h3>收藏</h3>
                246
            </div>
            <div >
                <h3>照片</h3>
                113
            </div>
            <div >
                <h3>云数据</h3>
                123
            </div>
            <div >
                <h3>邮件</h3>
                1134
            </div>
        </div>
    </el-card>
        <div class="aleft2">
            <el-card class="qa" style="height:380px ;">
            <el-timeline style="max-width: 600px padding-left:50px;;">
  <el-timeline-item
    v-for="(activity, index) in activities"
    :key="index"
    :icon="activity.icon"
    :type="activity.type"
    :color="activity.color"
    :size="activity.size"
    :hollow="activity.hollow"
    :timestamp="activity.timestamp"
  >
    {{ activity.content }}
  </el-timeline-item>
   
  </el-timeline>
</el-card>
        </div>
    </div>
    <div class="aright">
        <div class="aright1">
            <el-card class="qa" style="height:360px">
                        <div ref="echartsRef1" id="echarts1" style="height:320px"></div>
                    </el-card>
        </div>
        <div class="aright2">
            <el-card class="qa" style="height:320px">
            <h3>消息栏</h3>
            <ul class="uu">
                <li class="ll"><el-avatar
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                />
                <div class="bb"><b>浮华</b><span style="display: block;">上午好啊</span></div></li>
                <li class="ll"><el-avatar
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                />
                <div class="bb"><b>浮华</b><span style="display: block;">中午好啊</span></div></li>
                <li class="ll"><el-avatar
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                />
                <div class="bb"><b>浮华</b><span style="display: block;">下午好啊</span></div></li>
            
            </ul>
        </el-card>
        </div>
        <div class="aright3">
            <div class="graph">
                    <el-card class="qa" style="height:320px">
                        <div ref="echartsRef" id="echarts3" style="height:320px"></div>
                    </el-card>
                </div>
        </div>
    </div>
</div>
  </template>
    
  <script lang="ts" setup>
import { MoreFilled } from '@element-plus/icons-vue'
import * as echarts from 'echarts';
import { ref,onMounted  } from 'vue'
const activities = [
  {
    content: '新版本迭代会',
    timestamp: '2024-04-03 20:46',
    size: 'large',
    type: 'primary',
    icon: MoreFilled,
  },
  {
    content: '完成网站设计初版',
    timestamp: '2024-04-03 20:46',
    color: '#0bbd87',
  },
  {
    content: '联调接口',
    timestamp: '2024-04-03 20:46',
    size: 'large',
  },
  {
    content: '登录功能设计',
    timestamp: '2024-04-03 20:46',
    type: 'primary',
    hollow: true,
  },
  {
    content: '权限验证',
    timestamp: '2024-04-03 20:46',
  },
]
const echartsRef = ref(null);
onMounted(() => {  
      // 确保 DOM 元素已经渲染  
      const myChart = echarts.init(echartsRef.value);  
      // 设置图表选项  
      const option = {  
        // ... 你的图表选项  
        title: {
                text: '访问人员'
            },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                        }
                    },
                    legend: {
                        data: ['人员', '地址','技术']
                    },
                    xAxis: [
                        {
                        type: 'category',
                        boundaryGap: false,
                        data: ['2019', '2020', '2021', '2022', '2022', '2023', '2024']
                        }
                    ],
                    yAxis: [
                        {
                        type: 'value'
                        }
                    ],
                    series: [
                        {
                        name: '人员',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [3, 5, 9, 11, 14, 12, 15]
                        },
                        {
                        name: '地址',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [5, 8, 7, 14, 18, 17, 23]
                        },
                        {
                        name: '技术',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [8, 12, 24, 35, 48, 56, 67]
                        },
                    ]
            
      };  
      // 使用刚指定的配置项和数据显示图表。  
      myChart.setOption(option);  
    });  

    const echartsRef1 = ref(null);
    onMounted(() => {  
      // 确保 DOM 元素已经渲染  
      const myChart1 = echarts.init(echartsRef1.value);  
      // 设置图表选项  
      const option1 = {  
        
  color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
  title: {
    text: '项目完成情况'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5']
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Line 1',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(128, 255, 165)'
          },
          {
            offset: 1,
            color: 'rgb(1, 191, 236)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [140, 232, 101, 264, 90, 340, 250]
    },
    {
      name: 'Line 2',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(0, 221, 255)'
          },
          {
            offset: 1,
            color: 'rgb(77, 119, 255)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [120, 282, 111, 234, 220, 340, 310]
    },
    {
      name: 'Line 3',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(55, 162, 255)'
          },
          {
            offset: 1,
            color: 'rgb(116, 21, 219)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [320, 132, 201, 334, 190, 130, 220]
    },
    {
      name: 'Line 4',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(255, 0, 135)'
          },
          {
            offset: 1,
            color: 'rgb(135, 0, 157)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [220, 402, 231, 134, 190, 230, 120]
    },
    {
      name: 'Line 5',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      label: {
        show: true,
        position: 'top'
      },
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(255, 191, 0)'
          },
          {
            offset: 1,
            color: 'rgb(224, 62, 76)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [220, 302, 181, 234, 210, 290, 150]
    }
  ]



      };  
      // 使用刚指定的配置项和数据显示图表。  
      myChart1.setOption(option1);  
    });  
           
  </script>
  
  <style scoped>
    .aleft{
      width: 525px;
      height: 700px;
      
      float: left;
    }
    .aright{
        width: 715px;
        height: 700px;
        background-color: rgb(255, 255, 255);
        float: right;
        
    }
    .aleft1{
        height: 900px;
        
    }
    .aleft2{
        width: 525px;
        height: 300px;
        background-color: rgb(255, 255, 255);
        padding-top: 10px;
    }
    .aleft1>div{
        height: 120px;
        width: 220px;
        background-color: rgb(255, 255, 255);
        margin: 10px;
        float: left;
        text-align: center;
    }
    .el-icon{
        width: 20px;
        height:20px;
        float: left;
    }
    .zon{
        width: 1250px;
        height:100%;
        background-color: rgb(223, 223, 223);
    }
    .aright>div{
        float: left;
    }
    .aright1{
        width: 100%;
        height: 370px;
        background-color: rgb(255, 255, 255);
    }
    .aright2{
        width:280px;
        height: 300px;
        margin-right: 10px;
       
    }
    .aright3{
        width:425px;
        height: 300px;
        background-color: rgb(149, 130, 130);
       float: right;
    }
    .uu{
        padding-left: 10px;
    }
    .ll{
       width: 150px;
       height: 60px;
        list-style-type: none;
        margin: 10px;
        padding-left: 10px;
        margin-top: 30px;
    }
    .bb{
        float: right;
        width:100px;
        height: 60px;
    }
    .bb>h3{
        width: 40px;
        height: 30px;
    }
  </style>