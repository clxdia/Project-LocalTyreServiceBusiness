<script>
export default {
  data() {
    return {
      animateObserver: null,
    };
  },
  mounted() {
    this.setupObserver();
  },
  methods: {
    setupObserver() {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      };

      this.animateObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-animate");
            observer.unobserve(entry.target);
          }
        });
      }, options);

      const animateElements = this.$el.querySelectorAll(
        ".animate-left, .animate-right"
      );
      animateElements.forEach((element) => {
        this.animateObserver.observe(element);
      });
    },
  },
};
</script>

<template>
  <section
    class="bg-[url('./assets/images/office1.png')] h-[150vh] md:h-screen bg-cover bg-fixed md:pb-32 pb-20"
  >
    <div
      class="m-auto w-[85%] text-center md:text-left pt-10 md:pt-20 text-[25px] md:text-[40px]"
    >
      <div class="md:w-[365px]">
        <h2>Passione e precisione al tuo servizio</h2>
        <h4 class="text-white mb-16 font-inter italic">
          Scopri i servizi su misura per te!
        </h4>
      </div>

      <div class="md:w-full md:flex md:items-center">
        <div
          class="md:flex md:gap-5 md:overflow-x-scroll w-[95%] md:w-[85%] md:m-0 m-auto font-inter font-black relative overflow-hidden text-white md:items-baseline md:h-[20vw] md:min-h-[300px] md:max-h-[400px]"
        >
          <div
            class="flex flex-row md:flex-col mt-5 items-center text-left gap-2 animate-left left-service"
            :class="{ 'show-animate': showLeft }"
          >
            <div
              class="bg-red-600 w-1/2 md:w-full p-5 flex flex-col md:justify-normal justify-between relative md:min-h-[300px] h-[40vw]"
            >
              <p>01</p>

              <img
                src="../assets/icons/tyre.png"
                class="md:w-[6vw] w-[13vw] md:min-w-[100px] m-auto md:absolute md:bottom-6 md:right-6"
              />
              <p
                class="md:mt-5 md:text-[22px] md:w-[70%] text-center md:text-left"
              >
                Sostituzione e montaggio di pneumatici
              </p>
            </div>
          </div>
          <div
            class="flex flex-row-reverse md:flex-col items-center md:text-left text-right gap-2 md:col-span-1 md:pb-28 animate-right right-service"
            :class="{ 'show-animate': showRight }"
          >
            <div
              class="bg-red-600 w-1/2 md:w-full p-5 flex flex-col md:justify-normal relative md:min-h-[300px] h-[40vw]"
            >
              <p>02</p>

              <img
                src="../assets/icons/bilanciamento.png"
                class="md:w-[6vw] w-[13vw] md:min-w-[100px] m-auto md:absolute md:bottom-6 md:right-6"
              />
              <p
                class="md:mt-5 md:text-[22px] md:w-1/2 text-center md:text-left"
              >
                Bilanciamento delle ruote
              </p>
            </div>
          </div>
          <div
            class="flex left-service md:flex-col items-center text-left gap-2 md:col-span-1 md:pb-28 animate-left"
            :class="{ 'show-animate': showLeft }"
          >
            <div
              class="bg-red-600 w-1/2 md:w-full p-5 flex flex-col md:min-h-[300px] h-[40vw]"
            >
              <p>03</p>
              <img
                src="../assets/icons/riparazione.png"
                class="md:w-[6vw] w-[13vw] md:min-w-[100px] m-auto md:absolute md:bottom-6 md:right-6"
              />
              <p
                class="md:mt-5 md:text-[22px] md:w-1/2 md:text-left text-center"
              >
                Riparazione di pneumatici
              </p>
            </div>
          </div>
          <div
            class="flex flex-row-reverse md:flex-col items-center text-right gap-2 md:pb-28 animate-right right-service"
            :class="{ 'show-animate': showRight }"
          >
            <div
              class="bg-red-600 w-1/2 md:w-full p-5 flex flex-col md:min-h-[300px] h-[40vw]"
            >
              <p>04</p>
              <img
                src="../assets/icons/vendita.png"
                class="md:w-[6vw] w-[13vw] md:min-w-[100px] m-auto md:absolute md:bottom-6 md:right-6"
              />
              <p
                class="md:mt-5 md:text-[22px] md:w-1/2 text-center md:text-left"
              >
                Vendita di pneumatici
              </p>
            </div>
          </div>
          <div
            class="flex md:flex-col items-center text-left gap-2 md:pb-28 animate-left left-service"
            :class="{ 'show-animate': showLeft }"
          >
            <div
              class="bg-red-600 w-1/2 md:w-full p-5 flex flex-col justify-between md:min-h-[300px] h-[40vw]"
            >
              <p>05</p>
              <img
                src="../assets/icons/consulenza.png"
                class="md:w-[6vw] w-[13vw] md:min-w-[100px] m-auto md:absolute md:bottom-6 md:right-6"
              />
              <p
                class="md:mt-5 md:text-[22px] md:w-1/2 text-center md:text-left"
              >
                Consulenza tecnica
              </p>
            </div>
          </div>
        </div>
        <div class="md:ml-28 hidden md:block">
          <font-awesome-icon
            icon="fa-solid fa-circle-chevron-right"
            style="color: #fff"
            class="text-[35px] cursor-pointer"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-left {
  opacity: 0;
  position: relative;
  transform: translateX(-100px);
  transition: opacity 1s ease, transform 1s ease;
}

.animate-right {
  opacity: 0;
  position: relative;
  transform: translateX(100px);
  transition: opacity 1s ease, transform 1s ease;
}

p {
  font-size: 13px;
}

.show-animate {
  opacity: 1;
  transform: translateX(0);
}

@media screen and (min-width: 768px) {
  .left-service,
  .right-service {
    width: 20vw;
    height: 20vw;
    min-width: 300px;
    min-height: 300px;
    max-width: 300px;
    max-height: 300px;
  }
}

p {
  font-size: 22px;
}
</style>
