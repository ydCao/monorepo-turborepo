<script setup lang="ts">
import IndustryRevenue from "@/components/right/IndustryRevenue"
import Top5Tourists from "@/components/right/Top5Tourists"
import RTHWords from "@/components/right/RTHWords";
</script>

<template>
  <div class="flex-1 mt-25 flex flex-col">
    <div class="h-1/3 box-border p-4 overflow-hidden">
      <IndustryRevenue />
    </div>
    <div class="h-1/3 box-border p-4 overflow-hidden">
      <Top5Tourists />
    </div>
    <div class="h-1/3 box-border p-4 overflow-hidden">
      <RTHWords />
    </div>
  </div>
</template>

<style scoped>

</style>
