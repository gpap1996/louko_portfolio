<template>
  <div
    class="fixed w-screen h-screen bg-black text-white flex flex-col items-center justify-center"
  >
    <Vue3Lottie class="absolute" :animationData="LoaderJSON" :height="360" :width="360" />
    <button
      v-motion
      :initial="{
        scale: 1.1,
        opacity: 0,
        transition: {
          duration: 500
        }
      }"
      :enter="{
        scale: 1,
        opacity: 1,
        transition: {
          duration: 500
        }
      }"
      style="background-size: 200%"
      class="flex items-center bg-gradient-to-l from-white from-50% to-orange to-50% bg-right hover:bg-left relative top-[200px] text-black px-7 py-2 rounded-[32px] hover:text-white transition-all duration-500"
      v-if="!webglLoader"
      @click="$emit('closeDialog')"
    >
      <div class="text-[20px]">CONTINUE</div>

      <div class="mdi mdi-arrow-right ml-2 text-[25px] mt-[3px]"></div>
    </button>
  </div>
</template>

<script setup>
import LoaderJSON from '@/assets/LoaderJSON.json'
import { useBaseStore } from '@/stores/base'
import { storeToRefs } from 'pinia'

const { webglLoader } = storeToRefs(useBaseStore())
</script>

<style lang="scss" scoped></style>
