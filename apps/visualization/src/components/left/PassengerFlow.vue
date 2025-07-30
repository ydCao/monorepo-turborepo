<script setup lang="ts">
import { vue3ScrollSeamless } from 'vue3-scroll-seamless'
import { onMounted, ref, useId } from 'vue'
import CPanel from "@/components/common/CPanel"
import { rankingOfScenicSpots } from '@/assets/MapData/rlpm'

const list = ref<{ label: string; value: number }[]>([])
let maxValue = 0
// 计算进度
const getProgressValue = (value: number) => {
  return -((maxValue - value) / maxValue) * 100 + '%'
}
onMounted(() => {
  list.value = rankingOfScenicSpots.sort((a, b) => b.value - a.value)
  maxValue = rankingOfScenicSpots.reduce((acc, item) => acc + item.value, 0)
})
</script>

<template>
  <CPanel>
    <template #header>景点人流排名</template>
    <template #content>
      <vue3ScrollSeamless
          :dataList="list"
          class="max-h-[200px] outline overflow-hidden"
          :class-option="{
          limitMoveNum: 5
        }"
      >
        <div class="list-warpper">
          <article class="relative flex items-center w-full h-[40px] gap-[20px] p-[0_12px_0_24px] box-border text-[14px]" v-for="(item, index) in list" :key="useId">
            <section class="w-[30px] text-amber-400">{{ 'NO.' + (index + 1) }}</section>
            <section class="w-[100px] h-full leading-10 overflow-hidden text-cyan-800">{{ item.label }}</section>
            <!-- 进度条 -->
            <div class="relative overflow-hidden w-[156px] h-[5px] bg-[#646E84]">
              <span
                  class="absolute w-full h-full left-[-100%] bg-[linear-gradient(90deg,_#ffa832,_#f8c47d)]"
                  :style="{
                  left: getProgressValue(item.value)
                }"
              ></span>
            </div>
          </article>
        </div>
      </vue3ScrollSeamless>
    </template>
  </CPanel>
</template>

<style scoped>
.warp {
  height: 270px;
  width: 360px;
  margin: 0 auto;
  overflow: hidden;
}
</style>
