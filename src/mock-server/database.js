import { Model, Factory } from "miragejs";
import generateUuid from "@/util/generate-uuid";
import faker from "faker";

import widgets from "./data/widgets.json";

export const seedData = function (server) {
    server.createList("widget", 4);
};

export const entities = [
    {
        name: "widget",
        pluralName: "widgets",
        initData: widgets,
        model: Model,
        // Optional
        factory: Factory.extend({
            id() {
                return generateUuid();
            },
            name() {
                return faker.commerce.productName();
            },
            size() {
                return faker.helpers.randomize(["small", "medium", "large"]);
            },
            color() {
                return faker.commerce.color();
            },
            price() {
                return Number(faker.commerce.price());
            },
        }),
    },
];
