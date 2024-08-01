<template>
  <div class="text-[white] h-auto w-full flex flex-col">
    <button
      @click="emit('closeDialog')"
      class="mdi mdi-close z-50 fixed top-4 right-4 text-[30px] bg-white text-black rounded-3xl w-10 h-10 flex items-center justify-center"
    ></button>
    <div class="h-screen relative shadow-2xl">
      <div class="h-screen background-image"></div>
      <div
        class="z-50 text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-100%] text-[64px] leading-[100%] font-bold"
      >
        Louko's Garage
      </div>
    </div>
    <div class="bg-[black] p-6 flex flex-col align-center items-center">
      <div class="max-w-[800px]">
        <div class="text-[18px]">
          <strong>"Louko's Garage" </strong> is the culmination of my journey as a game developer,
          born out of countless hours of learning, experimenting, and overcoming challenges. After
          navigating through various project ideas and learning curves, I found my stride with this
          exciting venture into the world of racing games. <br /><br />
          Unlike my previous attempts to create ultra-realistic racing simulations, "Louko's Garage"
          takes a different approach, focusing on a low-poly aesthetic with stunning visuals and a
          delightful arcade-style driving experience. The game features a diverse range of surfaces
          to conquer, from dirt and sand to gravel, tarmac, snow, ice, and grass, offering players a
          thrilling ride across various terrains.
        </div>

        <div style="padding: 56.25% 0 0 0; position: relative" class="my-5">
          <iframe
            src="https://player.vimeo.com/video/993441153?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
            title="Louko's Garage Trailer"
          ></iframe>
        </div>
        <ul class="list-disc list-inside max-w-[800px] text-[18px]">
          <div class="font-bold text-[30px] mt-5">Features:</div>

          <li>Low-poly aesthetic with beautiful graphics</li>
          <li>Arcade-style gameplay for an exhilarating driving experience</li>
          <li>
            Diverse range of surfaces including dirt, sand, gravel, tarmac, snow, ice, and grass
          </li>

          <li>Customizable vehicles and upgrades to enhance performance</li>

          <li>Dynamic weather and environmental effects for added immersion</li>

          <li>Exciting single-player career mode and multiplayer options for competitive racing</li>
        </ul>

        <div class="font-bold text-[30px] mt-5">Experience the Thrill:</div>

        <div class="text-[18px]">
          Join me in "Louko's Garage" and embark on an adrenaline-fueled journey through stunning
          landscapes and challenging tracks. Whether you're a seasoned racer or a casual gamer
          looking for some high-octane fun, "Louko's Garage" promises an unforgettable ride.
        </div>

        <div class="flex align-center gap-6 mt-[80px]">
          <div
            class="cursor-pointer"
            v-for="(social, i) in socials"
            :key="i"
            @click="onSocialOpen(social.type)"
            :class="social.type == 'tiktok' ? '' : 'mt-1 ml-auto'"
          >
            <img class="w-[30px]" :src="social.icon" :alt="social.icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const emit = defineEmits(['closeDialog'])
const socials = reactive([
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

<style lang="scss" scoped>
.background-image {
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgb(0, 0, 0)), url('/images/garage_bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
}

.container {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
}

/* Then style the iframe to fit in the container div with full height and width */
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
</style>
