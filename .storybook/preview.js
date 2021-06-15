import "../src/main.css";
import { addDecorator } from "@storybook/vue";
import i18n from "@/lang";

addDecorator(() => ({
    template: "<story/>",
    i18n,
}));
