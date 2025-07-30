<script setup lang="ts">

import PassengerFlow from "@/components/left/PassengerFlow"
import AgeDistribution from "@/components/left/AgeDistribution"
import ReceptionTourists from "@/components/left/ReceptionTourists"

</script>

<template>
  <div class="flex-1 mt-25 flex flex-col">
    <div class="h-1/3 box-border p-4 overflow-hidden">
      <PassengerFlow />
    </div>
    <div class="h-1/3 box-border p-4 overflow-hidden">
      <AgeDistribution/>
    </div>
    <div class="h-1/3 box-border p-4 overflow-hidden">
      <ReceptionTourists />
    </div>
  </div>
</template>

<style scoped>

</style>
