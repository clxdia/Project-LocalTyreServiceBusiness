<template>
  <footer
    class="bg-black flex justify-end relative w-full md:text-center text-left text-white h-fit flex-col"
  >
    <div style="width: 100%; overflow: hidden; height: 340px" class="map">
      <iframe
        title="Google Maps di Via del Biancospino, Formia"
        width="100%"
        height="600"
        frameborder="0"
        draggable="false"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        style="border: 0; margin-top: -150px"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2176.3546573912186!2d13.679290381452944!3d41.26785460510499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133ace32bb92275b%3A0x20176d94d7047b0b!2sPneumatici%20D.M.L.!5e0!3m2!1sen!2sit!4v1691862385447!5m2!1sen!2sit"
      ></iframe>
    </div>
    <div
      class="bg-black text-gray-400 h-12 w-full relative flex items-center justify-end"
    >
      <a
        href="https://github.com/clxdia"
        target="_blank"
        class="text-[15px] font-montserrat cursor-pointer mr-5"
      >
        © 2023 clxdia | Formia (LT)
      </a>
    </div>
  </footer>
</template>

<style scoped>
@media screen and (max-width: 768px) {
  .map {
    height: 25vh !important;
  }

  iframe {
    margin-top: -190px !important;
  }
}
</style>
