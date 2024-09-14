// import "./assets/main.css";
import "./assets/tailwind.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCube, faMagnifyingGlass, faSliders, faTrash, faXmark} from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

library.add(faCube, faMagnifyingGlass, faSliders, faTrash, faXmark );

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
