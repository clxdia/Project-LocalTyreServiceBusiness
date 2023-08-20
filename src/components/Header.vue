<script setup></script>

<template>
  <header class="text-white bg-black">
    <nav class="py-2 md:py-3 font-racing fixed top-0 w-full z-20 bg-black">
      <h1 class="text-center text-[30px]">DML</h1>
      <span
        class="bg-gradient-to-r from-black via-gray-400 to-black h-[1px] w-full absolute bottom-0"
      ></span>
    </nav>
    <div
      class="hero-bg md:relative h-screen bg-[url('./assets/images/heroMB.png')] md:bg-fixed md:bg-no-repeat bg-cover md:bg-[url('./assets/images/herodark.png')] pt-[13vh] md:h-[80vh] bg-bottom md:bg-center p-10 flex flex-col md:justify-center md:px-[10%] text-left md:text-center"
    >
      <h2 class="text-[40px] w-[80%] md:w-full block uppercase leading-tight">
        Il Tuo Partner per Gomme a
        <span class="text-stroke-trick text-transparent">Formia!</span>
      </h2>

      <!-- <h3 class="flex gap-2 items-center mt-5">
        <font-awesome-icon
          icon="fa-solid fa-location-dot"
          class="text-[20px]"
        />
        <span class="font-montserrat text-[20px] italic"
          >Formia, 04023 (LT)</span
        >
      </h3> -->
      <button
        class="mt-7 bg-red-600 py-1 px-6 rounded-full text-[25px] font-racing w-fit md:mx-auto"
      >
        INFO
      </button>
    </div>
  </header>
</template>

<style scoped>
.text-stroke-trick {
  color: black;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 2px white;
}

@media screen and (max-width: 768px) {
  .hero-bg {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
}
</style>
