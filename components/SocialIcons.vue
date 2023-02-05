<script setup lang="ts">
import { PropType } from "vue";

const props = defineProps({
  socials: {
    type: Array as PropType<
      {
        href: string;
        icon: string;
        label: string;
      }[]
    >,
    default: () => [],
  },
});
</script>

<template>
  <!-- eslint-disable-next-line vue/no-multiple-template-root -->
  <NuxtLink
    v-for="icon in props.socials"
    :key="icon.label"
    rel="noopener noreferrer"
    :title="icon.label"
    :aria-label="icon.label"
    :href="icon.href"
    target="_blank"
  >
    <Icon v-if="icon.icon" :name="icon.icon" />
  </NuxtLink>
</template>

<style scoped lang="ts">
css({
  a: {
    '--social-icon-size': '24px',
    width: 'var(--social-icon-size)',
    height: 'var(--social-icon-size)',
    display: 'flex',
    transition: 'all',
    transitionDuration: '250ms',
    '&:hover': {
      color: '{color.primary.500}',
    },
    svg: {
      width: '100%',
      height: '100%',
    }
  }
})
</style>
