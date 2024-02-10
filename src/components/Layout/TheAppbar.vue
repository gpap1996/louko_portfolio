<template>
  <div class="fixed top-0 left-0 w-screen p-4 flex items-center justify-space-between">
    <MenuButton :menu="menu" @toggleMenu="toggleMenu" />

    <div class="text-[22px] leading-6 text-black">
      LOUKOs <br />
      SHOWCASE
    </div>
    <div
      @click="toggle"
      :class="isFullscreen ? 'mdi-fullscreen-exit' : 'mdi-fullscreen'"
      class="mdi ml-auto text-[30px] cursor-pointer text-black"
    ></div>
  </div>
</template>

<script setup>
import MenuButton from '../Util/MenuButton.vue'

import { useFullscreen } from '@vueuse/core'
import { ref } from 'vue'

const { isFullscreen, toggle } = useFullscreen()
const menu = ref(false)
const toggleMenu = () => {
  menu.value = !menu.value
}
</script>

<style lang="scss" scoped>
body {
  display: grid;
  place-items: center;
  height: 100vh;
  background: #4c23e8;
  margin: 0;
  padding: 0;
}

.menu {
  display: flex;
  flex-direction: column;
  width: 70px;
  cursor: pointer;
}
</style>
