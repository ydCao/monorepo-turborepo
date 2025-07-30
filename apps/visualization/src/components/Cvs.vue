<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Graph } from '@/utils/cvs'

const canvasRef = ref<HTMLCanvasElement>()
const createCav = () => {
  const cvs = canvasRef.value
  if (!cvs) {
    return
  }
  const ctx = cvs.getContext('2d') || {} as CanvasRenderingContext2D
  cvs.width = window.innerWidth*devicePixelRatio
  cvs.height = window.innerHeight*devicePixelRatio
  const graph = new Graph(cvs, ctx)
  graph.draw()
}


onMounted(()=>{
  createCav()
})
</script>

<template>
  <canvas class="canvas" ref="canvasRef" ></canvas>
</template>

<style scoped>
.canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
