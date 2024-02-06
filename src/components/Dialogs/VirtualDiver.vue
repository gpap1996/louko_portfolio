<template>
  <div class="text-[white] w-screen flex flex-col p-4">
    <button @click="emit('closeDialog')" class="mdi ml-auto mdi-close text-[30px]"></button>
    <div class="flex flex-col items-center justify-center flex-grow">Virtual Diver</div>
  </div>
</template>

<script setup>
const emit = defineEmits(['closeDialog'])
</script>

<style lang="scss" scoped></style>
