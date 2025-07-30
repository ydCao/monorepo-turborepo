<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import Vue3Odometer from 'vue3-odometer'
import 'odometer/themes/odometer-theme-default.css'
import xl from '@/assets/images/xl.png'
import sr from '@/assets/images/sr.png'
import sk from '@/assets/images/sk.png'
import up from '@/assets/images/up.png'
import down from '@/assets/images/down.png'
const numberData = ref<any>([
  {
    title: '2024年旅游业收入',
    value: 3452,
    unit: '亿元',
    compare: 'down',
    proportion: 2.9,
    img: sr
  },
  {
    title: '2024年来访游客数',
    value: 48092,
    unit: '万人',
    compare: 'up',
    proportion: 1.6,
    img: xl
  },
  {
    title: '2024年甘肃人口出游支出',
    value: 2073.1,
    unit: '亿元',
    compare: 'down',
    proportion: 2.9,
    img: sk
  }
])

let intervalId: any = null

// 用于存储上一次的 value 值
const lastValues = ref<number[]>(numberData.value.map((item: any) => item.value))

function randomizeNumberData() {
  numberData.value = numberData.value.map((item: any, idx: number) => {
    // 生成一个基于当前值的随机浮动（±10%）
    const randomFactor = 1 + (Math.random() - 0.5) * 0.2 // ±10%
    const prevValue = lastValues.value[idx]
    const newValue = +(item.value * randomFactor).toFixed(1)
    // 计算变化百分比
    let proportion = 0
    let compare: 'up' | 'down' = 'up'
    if (prevValue !== 0) {
      proportion = +(((newValue - prevValue) / Math.abs(prevValue)) * 100).toFixed(1)
      compare = proportion >= 0 ? 'up' : 'down'
      proportion = Math.abs(proportion)
    }
    // 更新lastValues
    lastValues.value[idx] = newValue
    return {
      ...item,
      value: newValue,
      proportion,
      compare
    }
  })
}

onMounted(() => {
  // 初始化lastValues
  lastValues.value = numberData.value.map((item: any) => item.value)
  intervalId = window.setInterval(() => {
    randomizeNumberData()
  }, 10000)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<template>
  <footer class="absolute w-full bottom-6 flex justify-center gap-19 pointer-events-none">
    <div class="relative w-[268px] flex flex-col gap-4 items-center pointer-events-auto" v-for="item in numberData" :key="item.id">
      <!-- 标题 -->
      <div class="flex justify-center items-center text-[16px] h-[35px] w-full bg-[url('@/assets/images/titleBg.png')] bg-no-repeat bg-center bg-[size:100%_100%]">{{ item.title }}</div>
      <!-- 数据 -->
      <div class="flex justify-center h-[82px] gap-[28px] w-full">
        <img class="size-[82px]" :src="item.img" alt="图标" />
        <div class="flex flex-col justify-center box-border gap-4">
          <!-- 数字 -->
          <div class="flex items-end gap-[10px]">
            <Vue3Odometer class="text-[#fff] text-shadow-amber-600 text-3xl font-[Electronic]" :value="item.value" />
            <span class="text-[14px] text-[#fff]">{{ item.unit }}</span>
          </div>
          <!-- 比较信息 -->
          <div class="flex items-center gap-[10px]">
            <span class="text-[14px] text-[#c9d3ea] mr-[14px]">较上次</span>
            <img class="size-[20px 12px]" :src="item.compare === 'up' ? up : down" alt="上涨下跌图标" />
            <span
                :style="{ color: item.compare === 'up' ? 'rgba(247, 61, 75, 1)' : 'rgba(11, 212, 167, 1)' }"
            >
              {{ item.proportion }}%
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>

</template>
