// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extends: ["@nuxt-themes/typography", "@nuxt-themes/elements"],
  modules: [
    "@nuxt/content",
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "@vueuse/nuxt",
    "@nuxt-themes/tokens",
    "pinceau/nuxt",
  ],
  components: [
    { path: "~/components", global: true },
    { path: "~/components/content", global: true },
  ],
  css: ["~/assets/main.css"],
  pages: true,
  colorMode: {
    classSuffix: "",
  },
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
  typescript: { includeWorkspace: true },
  content: {
    documentDriven: true,
    navigation: {
      fields: ["navTitle"],
    },
    locales: ["en"],
    highlight: {
      theme: {
        default: "github-light",
        dark: "github-dark",
      },
      preload: [
        "json",
        "js",
        "ts",
        "html",
        "css",
        "vue",
        "diff",
        "shell",
        "markdown",
        "yaml",
        "bash",
        "ini",
        "c",
        "cpp",
      ],
    },
  },
});
