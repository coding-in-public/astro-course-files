import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["astro.build"]
  },
  integrations: [react()]
});