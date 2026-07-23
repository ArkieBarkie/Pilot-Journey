import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const githubPages = process.env.GITHUB_PAGES === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "pilot-journey";

export default defineConfig({
  site: githubPages ? "https://arkiebarkie.github.io" : "https://thepilotjourney.com",
  base: githubPages ? `/${repositoryName}` : undefined,
  output: "static",
  adapter: cloudflare(),
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
