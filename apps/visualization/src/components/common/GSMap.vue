<script setup lang="ts">
  import {onMounted, onBeforeUnmount, ref, watch} from 'vue'
  import * as echarts from 'echarts';
  import { mapOptGenerate } from '@/module/gsMapData'
  const props = defineProps({
    data: {
     type: Object,
     required: true
    }
  })

  const tag = ref()
  let resizeObserver: ResizeObserver | null = null
  let echartsInstance: echarts.ECharts | null = null


  const chartRender = () => {
    echarts.registerMap('gs', props.data as any)
    const option = mapOptGenerate()
    echartsInstance?.setOption(option)
 }
  const echartsResize = () => {
    echartsInstance?.resize()
  }

  watch(()=> props.data, () => {
    chartRender()
  }, { immediate: false, deep: true })
  onMounted(() => {
    echartsInstance = echarts.init(tag.value)
    chartRender()
    resizeObserver = new ResizeObserver(() => {
      echartsResize()
    });
    resizeObserver.observe(tag.value);
  })
  onBeforeUnmount(() => {
    resizeObserver?.disconnect()
    resizeObserver = null
    if (!echartsInstance) return
    echartsInstance.dispose()
  })

</script>

<template>
<div ref="tag" class="w-full h-full"></div>
</template>

