<script setup lang="ts">

import GSMap from "@/components/common/GSMap"
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})
console.log(props.data)
</script>

<template>
  <div class="w-1/2 flex flex-col ">
    <GSMap :data="data"/>
  </div>
</template>

<style scoped>

</style>
