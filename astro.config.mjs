import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: process.env.SITE_URL,
  integrations: [react(), tailwind(), sitemap()],
  output: "static",
  adapter: vercel()
});