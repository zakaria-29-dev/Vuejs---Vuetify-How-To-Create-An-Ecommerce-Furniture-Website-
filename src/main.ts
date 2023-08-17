import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import Vuetify from "./vuetify.conf";
import i18n from "./i18n";

createApp(App).use(router).use(Vuetify).use(i18n).mount("#app");
