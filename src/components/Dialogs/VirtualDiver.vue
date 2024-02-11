<template>
  <div class="text-[white] h-auto w-full flex flex-col">
    <button
      @click="emit('closeDialog')"
      class="mdi mdi-close z-50 fixed top-4 right-4 text-[30px] bg-white text-black rounded-3xl w-10 h-10 flex items-center justify-center"
    ></button>
    <div class="h-screen relative shadow-2xl">
      <div class="h-screen backgroun-image"></div>
      <div
        class="z-50 text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-100%] text-[64px] leading-[100%] font-bold"
      >
        VIRTUAL DIVER
      </div>
    </div>
    <div class="bg-[black] p-4">
      <div class="title font-bold text-[30px] mb-5">I Used to love and respect</div>
      <div class="title">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, debitis. Fuga culpa earum
        ex minima accusamus nihil cumque dolorem eum nemo. Eaque officia in, dolorem consequuntur
        minima nulla labore ipsum. Sequi, recusandae laborum. Quibusdam, modi! Aliquam nemo ut eos
        reiciendis optio porro voluptatibus eius cumque minima, incidunt sunt similique hic
        obcaecati iure quis soluta maiores ipsam? Sunt doloribus unde officia! Eos tempora earum
        officia inventore aperiam illo explicabo, reprehenderit alias fugit rem, totam non excepturi
        qui voluptas suscipit iusto commodi asperiores ipsum dignissimos temporibus sequi. Rerum
        voluptatem tempore labore voluptatibus. At qui omnis maxime impedit distinctio porro quae
        consequatur consequuntur animi recusandae ipsa, velit sit nemo laboriosam vitae nulla quas
        nobis suscipit? Molestiae, consequatur ut? Nesciunt quidem magni dicta nam. Incidunt
        repellendus rem quibusdam molestiae. Quisquam modi, corrupti doloribus beatae, reprehenderit
        quidem omnis perferendis itaque tempora consectetur quaerat officiis asperiores dicta
        dignissimos facilis. Dicta, numquam? Officia ducimus similique natus! Provident. Sunt facere
        incidunt cumque consectetur dignissimos asperiores ab pariatur provident ad? Ullam
        voluptatem cupiditate maiores, molestias repellendus dicta facilis animi excepturi
        explicabo, nulla nihil laborum est autem temporibus molestiae esse? Facere ea nihil iure
        commodi, vel id ad doloremque! Fuga, saepe eaque provident quia esse obcaecati delectus.
        Neque ab quod id magni accusamus veniam dignissimos earum sint! Fugit, molestias error.
        Architecto aspernatur obcaecati minima magni itaque quae possimus, sunt veniam quibusdam
        facilis ullam quaerat quia cupiditate at atque id adipisci? Cupiditate, id? Tenetur,
        quibusdam libero. Maxime obcaecati alias dignissimos aspernatur. Nulla, sed reprehenderit
        quas commodi vel nihil ad ratione officiis ea tenetur qui officia quae iusto? Sed quis autem
        fugit tempore modi? Cumque cum nesciunt eligendi vero suscipit! Numquam, sapiente! Eaque,
        repellat ducimus. Mollitia maxime numquam, repudiandae quas dolores magni aperiam et iure!
        Laborum assumenda, molestias nihil accusamus, magnam dolores corporis sunt distinctio
        explicabo ducimus suscipit excepturi quam, sapiente officiis.
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['closeDialog'])
</script>

<style lang="scss" scoped>
.backgroun-image {
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgb(0, 0, 0)), url('@/assets/images/diver1.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
}
</style>
