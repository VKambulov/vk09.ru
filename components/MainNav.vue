<script lang="ts" setup>
const { navigation } = useContent()

const emits = defineEmits(['linkClick'])

function handleClick() {
  emits('linkClick')
}
</script>

<template>
  <nav>
    <ul>
      <li
        v-for="link of navigation"
        :key="link._path"
      >
        <NuxtLink
          :to="link._path"
          @click="handleClick"
        >
          {{ link.title }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="ts">
css({
  nav: {
    ul: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      justifyContent: 'center',
      gap: '{space.4}',
      '@sm': {
        flexDirection: 'row',
        gap: '{space.8}',
      },
      a: {
        position: 'relative',
        transition: 'all',
        transitionDuration: '250ms',
        '&:hover': {
          color: '{color.primary.500}'
        },
        '&.router-link-active': {
          color: '{color.primary.500}'
        }
      }
    }
  }
})
</style>
