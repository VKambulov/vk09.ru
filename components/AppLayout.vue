<script setup lang="ts">
const app = useAppConfig().app;

defineProps({
  padded: {
    type: Boolean,
    default: true,
  },
});

useHead({
  meta: [{ name: "twitter:card", content: "summary_large_image" }],
});

useContentHead(app as any);
</script>

<template>
  <Container class="app-layout">
    <AppLoadingBar />
    <AppHeader v-if="app.header" />
    <slot />
    <AppFooter v-if="app.footer" />
  </Container>
</template>

<style lang="ts" scoped>
css({
  '.app-layout': {
    minWidth: '{size.xs}'
  }
})
</style>
