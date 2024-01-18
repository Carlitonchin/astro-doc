import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-tutorial-carlitonchin.netlify.app/",
  integrations: [react()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "pt-br"],
    fallback:{
      es:"en",
      "pt-br":"en"
    }
  }
});