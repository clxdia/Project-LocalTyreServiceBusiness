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
      class="h-screen relative"
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
          <Vue3Marquee style="width: 100%; height: 120px">
            <img
              v-for="logo in brands1"
              class="ml-[50px] mt-5 w-[15vw] min-w-[250px]"
              :src="logo"
            />
          </Vue3Marquee>
        </div>
        <div>
          <Vue3Marquee style="width: 100%; height: 120px">
            <img
              v-for="logo in brands2"
              class="ml-[50px] mt-5 min-w-[250px] w-[15vw]"
              :src="logo"
            />
          </Vue3Marquee>
        </div>
        <div>
          <Vue3Marquee style="width: 100%; height: 120px">
            <img
              v-for="logo in brands3"
              class="ml-[50px] mt-10 min-w-[250px] w-[15vw]"
              :src="logo"
            />
          </Vue3Marquee>
        </div>
      </div>
    </section>

    <section
      class="h-[70vh] relative"
      :class="{
        'bg-black transition-colors duration-700': !bgColorChange,
        'bg-[#F4F3F2] transition-colors duration-700': bgColorChange,
      }"
    >
      <div
        class="relative max-w-[2000px] w-full md:bg-contain md:bg-no-repeat bg-cover md:bg-[center_left_30rem] bg-top pb-16 h-screen"
        :class="{
          'transition-opacity duration-100 opacity-100': bgColorChange,
          'transition-opacity duration-100 opacity-0': !bgColorChange,
        }"
      >
        <h2
          class="text-center font-montserrat uppercase font-black text-black text-[25px] md:text-[40px]"
        >
          Gommista
        </h2>
        <div class="mx-auto w-fit text-center relative mt-10">
          <img
            src="../assets/images/guy.jpg"
            class="min-w-[300px] min-h-[300px] w-[25vw] h-[25vw] z-10"
            id="profile"
          />
          <p
            class="bg-red-700 px-14 py-5 w-fit z-10 bottom-[20px] right-[-30px] absolute text-white"
          >
            Luigi Di Maio
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
