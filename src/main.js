import { createApp } from "vue";
import App from "./App.vue";

/* FONTAWESOME */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
library.add(faUserSecret);

import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";

createApp(App).mount("#app");

app.component("font-awesome-icon", FontAwesomeIcon);
