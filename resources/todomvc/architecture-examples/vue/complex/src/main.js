import { createApp } from "vue";
import App from "../../shared/src/App.vue";
import router from "../../shared/src/router";
import "big-dom-generator/dist/app.css";
import "big-dom-generator/matchingCss.css";
import "big-dom-generator/nonMatchingCss.css";
import "big-dom-generator/public/layout.css";

const app = createApp(App);

app.use(router);

app.mount(".todoholder");
