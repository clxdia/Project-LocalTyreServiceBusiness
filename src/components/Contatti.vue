<template>
  <section
    class="max-w-[2000px] w-full md:text-center text-left text-white pt-10 h-fit relative bg-[#252525]"
  >
    <div
      class="w-[80%] m-auto pt-4 md:flex md:justify-between md:gap-10 pb-10 font-montserrat"
    >
      <div
        class="md:w-[100%] md:justify-between flex md:flex-row flex-col md:gap-0 gap-5"
      >
        <div class="md:w-[30%] w-full">
          <h3 class="text-left font-[700] uppercase mb-5">Contatti</h3>
        </div>
        <div class="md:w-[70%] w-full md:flex block justify-evenly">
          <div
            class="w-full md:w-auto md:mb-0 mb-6 flex flex-col md:justify-start md:gap-5"
          >
            <p class="font-[600]">
              <font-awesome-icon icon="fa-solid fa-location-dot" /> Indirizzo
            </p>
            <p>
              Via del Biancospino,
              <span class="md:block inline"> 04023 Formia (LT) </span>
            </p>
          </div>
          <div class="flex mt-5 md:mt-0">
            <div
              class="w-1/2 md:w-auto flex mr-[10vw] flex-col md:justify-start md:gap-5"
            >
              <p class="font-[600]">
                <font-awesome-icon icon="fa-solid fa-phone" /> Telefono
              </p>
              <p>0771 736786</p>
            </div>
            <div
              class="w-1/2 md:w-auto flex flex-col md:justify-start md:gap-5"
            >
              <p class="font-[600]">
                <font-awesome-icon icon="fa-solid fa-clock" /> Orario
              </p>
              <p>09:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="width: 100%; overflow: hidden; height: 350px">
      <iframe
        width="100%"
        height="600"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        style="border: 0; margin-top: -150px"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2176.3546573912186!2d13.679290381452944!3d41.26785460510499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133ace32bb92275b%3A0x20176d94d7047b0b!2sPneumatici%20D.M.L.!5e0!3m2!1sen!2sit!4v1691862385447!5m2!1sen!2sit"
      ></iframe>
    </div>
  </section>
</template>
