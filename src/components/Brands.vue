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
  <section class="bg-white h-fit">
    <div
      class="h-fit relative pb-[30vh] brands transition-opacity duration-700 opacity-100"
      :class="{
        'bg-white transition-opacity duration-700 opacity-100': bgColorChange,
        'bg-black transition-opacity duration-700 opacity-100': !bgColorChange,
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

  <section class="bg-white h-fit">
    <div
      class="relative max-w-[2000px] w-full md:bg-contain md:bg-no-repeat bg-cover md:bg-[center_left_30rem] bg-top pb-16 pt-40"
      :class="{
        'bg-white transition-opacity duration-700 opacity-100': bgColorChange,
        'bg-black transition-opacity duration-700 opacity-100': !bgColorChange,
      }"
    >
      <h3 class="text-center font-montserrat uppercase font-black text-black">
        Gommista
      </h3>
      <div class="mx-auto w-fit text-center relative mt-10">
        <img
          src="../assets/images/guy.jpg"
          class="min-w-[300px] min-h-[300px] w-[25vw] h-[25vw] z-10"
          id="profile"
        />
        <p
          class="bg-red-700 px-14 py-5 w-fit z-20 bottom-[20px] right-[-30px] absolute text-white"
        >
          Luigi Di Maio
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
