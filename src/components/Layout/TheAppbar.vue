<template>
  <div class="fixed top-0 left-0 w-screen p-4 flex items-center justify-space-between">
    <div class="flex flex-col gap-[4.5px] mr-4" @click="menu = !menu">
      <div :class="menu ? 'rotate' : ''" class="menu-line"></div>

      <div :class="menu ? 'hidden' : 'block'" class="menu-line"></div>

      <div :class="menu ? 'neg-rotate' : ''" class="menu-line"></div>
    </div>

    <div class="text-[22px] leading-6">
      LOUKOs <br />
      SHOWCASE
    </div>
    <div
      @click="toggle"
      :class="isFullscreen ? 'mdi-fullscreen-exit' : 'mdi-fullscreen'"
      class="mdi ml-auto text-[30px] cursor-pointer"
    ></div>
  </div>
</template>

<script setup>
import { useFullscreen } from '@vueuse/core'
import { ref } from 'vue'

const { isFullscreen, toggle } = useFullscreen()
const menu = ref(false)
</script>

<style lang="scss" scoped>
.menu-line {
  border: 1.5px solid black;
  width: 22px;
  overflow: visible;
  transition: all ease 300ms;
}

.rotate {
  rotate: 45deg;
}

.neg-rotate {
  rotate: -45deg;
}
</style>
