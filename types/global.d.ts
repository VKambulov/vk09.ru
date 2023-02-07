import { VueUseNuxtOptions } from "@vueuse/nuxt";
import { ModuleOptions as ColorModeModuleOptions } from "@nuxtjs/color-mode";
import { ModuleOptions as NuxtContentModuleOptions } from "@nuxt/content";

declare module "nuxt/config" {
  interface NuxtConfig {
    colorMode?: Partial<ColorModeModuleOptions>;
    vueuse?: VueUseNuxtOptions;
    content?: Partial<NuxtContentModuleOptions>;
  }
}

export {};
