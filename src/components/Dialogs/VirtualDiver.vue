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
        VIRTUAL DIVER
      </div>
    </div>
    <div class="bg-[black] p-6 flex flex-col align-center items-center">
      <div class="max-w-[800px]">
        <div class="text-[18px]">
          <a @click="onOpenVirtualDiver" class="font-bold underline cursor-pointer"
            >Virtual Diver</a
          >
          is an immersive VR Unity application that transports users to the stunning Greek island of
          Santorini, both above and below the water's surface. With Virtual Diver, users can embark
          on a breathtaking exploration of the island's underwater world, discovering vibrant marine
          life and captivating underwater landscapes.
        </div>

        <div style="padding: 56.25% 0 0 0; position: relative" class="my-5">
          <iframe
            src="https://player.vimeo.com/video/993443759?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
            title="PanoramaVrDiver"
          ></iframe>
        </div>

        <ul class="list-disc list-inside max-w-[800px] text-[18px]">
          <div class="font-bold text-[30px] mt-5">Key Features:</div>

          <li>
            Exploration: Users can freely explore the underwater environments of Santorini,
            experiencing the beauty and serenity of the ocean depths.
          </li>
          <li>
            Interactive 3D Content: Dive deeper into the experience by watching 3D videos and
            images, interacting with 3D models, and experiencing the island's topography firsthand.
          </li>
          <li>
            Seamless Transition: Seamlessly transition between underwater and above-water
            exploration, allowing users to enjoy both aspects of Santorini's scenery.
          </li>

          <li>
            Virtual Reality Experience: Virtual Diver is optimized for VR experiences, providing an
            immersive and engaging journey for users wearing VR headsets.
          </li>

          <li>
            VRTK Integration: Leveraging the power of VRTK, Virtual Diver offers intuitive VR
            interactions and controls, enhancing the user experience.
          </li>

          <li>
            Crest Ocean URP: The application utilizes Crest Ocean URP for realistic and dynamic
            ocean simulation, bringing the underwater environment to life with stunning visuals and
            effects.
          </li>
        </ul>
        <ul class="list-disc list-inside max-w-[800px] text-[18px]">
          <div class="font-bold text-[30px] mt-5">Role and Technologies:</div>

          As the developer of Virtual Diver, I was responsible for:

          <li>
            Implementing VR functionality using VRTK to create immersive interactions and controls.
          </li>

          <li>
            Integrating Crest Ocean URP to simulate realistic underwater environments and ocean
            dynamics.
          </li>

          <li>
            Designing and implementing the user interface for accessing 3D content, videos, and
            images.
          </li>

          <li>
            Optimizing performance to ensure smooth gameplay and VR experience across different
            platforms.
          </li>
        </ul>

        <div class="font-bold text-[30px] mt-5">Experience Santorini Like Never Before:</div>

        <div class="text-[18px]">
          Virtual Diver offers users a unique opportunity to experience Santorini in a whole new
          way. Whether you're marveling at the breathtaking underwater scenery, interacting with 3D
          models, or simply soaking in the island's beauty, Virtual Diver promises an unforgettable
          adventure.
        </div>
        <div style="padding: 56.25% 0 0 0; position: relative" class="my-5">
          <iframe
            src="https://player.vimeo.com/video/993444158?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
            title="WalkVrDiver"
          ></iframe>
        </div>

        <div class="font-bold text-[30px] mt-5">Get Ready to Dive In:</div>
        <div class="text-[18px]">
          Immerse yourself in the wonders of Santorini with Virtual Diver. Put on your VR headset,
          explore the depths of the ocean, and embark on an unforgettable journey beneath the waves.
          Are you ready to dive in?
        </div>
        <div style="padding: 56.25% 0 0 0; position: relative" class="my-5">
          <iframe
            src="https://player.vimeo.com/video/993443246?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
            title="UnderWaterVrDiver"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['closeDialog'])

const onOpenVirtualDiver = () => {
  window.open('https://www.virtualdiver.gr/')
}
</script>

<style lang="scss" scoped>
.background-image {
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgb(0, 0, 0)), url('/images/diver_bg.jpg');
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
