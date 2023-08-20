<script setup>
import Header from "./components/Header.vue";
import Services from "./components/Services.vue";
import Brands from "./components/Brands.vue";
</script>

<template>
  <Header />
  <main class="max-w-[2000px] font-contrail">
    <Services />
    <Brands />
    <section
      class="max-w-[2000px] w-full bg-[url('./assets/images/tiree.png')] md:bg-contain md:bg-no-repeat bg-cover md:bg-[center_left_30rem] bg-top pb-16 pt-10"
    >
      <h3 class="text-center font-montserrat uppercase font-black">Gommista</h3>
      <div class="mx-auto w-fit text-center relative mt-10">
        <img
          src="./assets/images/guy.jpg"
          class="min-w-[300px] min-h-[300px] w-[25vw] h-[25vw] z-10"
        />
        <p
          class="bg-red-700 px-14 py-5 w-fit z-20 bottom-[20px] right-[-30px] absolute text-white"
        >
          Luigi Di Maio
        </p>
      </div>
    </section>
    <section
      class="max-w-[2000px] w-full bg-[url('./assets/images/black-texture.jpg')] text-center text-white bg-cover pt-10"
    >
      <h3>Contatti</h3>
      <div
        class="w-[80%] m-auto pt-4 md:flex md:justify-between md:gap-10 pb-32"
      >
        <div class="md:w-[50%] md:justify-start">
          <div class="flex justify-between md:justify-start md:gap-20">
            <font-awesome-icon icon="fa-solid fa-location-dot" />
            <p>Via del Biancospino, 04023 Formia (LT)</p>
          </div>
          <div class="flex justify-between md:justify-start md:gap-20">
            <font-awesome-icon icon="fa-solid fa-phone" />
            <p>0771 736786</p>
          </div>
          <div class="flex justify-between md:justify-start md:gap-20">
            <font-awesome-icon icon="fa-solid fa-clock" />
            <p>ORARIO</p>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2176.3546573912186!2d13.679290381452944!3d41.26785460510499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133ace32bb92275b%3A0x20176d94d7047b0b!2sPneumatici%20D.M.L.!5e0!3m2!1sen!2sit!4v1691862385447!5m2!1sen!2sit"
          class="md:w-[50%] w-[100%] md:h-[50vh] h-[300px] md:m-0 m-auto"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
    <footer class="bg-black h-14 text-white">
      <p class="text-center text-[30px] font-racing">DML</p>
    </footer>
  </main>
</template>
