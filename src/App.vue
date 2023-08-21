<script setup>
import Header from "./components/Header.vue";
import Services from "./components/Services.vue";
import Brands from "./components/Brands.vue";
import Contatti from "./components/Contatti.vue";
</script>

<template>
  <Header />
  <main class="max-w-[2000px] font-contrail">
    <Services />
    <Brands />
    <Contatti />
  </main>
  <footer class="bg-black text-white w-full flex justify-end relative">
    <a
      href="https://github.com/clxdia"
      target="_blank"
      class="bg-black text-right mr-10 text-[15px] font-montserrat italic py-4 cursor-pointer"
    >
      © 2023 clxdia
    </a>
  </footer>
</template>
