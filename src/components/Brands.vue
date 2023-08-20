<script>
import { Vue3Marquee } from "vue3-marquee";

import barumLogo from "@/assets/logos/barumw.png";
import dunlopLogo from "@/assets/logos/dunlopw.png";
import gtRadialLogo from "@/assets/logos/gtradialw.png";
import yokohamaLogo from "@/assets/logos/yokohamaw.png";
import tigarLogo from "@/assets/logos/tigar2.png";
import goodyearLogo from "@/assets/logos/goodyearw.png";
import goodrichLogo from "@/assets/logos/goodrichw.png";

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
    };
  },
};
</script>

<template>
  <div class="bg-black">
    <div class="w-full">
      <Vue3Marquee style="width: 100%; height: 100px">
        <img
          v-for="logo in brands1"
          class="ml-[50px] mt-5 w-[15vw] min-w-[200px]"
          :src="logo"
        />
      </Vue3Marquee>
    </div>
    <div>
      <Vue3Marquee>
        <img
          v-for="logo in brands2"
          class="ml-[50px] mt-5 min-w-[200px] w-[15vw]"
          :src="logo"
        />
      </Vue3Marquee>
    </div>
    <div>
      <Vue3Marquee>
        <img
          v-for="logo in brands3"
          class="ml-[50px] mt-10 min-w-[200px] w-[15vw]"
          :src="logo"
        />
      </Vue3Marquee>
    </div>
  </div>
</template>

<style scoped></style>
