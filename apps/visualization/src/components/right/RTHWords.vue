<template>
  <CPanel>
    <template #header>实时热词</template>
    <template #content>
      <HotWord :data="wordsData"/>
    </template>
  </CPanel>
</template>

<script setup lang="ts">
import CPanel from '@/components/common/CPanel'
import HotWord from '@/components/common/HotWord'
const wordsData: {
  name: string
  value: number
  position: number[]
}[] =
  [
    {
      name: '黄河',
      value: 99,
      position: [50, 50]
    },
    {
      name: '羊皮筏子',
      value: 88,
      position: [50, 50]
    },
    {
      name: '沙漠',
      value: 91,
      position: [50, 50]
    },
    {
      name: '嘉峪关',
      value: 191,
      position: [10, 30]
    },
    {
      name: '七彩丹霞',
      value: 181,
      position: [10, 30]
    },
    {
      name: '戈壁滩',
      value: 89,
      position: [10, 30]
    },
    {
      name: '草原',
      value: 100,
      position: [27, 55]
    },
    {
      name: '黄土高原',
      value: 70,
      position: [27, 55]
    },
    {
      name: '热情',
      value: 61,
      position: [68, 17]
    },
    {
      name: '麻辣烫',
      value: 191,
      position: [68, 17]
    },
    {
      name: '崆峒山',
      value: 121,
      position: [90, 40]
    },
    {
      name: '魔鬼城',
      value: 251,
      position: [90, 40]
    },
    {
      name: '河州',
      value: 161,
      position: [90, 40]
    },
    {
      name: '扎尕那',
      value: 281,
      position: [90, 40]
    },
    {
      name: '土豆',
      value: 111,
      position: [68, 17]
    },
    {
      name: '月牙泉',
      value: 160,
      position: [90, 40]
    },
    {
      name: '凉皮',
      value: 152,
      position: [68, 17]
    },
    {
      name: '豪爽',
      value: 127,
      position: [20, 90]
    },
    {
      name: '牛肉面',
      value: 122,
      position: [35, 20]
    },
    {
      name: '手抓羊肉',
      value: 230,
      position: [65, 89]
    },
    {
      name: '莫高窟',
      value: 190,
      position: [90, 40]
    }
  ]
</script>
