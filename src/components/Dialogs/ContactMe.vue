<template>
  <div class="text-[white] h-auto w-full flex flex-col">
    <button
      @click="emit('closeDialog')"
      class="mdi mdi-close z-50 fixed top-4 right-4 text-[30px] bg-white text-black rounded-3xl w-10 h-10 flex items-center justify-center"
    ></button>

    <div class="bg-[black] p-6 flex flex-col align-center items-center h-[100vh]">
      <div class="text-center text-[64px] leading-[100%] font-bold my-10">Contact me</div>
      <div class="max-w-[800px] text-[26px]">
        Feel free to reach out to me for any questions, collaborations, or just to say hello. I'm
        always open to discussing new opportunities in game development and interactive media. You
        can contact me via email at
        <a href="mailto:klouko.dev@gmail.com" class="font-bold underline">klouko.dev@gmail.com</a>
        or connect with me on:
        <div class="flex align-center gap-6 mt-4">
          <div
            class="cursor-pointer"
            v-for="(social, i) in socials"
            :key="i"
            @click="onSocialOpen(social.type)"
            :class="social.type == 'tiktok' ? '' : 'mt-1'"
          >
            <img class="w-[30px]" :src="social.icon" :alt="social.icon" />
          </div>
        </div>
        <div class="mt-4">I look forward to hearing from you!</div>

        <!-- <div>Linked in</div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const emit = defineEmits(['closeDialog'])
const socials = reactive([
  {
    icon: '/images/linkedin.png',
    type: 'linked-in'
  },

  {
    icon: '/images/instagram.png',

    type: 'instagram'
  },

  {
    icon: '/images/tik-tok.png',
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

    case 'tiktok':
      window.open('https://www.tiktok.com/@loukosgarage')
      break

    default:
      break
  }
}
</script>

<style lang="scss" scoped></style>
