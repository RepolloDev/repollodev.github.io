import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://repollodev.github.io",
  output: "static",
  devToolbar: {
    enabled: false,
  },
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
  ],
});
