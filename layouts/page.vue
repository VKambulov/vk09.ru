<template>
  <main>
    <slot />
  </main>
</template>

<style scoped lang="ts">
css({
  main: {
    py: '{space.4}',
    '@sm': {
      py: '{space.8}',
    }
  }
})
</style>