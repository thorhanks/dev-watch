const path = require("path");

module.exports = {
    stories: ["../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
    addons: ["@storybook/addon-essentials"],
    webpackFinal: async (config) => {
        // Add TailwindCss Support
        config.module.rules.push({
            test: /\,css&/,
            use: [
                {
                    loader: "postcss-loader",
                    options: {
                        ident: "postcss",
                        plugins: [
                            require("tailwindcss"),
                            require("autoprefixer"),
                        ],
                    },
                },
            ],
            include: path.resolve(__dirname, "../"),
        });

        return config;
    },
};
