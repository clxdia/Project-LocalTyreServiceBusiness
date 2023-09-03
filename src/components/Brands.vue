<script>
import { Vue3Marquee } from "vue3-marquee";
import { ref } from "vue";

import sumimotoLogo from "@/assets/logos/sumimotow.png";
import dunlopLogo from "@/assets/logos/dunlopw.png";
import gtRadialLogo from "@/assets/logos/gtradialw.png";
import yokohamaLogo from "@/assets/logos/yokohamaw.png";
import tigarLogo from "@/assets/logos/tigar2.png";
import goodyearLogo from "@/assets/logos/goodyearw.png";
import goodrichLogo from "@/assets/logos/goodrichw.png";
import Profilo from "./Profilo.vue";

const bgColorChange = ref(false);

const brands1 = [
  sumimotoLogo,
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
  sumimotoLogo,
  dunlopLogo,
  gtRadialLogo,
  sumimotoLogo,
  dunlopLogo,
];

export default {
  components: {
    Vue3Marquee,
    Profilo,
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
    const observer = new IntersectionObserver((sections) => {
      sections.forEach((section) => {
        console.log("Intersection Observer:", section.isIntersecting);
        if (section.isIntersecting) {
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
      id="info"
      class="md:h-[90vh] h-fit relative mb-0"
      :class="{
        'bg-black transition-colors duration-700': !bgColorChange,
        'bg-[#F4F3F2] transition-colors duration-700': bgColorChange,
      }"
    >
      <div
        class="md:flex relative m-auto h-fit w-full pb-16"
        :class="{
          'transition-opacity duration-100 opacity-100': bgColorChange,
          'transition-opacity duration-100 opacity-0': !bgColorChange,
        }"
      >
        <Profilo />
      </div>
    </section>
  </div>
</template>

<style scoped></style>
