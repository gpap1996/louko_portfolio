<template>
  <div class="text-[white] h-auto w-full flex flex-col">
    <button
      @click="emit('closeDialog')"
      class="mdi mdi-close z-50 fixed top-4 right-4 text-[30px] bg-white text-black rounded-3xl w-10 h-10 flex items-center justify-center"
    ></button>

    <div class="bg-[black] p-6 flex flex-col align-center items-center h-[100vh]">
      <div class="text-center text-[64px] leading-[100%] font-bold my-10">Contact me</div>
      <!-- <div>Linked in</div> -->
      <div class="max-w-[800px]"></div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['closeDialog'])
</script>

<style lang="scss" scoped></style>
