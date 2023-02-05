import { defineTheme } from "pinceau";

export default defineTheme({
  elements: {
    container: {
      maxWidth: "{size.5xl}",
      padding: {
        mobile: "{space.6}",
        xs: "{space.8}",
        sm: "{space.12}",
        md: "{space.16}",
      },
    },
  },
  color: {
    white: "#FFFFFF",
    primary: {
      50: "#fffbeb",
      100: "#fef3c7",
      200: "#fde68a",
      300: "#fcd34d",
      400: "#fbbf24",
      500: "#f59e0b",
      600: "#d97706",
      700: "#b45309",
      800: "#92400e",
      900: "#78350f",
    },
  },
  font: {
    sans: "Source Sans Pro, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
  },
  prose: {
    p: {
      fontSize: "18px",
    },
    code: {
      block: {
        backgroundColor: {
          light: "{color.white}",
          dark: "transparent",
        },
        borderColor: {
          light: "{color.gray.200}",
          dark: "{color.gray.800}",
        },
      },
    },
  },
});
