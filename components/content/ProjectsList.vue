<script setup lang="ts">
import { withTrailingSlash } from 'ufo'

const props = defineProps({
  path: {
    type: String,
    default: 'projects'
  }
})

// @ts-ignore
const { data: _projects } = await useAsyncData('projects', async () => await queryContent(withTrailingSlash(props.path)).sort({ date: -1 }).find())

const projects = computed(() => _projects.value || [])
</script>

<template>
  <div v-if="projects?.length" class="projects-list">
    <div class="featured">
      <ProjectsListItem :article="projects[0]" :featured="true" />
    </div>
    <div class="layout">
      <ProjectsListItem v-for="(article, index) in projects.slice(1)" :key="index" :article="article" />
    </div>
  </div>
  <div v-else class="tour">
    <p>Seems like there are no projects yet.</p>
  </div>
</template>

<style scoped lang="ts">
css({
  '.projects-list': {
    '@sm': {
      px: '{space.12}',
    },
    '@md': {
      px: 0,
    },
    '.featured': {
      my: '{space.12}',
      '@md': {
        my: '{space.8}',
      }
    },
    '.layout': {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
      gap: '{space.12}',
      '@md': {
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        gap: '{space.8}',
      },
      '@lg': {
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
      },
    }
  },
  '.tour': {
    minHeight: '30vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
</style>
