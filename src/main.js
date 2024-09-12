// import "./assets/main.css";
import "./assets/tailwind.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCube, faMagnifyingGlass, faSliders, faTrash} from "@fortawesome/free-solid-svg-icons";

library.add(faCube, faMagnifyingGlass, faSliders, faTrash);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
