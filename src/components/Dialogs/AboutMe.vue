<template>
  <div class="text-[white] h-auto w-full flex flex-col">
    <button
      @click="emit('closeDialog')"
      class="mdi mdi-close z-50 fixed top-4 right-4 text-[30px] bg-white text-black rounded-3xl w-10 h-10 flex items-center justify-center"
    ></button>

    <div class="bg-[black] p-6 flex flex-col align-center items-center">
      <div class="text-center text-[64px] leading-[100%] font-bold my-10">About Me</div>

      <div class="max-w-[800px]">
        <div class="text-[18px]">
          My name is Kostas Loukopoulos, a 27-year-old developer hailing from Athens, Greece. I
          pursued my passion for technology by studying Computer Science at the University of West
          Attica, where I honed my skills and laid the foundation for my career in software
          development.
        </div>

        <div class="font-bold text-[30px] mt-5">Professional Experience:</div>

        <div class="text-[18px]">
          With over 3.5 years of professional experience as a Unity developer, I have had the
          opportunity to work on a diverse range of projects, from immersive virtual reality
          experiences to engaging augmented reality applications. My journey in the industry has
          allowed me to collaborate with talented teams, tackle complex challenges, and continuously
          expand my knowledge and expertise in game development and interactive media.
        </div>
        <div class="font-bold text-[30px] mt-5">Indie Game Development:</div>
        <div class="text-[18px]">
          In addition to my professional work, I am a passionate indie game developer on a mission
          to bring my creative vision to life. Currently, I am dedicating my time and energy to the
          development of "Loukos Garage," a simcade racing game that combines the excitement of
          arcade-style gameplay with the depth of simulation mechanics. Through this project, I aim
          to deliver an immersive and thrilling gaming experience that resonates with players around
          the world.
        </div>

        <div class="font-bold text-[30px] mt-5">Future Endeavors:</div>
        <div class="text-[18px]">
          Driven by my love for technology and innovation, I am always eager to explore new
          opportunities, push the boundaries of creativity, and make a meaningful impact in the
          world of game development and interactive entertainment. Whether it's through crafting
          captivating experiences, solving complex technical challenges, or inspiring others in the
          industry, I am committed to continuously evolving and growing as a developer and a
          creator.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['closeDialog'])
</script>

<style lang="scss" scoped></style>
