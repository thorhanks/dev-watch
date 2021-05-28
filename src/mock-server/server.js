import { createServer } from "miragejs";
import routes from "./routes";
import { seedData, entities } from "./database";

let models = {};
let data = {};
let factories = {};
entities.forEach(({ name, pluralName, initData, model, factory }) => {
    models[name] = model;
    data[pluralName] = initData;
    if (factory) factories[name] = factory;
});

export function makeMockServer({ environment = "development" } = {}) {
    return createServer({
        environment,
        models,
        factories,
        seeds(server) {
            server.db.loadData(data);
            if (seedData) seedData(server);
        },
        routes() {
            routes.forEach(({ method, path, handler }) => {
                this[method](path, handler);
            });
            this.passthrough();
        },
    });
}
