<template>
  <div
    class="fixed w-screen h-screen bg-black text-white flex flex-col items-center justify-center"
  >
    <Vue3Lottie class="absolute" :animationData="LoaderJSON" :height="380" :width="380" />
  </div>
</template>

<script setup>
import LoaderJSON from '@/assets/LoaderJSON.json'
</script>

<style lang="scss" scoped></style>
