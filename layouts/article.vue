<template>
  <article>
    <NuxtLink :to="parentPath" class="back">
      <Icon name="ph:arrow-left" />
      <span> Back </span>
    </NuxtLink>
    <header>
      <h1 v-if="page?.title" class="title">
        {{ page.title }}
      </h1>
      <time
        v-if="page?.date"
        :datetime="page.date"
      >
        {{ formatDate(page.date) }}
      </time>
    </header>

    <div class="prose">
      <slot />
    </div>
  </article>
</template>

<script setup lang="ts">
const { page } = useContent();
const route = useRoute();

const parentPath = computed(() => {
  const pathTabl = route.path.split("/");
  pathTabl.pop();
  return pathTabl.join("/");
});
</script>

<style scoped lang="ts">
css({
  article: {
    maxWidth: '{size.3xl}',
    mx: 'auto',
    py: '{space.4}',
    '@sm': {
      py: '{space.8}',
    },
    '.back': {
      display: 'inline-flex',
      alignItems: 'center',
      fontSize: '{text.lg.fontSize}',
      transition: 'all',
      transitionDuration: '250ms',
      '&:hover': {
        color: '{color.primary.500}',
      },
      '& :deep(svg)': {
        width: '{size.16}',
        height: '{size.16}',
        marginRight: '{space.2}'
      }
    },
    header: {
      marginTop: '{space.8}',
      marginBottom: '{space.12}',
    },
    '.title': {
      fontSize: '{text.5xl.fontSize}',
      lineHeight: '{text.5xl.lineHeight}',
      fontWeight: '{fontWeight.semibold}',
      marginBottom: '{space.4}'
    },
    time: {
      color: '{elements.color.text.secondary.default}'
    },
    '.prose': {
      '& :deep(h1)': {
        display: 'none'
      }
    }
  }
})
</style>
