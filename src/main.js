import "./assets/reset.css";
import "tailwindcss/tailwind.css";
import Vue from "vue";
import i18n from "./lang";
import App from "./App.vue";
import store from "./store";
import { makeMockServer } from "@/mock-server/server";

const environment = process.env.NODE_ENV;
const isProduction = environment === "production";
const isDevelopment = environment === "development";

if (isDevelopment) makeMockServer({ environment });

Vue.config.productionTip = false;

Vue.config.errorHandler = (err, vm, info) => {
    throw err; // rethrow
};

new Vue({
    store,
    i18n,
    render: (h) => h(App),
}).$mount("#app");
