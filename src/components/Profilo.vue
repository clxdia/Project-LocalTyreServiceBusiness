<template>
  <div class="md:w-[50%]">
    <h2
      class="text-center font-montserrat uppercase font-black text-black text-[25px] md:text-[40px]"
    >
      Gommista
    </h2>
    <div class="m-auto mt-20 w-fit text-center relative items-center flex">
      <img
        src="../assets/images/guy.jpg"
        class="w-[85%] z-10 m-auto my-auto md:w-[25vw] md:min-w-[400px] md:min-h-[400px]"
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
    class="md:w-[50%] md:text-center text-left text-black relative md:mt-0 mt-20 font-montserrat flex-col flex justify-center items-center"
  >
    <div class="w-[70%]">
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
        <div class="flex mt-10 md:mt-0 gap-20">
          <div
            class="w-1/2 md:w-auto gap-2 text-center flex flex-col md:justify-start md:gap-5"
          >
            <p class="font-[600]">Telefono</p>
            <p><font-awesome-icon icon="fa-solid fa-phone" /> 0771 736786</p>
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
</template>
