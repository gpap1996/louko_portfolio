<template>
  <div class="text-[white] h-auto w-full flex flex-col">
    <button
      @click="emit('closeDialog')"
      class="mdi mdi-close z-50 fixed top-4 right-4 text-[30px] bg-white text-black rounded-3xl w-10 h-10 flex items-center justify-center"
    ></button>

    <div class="bg-[black] p-6 flex flex-col align-center items-center">
      <div class="text-center text-[64px] leading-[100%] font-bold my-10">
        Augmented Reality (AR) Apps
      </div>

      <div class="max-w-[800px]">
        <div class="text-[18px]">
          In this category, I present a series of AR applications designed to enhance the museum
          experience through interactive digital content. Leveraging the power of Augmented Reality
          technology, users can engage with historical artifacts, architectural wonders, and
          immersive 3D models right before their eyes. These AR apps offer a unique blend of
          education and entertainment, bringing museum exhibits to life in captivating ways.
        </div>

        <ul class="list-disc list-inside max-w-[800px] text-[18px]">
          <div class="font-bold text-[30px] mt-5">Key Features:</div>

          <li>
            Augmented Reality Experience: Utilizing Vuforia, these AR apps provide an immersive and
            interactive experience that overlays digital content onto the real-world environment.
          </li>
          <li>
            3D Object Recognition: Users can witness historical buildings, artifacts, and other 3D
            objects come to life through the AR view, enhancing their understanding and appreciation
            of museum exhibits.
          </li>
          <li>
            Educational Content: Seamlessly integrated with museum exhibits, the AR apps offer
            educational insights, historical context, and interactive storytelling to enrich the
            visitor experience.
          </li>

          <li>
            Engaging Interactions: Users can interact with AR elements by exploring, rotating, and
            zooming in on 3D models, fostering curiosity and deeper engagement with the subject
            matter.
          </li>

          <li>
            Multiple Museum Locations: The AR apps are designed to cater to various museum
            environments, offering tailored experiences for different exhibits and collections.
          </li>
        </ul>

        <div class="font-bold text-[30px] mt-5">Technology:</div>

        <div class="text-[18px]">
          Vuforia, a leading Augmented Reality platform, is the backbone of these AR applications.
          Its robust object recognition and tracking capabilities enable seamless integration of
          digital content with the physical world. By harnessing the potential of Vuforia, these AR
          apps deliver compelling and immersive experiences that bridge the gap between the virtual
          and real worlds.
        </div>
        <div class="font-bold text-[30px] mt-5">Immerse Yourself in History:</div>
        <div class="text-[18px]">
          With these AR apps, users are invited to embark on a journey through time and space,
          exploring the wonders of history and culture in an entirely new light. Witness ancient
          civilizations, marvel at architectural masterpieces, and interact with artifacts like
          never before. Get ready to immerse yourself in a world where the past meets the present,
          all through the lens of Augmented Reality.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['closeDialog'])
</script>

<style lang="scss" scoped></style>
