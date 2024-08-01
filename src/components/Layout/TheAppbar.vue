<template>
  <div class="fixed top-0 left-0 w-screen p-4 flex items-center justify-space-between">
    <div
      :class="menu ? 'text-white' : 'text-black'"
      class="text-[22px] leading-6 transition-all duration-300 cursor-pointer"
      style="z-index: 1"
      @click="$router.push('/')"
    >
      LOUKOs <br />
      SHOWCASE
    </div>
    <!-- <div
      @click="toggle"
      :class="checkFullScreen ? 'mdi-fullscreen-exit' : 'mdi-fullscreen'"
      class="mdi ml-auto text-[30px] cursor-pointer text-black"
    ></div> -->
    <div v-if="menu" class="absolute top-0 left-0 min-h-screen w-full h-auto bg-black">
      <NavigationMenu
        v-motion
        :initial="{
          opacity: 0,
          transition: {
            duration: 300
          }
        }"
        :enter="{
          opacity: 1,
          transition: {
            duration: 300
          }
        }"
      ></NavigationMenu>
    </div>
  </div>
</template>

<script setup>
import NavigationMenu from '../Dialogs/NavigationMenu.vue'
import { useBaseStore } from '@/stores/base'
import { storeToRefs } from 'pinia'
const base = useBaseStore()

const { menu } = storeToRefs(base)
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
