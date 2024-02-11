<template>
  <div class="flex flex-col items-center justify-center h-screen gap-11">
    <div
      v-for="menuItem in menu"
      :key="menuItem.text"
      class="text-center text-[64px] leading-[100%] font-bold text-white pb-4 border-b-4 border-transparent transition-all duration-500 cursor-pointer"
      :class="$route.path == menuItem.path ? 'border-white' : 'hover:border-white'"
    >
      {{ menuItem.text }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const menu = ref([
  {
    text: 'Home',
    path: '/'
  },
  {
    text: 'Projects',
    path: '/projects'
  },
  {
    text: 'Contact',
    path: '/Contact'
  }
])
</script>

<style lang="scss" scoped></style>
