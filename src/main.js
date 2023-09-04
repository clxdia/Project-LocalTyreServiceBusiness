import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Vue3Marquee from "vue3-marquee";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faLocationDot,
  faPhone,
  faClock,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";

library.add(faLocationDot, faPhone, faClock, faCircleChevronRight);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(Vue3Marquee)
  .mount("#app");
