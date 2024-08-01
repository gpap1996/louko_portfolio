<template>
  <div class="text-[white] h-auto w-full flex flex-col">
    <button
      @click="emit('closeDialog')"
      class="mdi mdi-close z-50 fixed top-4 right-4 text-[30px] bg-white text-black rounded-3xl w-10 h-10 flex items-center justify-center"
    ></button>

    <div class="bg-[black] p-6 flex flex-col align-center items-center h-[100vh]">
      <div class="text-center text-[64px] leading-[100%] font-bold my-10">Contact me</div>
      <div
        class="cursor-pointer"
        v-for="(social, i) in socials"
        :key="i"
        @click="onSocialOpen(social.type)"
      >
        {{ social.icon }}
      </div>
      <a href="mailto:klouko.dev@gmail.com">klouko.dev@gmail.com</a>

      <!-- <div>Linked in</div> -->
      <div class="max-w-[800px]"></div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const emit = defineEmits(['closeDialog'])
const socials = reactive([
  {
    icon: 'linked-in',
    type: 'linked-in'
  },

  {
    icon: 'Instagram',
    type: 'instagram'
  },

  {
    icon: 'TikTok',
    type: 'tiktok'
  }
])
const onSocialOpen = (type) => {
  switch (type) {
    case 'linked-in':
      window.open('https://www.linkedin.com/in/kwstas-loukopoulos-477729275/')
      break

    case 'instagram':
      window.open('https://www.instagram.com/loukos.garage/')
      break

    case 'tik-tok':
      window.open('https://www.tiktok.com/@loukosgarage')
      break

    default:
      break
  }
}
</script>

<style lang="scss" scoped></style>
