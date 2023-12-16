import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig(({ mode }) => {
    return {
        base: "./",
        server: {
            proxy: {
                "/api": {
                    target: "",
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, ""),
                },
            },
        },
        resolve: {
            alias: {
                "@": resolve(__dirname, "./src"),
            },
            extensions: [".ts", ".js", ".tsx"],
        },
        plugins: [react()],
        build: {
            sourcemap: mode === "development" ? true : false,
        },
        css: {
            preprocessorOptions: {
                less: {
                    charset: false,
                    additionalData: `@import "${resolve(__dirname, "./src/globalStyle.less")}";`,
                },
            },
        },
    };
});
