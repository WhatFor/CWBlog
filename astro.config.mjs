import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL,
  integrations: [react(), tailwind(), sitemap(), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  })],
  output: "static",
  adapter: vercel()
});