<script setup lang="ts">
import autofit from 'autofit.js'
import { getVisualization } from '@/api/visualization'
import LeftPanel from "@/components/left/LeftPanel"
import RightPanel from "@/components/right/RightPanel"
import MiddlePanel from "@/components/MiddlePanel"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const data = ref(null)
const loadData = async () => {
  data.value = await getVisualization()
  console.log(data.value);
}
onMounted(() => {
  loadData()
  autofit.init({
    el: 'body',
    dh: 1080,
    dw: 1920,
    resize: true
  })
})
</script>

<template>
  <div v-if="data" class="relative bg-[url('assets/images/bg.jpg')] bg-cover bg-center w-full h-full text-white flex overflow-hidden">
    <Header />
    <LeftPanel />
    <MiddlePanel :data="data"/>
    <RightPanel />
    <Footer />
  </div>
</template>
