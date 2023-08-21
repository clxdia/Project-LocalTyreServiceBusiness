<script>
import { Vue3Marquee } from "vue3-marquee";
import { ref, onMounted } from "vue";

import barumLogo from "@/assets/logos/barumw.png";
import dunlopLogo from "@/assets/logos/dunlopw.png";
import gtRadialLogo from "@/assets/logos/gtradialw.png";
import yokohamaLogo from "@/assets/logos/yokohamaw.png";
import tigarLogo from "@/assets/logos/tigar2.png";
import goodyearLogo from "@/assets/logos/goodyearw.png";
import goodrichLogo from "@/assets/logos/goodrichw.png";

const bgColorChange = ref(false);

const brands1 = [
  barumLogo,
  dunlopLogo,
  gtRadialLogo,
  yokohamaLogo,
  dunlopLogo,
  goodyearLogo,
];
const brands2 = [
  goodrichLogo,
  yokohamaLogo,
  tigarLogo,
  dunlopLogo,
  yokohamaLogo,
  goodrichLogo,
  dunlopLogo,
  tigarLogo,
];
const brands3 = [
  gtRadialLogo,
  barumLogo,
  dunlopLogo,
  gtRadialLogo,
  barumLogo,
  dunlopLogo,
];

export default {
  components: {
    Vue3Marquee,
  },

  data() {
    return {
      brands1,
      brands2,
      brands3,
      bgColorChange,
    };
  },

  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log("Intersection Observer:", entry.isIntersecting);
        if (entry.isIntersecting) {
          bgColorChange.value = true;
        } else {
          bgColorChange.value = false;
        }
      });

      console.log("bgColorChange: " + bgColorChange.value);
    });

    const profileImage = document.getElementById("profile");
    if (profileImage) {
      observer.observe(profileImage);
    }
  },
};
</script>

<template>
  <div class="relative">
    <section
      class="h-screen relative pt-20"
      :class="{
        'bg-[#F4F3F2] transition-colors duration-700': bgColorChange,
        'bg-black transition-colors duration-700': !bgColorChange,
      }"
    >
      <div
        class="h-screen relative pb-[30vh] brands"
        :class="{
          'transition-opacisty duration-100 opacity-0': bgColorChange,
          'transition-opacity duration-100 opacity-100': !bgColorChange,
        }"
      >
        <div class="w-full">
          <Vue3Marquee style="width: 100%; height: fit-content">
            <img
              v-for="logo in brands1"
              class="ml-[50px] mt-16 w-[20vw] min-w-[250px]"
              :src="logo"
            />
          </Vue3Marquee>
        </div>
        <div>
          <Vue3Marquee style="width: 100%; height: fit-content">
            <img
              v-for="logo in brands2"
              class="ml-[50px] mt-20 min-w-[250px] w-[20vw]"
              :src="logo"
            />
          </Vue3Marquee>
        </div>
        <div>
          <Vue3Marquee style="width: 100%; height: fit-content">
            <img
              v-for="logo in brands3"
              class="ml-[50px] mt-20 min-w-[250px] w-[20vw]"
              :src="logo"
            />
          </Vue3Marquee>
        </div>
        <div>
          <Vue3Marquee style="width: 100%; height: fit-content">
            <img
              v-for="logo in brands2"
              class="ml-[50px] mt-20 min-w-[250px] w-[20vw]"
              :src="logo"
            />
          </Vue3Marquee>
        </div>
      </div>
    </section>

    <section
      class="md:h-[70vh] relative"
      :class="{
        'bg-black transition-colors duration-700': !bgColorChange,
        'bg-[#F4F3F2] transition-colors duration-700': bgColorChange,
      }"
    >
      <div
        class="md:flex relative max-w-[2000px] w-full md:bg-contain md:bg-no-repeat bg-cover md:bg-[center_left_30rem] bg-top pb-16 h-screen"
        :class="{
          'transition-opacity duration-100 opacity-100': bgColorChange,
          'transition-opacity duration-100 opacity-0': !bgColorChange,
        }"
      >
        <div class="md:w-[50%]">
          <h2
            class="text-center font-montserrat uppercase font-black text-black text-[25px] md:text-[40px]"
          >
            Gommista
          </h2>
          <div class="mx-auto m-auto w-fit text-center relative mt-10">
            <img
              src="../assets/images/guy.jpg"
              class="w-[90%] z-10 m-auto"
              id="profile"
            />
            <p
              class="bg-red-700 font-montserrat italic font-[600] px-14 py-5 w-fit z-10 bottom-[20px] right-[15px] absolute text-white text-[15px]"
            >
              Luigi Di Maio
            </p>
          </div>
        </div>
        <div
          class="md:w-[50%] max-w-[2000px] md:h-full w-full md:text-center text-left text-black relative m-auto md:mt-0 mt-20"
        >
          <div
            class="md:h-[60vh] md:mt-20 md:w-[60%] md:ml-20 md:pt-4 md:flex md:justify-between md:gap-10 font-montserrat bg-cover"
          >
            <div
              class="md:w-[100%] w-[90%] m-auto flex flex-col md:gap-0 gap-5 md:p-10"
            >
              <div class="w-full">
                <h3
                  class="md:text-left text-center md:text-[40px] text-[25px] font-[700] uppercase mb-5"
                >
                  Contatti
                </h3>
              </div>
              <div class="w-full md:flex block md:flex-col flex-row gap-10">
                <div
                  class="md:text-left text-center w-full md:w-auto md:mb-0 gap-2 mb-6 flex flex-col md:gap-5"
                >
                  <p class="font-[600]">Indirizzo</p>
                  <p>
                    <font-awesome-icon icon="fa-solid fa-location-dot" />
                    Via del Biancospino,
                    <span class="inline"> 04023 Formia (LT) </span>
                  </p>
                </div>
                <div class="flex mt-10 md:mt-0 justify-between">
                  <div
                    class="w-1/2 md:w-auto gap-2 text-center flex flex-col md:justify-start md:gap-5"
                  >
                    <p class="font-[600]">Telefono</p>
                    <p>
                      <font-awesome-icon icon="fa-solid fa-phone" /> 0771 736786
                    </p>
                  </div>
                  <div
                    class="w-1/2 md:w-auto gap-2 text-center flex flex-col md:justify-start md:gap-5"
                  >
                    <p class="font-[600]">Orario</p>
                    <p><font-awesome-icon icon="fa-solid fa-clock" /> 09:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
