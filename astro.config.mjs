// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://famous-meerkat-50d749.netlify.app/",
  integrations: [preact()],
});