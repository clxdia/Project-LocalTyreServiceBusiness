<script>
import tyre from "../assets/icons/tyre.png";
import bilanciamento from "../assets/icons/bilanciamento.png";
import riparazione from "../assets/icons/riparazione.png";
import vendita from "../assets/icons/vendita.png";
import consulenza from "../assets/icons/consulenza.png";

export default {
  data() {
    return {
      services: [
        {
          id: "01",
          title: "Sostituzione di pneumatici",
          pic: tyre,
          class: ["animate-left", "left-service"],
        },
        {
          id: "02",
          title: "Bilanciamento delle ruote",
          pic: bilanciamento,
          class: ["animate-right", "right-service"],
        },
        {
          id: "03",
          title: "Riparazione di pneumatici",
          pic: riparazione,
          class: ["animate-left", "left-service"],
        },
        {
          id: "04",
          title: "Vendita di pneumatici",
          pic: vendita,
          class: ["animate-right", "right-service"],
        },
        {
          id: "05",
          title: "Consulenza tecnica",
          pic: consulenza,
          class: ["animate-left", "left-service"],
        },
      ],
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
    class="bg-[url('./assets/images/bg-office.webp')] md:mt-0 md:h-screen h-fit bg-cover bg-center md:bg-fixed bg-scroll md:pb-32 pb-20 relative"
  >
    <div
      class="m-auto w-[85%] text-center md:text-left pt-10 md:pt-20 text-[25px] md:text-[40px] flex flex-col h-full justify-evenly"
    >
      <div class="md:w-[30%]">
        <h2>Passione e precisione al tuo servizio</h2>
        <h3
          class="text-white mb-16 md:text-[18px] text-[15px] font-inter italic"
        >
          Scopri i servizi su misura per te!
        </h3>
      </div>

      <div class="md:w-full md:flex md:items-center">
        <div
          class="md:flex md:gap-5 md:overflow-x-scroll w-[95%] md:w-[85%] md:m-0 m-auto font-inter font-black relative overflow-hidden text-white md:min-h-[300px] md:h-[20vw]"
        >
          <div
            v-for="service in services"
            class="flex flex-row mt-5 items-center gap-2 md:min-w-[20vw] md:h-[20vw] md:min-h-[20vw] min-h-[40vw]"
            :key="service.id"
            :class="{
              'show-animate': showLeft,
              [service.class[1]]: true,
              [service.class[0]]: true,
            }"
          >
            <div
              class="bg-red-600 w-1/2 md:w-full p-5 flex flex-col md:justify-normal justify-between relative md:h-[20vw] md:min-w-[20vw] h-[40vw]"
            >
              <p class="text-[13px] md:text-[1.2vw]">{{ service.id }}</p>

              <img
                :src="service.pic"
                class="md:w-[6vw] w-[13vw] md:min-w-[50px] m-auto md:absolute md:bottom-8 md:right-6"
              />
              <p
                class="md:mt-5 md:text-[1.2vw] text-[13px] md:w-[70%] text-center md:text-left"
              >
                {{ service.title }}
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
    <div
      class="bg-gradient-to-t from-black w-full h-[30vh] absolute bottom-0"
    ></div>
  </section>
</template>

<style scoped>
.right-service {
  flex-direction: row-reverse;
  text-align: left;
}

.left-service {
  flex-direction: row;
  text-align: left;
}

.animate-left {
  transform: translateX(-100px);
}

.animate-left,
.animate-right {
  opacity: 0;
  position: relative;
  transition: opacity 1s ease, transform 1s ease;
  max-width: 100%;
}
.animate-right {
  transform: translateX(100px);
}

.show-animate {
  opacity: 1;
  transform: translateX(0);
}

@media screen and (max-width: 768px) {
  .right-service {
    text-align: right;
  }
}
</style>
