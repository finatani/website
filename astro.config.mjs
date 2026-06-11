import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import partytown from "@astrojs/partytown";

export default defineConfig({
  integrations: [partytown(
    {
      config: {
        forward: ["dataLayer.push"],
      },
    }
  )],
  vite: {
    plugins: [tailwindcss()]
  },
  server: {
    port: 3000
  }
});
