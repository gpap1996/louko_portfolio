<template>
  <div
    class="fixed w-screen h-screen bg-black text-white flex flex-col items-center justify-center"
  >
    <div
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
      class="text-[50px] font-bold bg-white text-black w-[175px] h-[175px] rounded-full flex items-center justify-center text-center"
    >
      {{ loadProgress }}%
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  loadProgress: { type: Number, default: 0 }
})

const loadProgress = computed(() => Math.round(props.loadProgress * 100))
</script>

<style lang="scss" scoped></style>
