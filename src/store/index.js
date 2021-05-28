import Vue from "vue";
import Vuex from "vuex";

import moduleApp from "./modules/app";

const isProdEnv = process.env.NODE_ENV === "production";
Vue.use(Vuex);

export default new Vuex.Store({
    strict: !isProdEnv,
    modules: {
        app: moduleApp,
    },
});
