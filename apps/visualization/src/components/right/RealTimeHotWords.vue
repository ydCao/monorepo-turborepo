<template>
  <CPanel>
    <template #header>实时热词</template>
    <template #content>
      <div class="words">
        <CEchart :option="option" />
      </div>
    </template>
  </CPanel>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import CPanel from '@/components/common/CPanel'
import CEchart from '@/components/common/CEchart'
import defaultIcon from '@/assets/images/real-circle-defalut.png'
import hotIcon from '@/assets/images/real-circle-hot.png'
const option = ref<any>({})
const initEcharts = () => {
  const wordsData: {
    name: string
    value: number
    position: number[]
  }[] = [
    {
      name: '沙漠',
      value: 9,
      position: [50, 50]
    },
    {
      name: '戈壁滩',
      value: 4,
      position: [10, 30]
    },
    {
      name: '草原',
      value: 8,
      position: [27, 55]
    },
    {
      name: '热情',
      value: 6,
      position: [68, 17]
    },

    {
      name: '豪爽',
      value: 7,
      position: [20, 90]
    },
    {
      name: '牛肉面',
      value: 15,
      position: [35, 20]
    },
    {
      name: '手抓',
      value: 14,
      position: [65, 89]
    },
    {
      name: '莫高窟',
      value: 10,
      position: [90, 40]
    }
  ]
  const optionData: any = []
  // 渲染数据，并写入chart
  wordsData.map((item: any) => {
    optionData.push({
      name: item.name,
      number: item.value,
      value: item.position,
      symbolSize: item.value > 15 ? 70 : 60,
      symbol: item.value > 15 ? 'image://' + hotIcon : 'image://' + defaultIcon
    })
  })
  const options: any = {
    grid: {
      show: false,
      top: 20,
      left: 10,
      right: 10,
      bottom: 10
    },
    xAxis: [
      {
        type: 'value',
        show: false,
        min: 0,
        max: 100
      }
    ],
    yAxis: [
      {
        min: 0,
        show: false,
        max: 100
      }
    ],

    series: [
      {
        type: 'scatter',
        label: {
          normal: {
            show: true,
            formatter: (params: any) => {
              if (params.data.number > 15) {
                return `{hotName|${params.data.name}}\n{hotValue|${params.data.number}%}`
              } else {
                return `{name|${params.data.name}}\n{value|${params.data.number}%}`
              }
            },
            rich: {
              hotName: {
                color: 'rgba(218, 163, 88, 1)',
                fontSize: 16,
                padding: [0, 0, 8, 0],
                align: 'center'
              },
              hotValue: {
                color: 'rgba(218, 163, 88, 1)',
                fontSize: 14
              },
              name: {
                color: 'rgba(218, 198, 88, 1)',
                fontSize: 13,
                padding: [0, 0, 8, 0],
                align: 'center'
              },
              value: {
                color: 'rgba(218, 198, 88, 1)',
                fontSize: 12,
                align: 'center'
              }
            }
          }
        },
        animationDurationUpdate: 500,
        animationEasingUpdate: 500,
        animationDelay: function (idx: number) {
          return idx * 100
        },
        data: optionData
      }
    ]
  }
  return options
}
onMounted(() => {
  option.value = initEcharts()
})
</script>

<style scoped>
.words {
  position: relative;
  width: 100%;
  height: 200px;
  background: url('@/assets/images/热词背景.png') no-repeat center center;
  background-size: 100% 175px;
  box-sizing: border-box;
  display: flex;
  padding: 0 12px 14px 12px;
  flex-direction: column;
  gap: 16px;
}
</style>
