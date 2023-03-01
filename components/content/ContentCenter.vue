<template>
  <div class="text-center">
    <ContentSlot :use="$slots.content" unwrap="p"> Text </ContentSlot>
  </div>
</template>

<style lang="ts">
css({
  '.text-center': {
    textAlign: 'center',
    my: '{space.16}',
  }
})
</style>
