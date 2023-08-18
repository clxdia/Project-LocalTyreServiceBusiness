import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { register } from "swiper/element/bundle";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faLocationDot,
  faPhone,
  faClock,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";

library.add(faLocationDot);
library.add(faPhone);
library.add(faClock);
library.add(faCircleChevronRight);

register();

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
