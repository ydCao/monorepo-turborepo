<script setup lang="ts">

</script>

<template>
  <div class="relative w-full h-full flex flex-col gap-3 pb-6">
    <div class="relative text-3xl font-bold text-[#fff] w-full h-12 flex items-center justify-center bg-[url('@/assets/images/titleBg.png')] bg-no-repeat bg-center  bg-[size:100%_100%]">
      <slot name="header">默认名称</slot>
    </div>
    <div class="relative flex-1 px-6 py-0 box-border bg-[url('@/assets/images/panelBottomBg.png')] bg-no-repeat bg-bottom bg-[size:100%_100%] ">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style scoped>

</style>
