import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Hosted at https://andrewnplus.github.io/nplus-design/ by default.
// If a custom domain (e.g. design.nplus.page) is added later, update `site`
// and remove `base`.
export default defineConfig({
  site: "https://andrewnplus.github.io",
  base: "/nplus-design",
  trailingSlash: "always",
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
