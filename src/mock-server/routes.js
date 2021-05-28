import { Response } from "miragejs";
import generateUuid from "@/util/generate-uuid";
import faker from "faker";

export default [
    {
        // GET all widgets
        method: "get",
        path: "/example/widgets",
        handler: (schema, request) => schema.widgets.all(),
    },
    {
        // GET a widget by id
        method: "get",
        path: "/example/widgets/:id",
        handler: (schema, request) => {
            const id = request.params.id;
            return schema.widgets.find(id);
        },
    },
    {
        // POST a new widget
        method: "post",
        path: "/example/widgets",
        handler: (schema, request) => {
            const widgetAttr = Object.assign(
                {},
                {
                    id: generateUuid(),
                    name: faker.commerce.productName(),
                    size: faker.helpers.randomize(["small", "medium", "large"]),
                    color: faker.commerce.color(),
                    price: Number(faker.commerce.price()),
                },
                JSON.parse(request.requestBody)
            );

            return schema.widgets.create(widgetAttr);
        },
    },
    {
        // PATCH to update a widget
        method: "patch",
        path: "/example/widgets/:id",
        handler: (schema, request) => {
            const widgetAttrs = JSON.parse(request.requestBody);
            const id = request.params.id;
            const widget = schema.widgets.find(id);
            return widget.update(widgetAttrs);
        },
    },
    {
        // DELETE a widget
        method: "delete",
        path: "/example/widgets/:id",
        handler: (schema, request) => {
            const id = request.params.id;
            schema.widgets.findBy({ id }).destroy();
            return true;
        },
    },
];
