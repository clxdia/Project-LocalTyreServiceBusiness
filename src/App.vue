<script setup>
import Header from "./components/Header.vue";
import Services from "./components/Services.vue";
import Brands from "./components/Brands.vue";
import Profile from "./components/Profile.vue";
import Contatti from "./components/Contatti.vue";
</script>

<template>
  <Header />
  <main class="max-w-[2000px] font-contrail">
    <Services />
    <Brands />

    <Contatti />
  </main>
  <footer class="bg-black h-14 text-white">
    <p class="text-center text-[30px] font-racing">DML</p>
  </footer>
</template>
