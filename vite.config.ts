import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [sveltekit()],
    resolve: {
        // alias: {
        //     $components: path.resolve("./src/lib/components"),
        //     $assets: path.resolve("./src/assets"),
        // $actions: "src/lib/actions",
        // $helpers: "src/lib/helpers",
        // $stores: "src/lib/stores",
        // },
    },
});
