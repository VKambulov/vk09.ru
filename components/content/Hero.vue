<script setup lang="ts">
defineProps({
  image: {
    type: String,
    default: null
  },
  imageAlt: {
    type: String,
    default: 'Hero Image'
  },
  imageClasses: {
    type: String,
    default: 'right'
  }
})
</script>

<template>
  <section class="hero">
    <div class="layout">
      <div class="content">
        <div class="title">
          <ContentSlot :use="$slots.title" unwrap="p">
            Hero title
          </ContentSlot>
        </div>
        <div class="subtitle">
          <ContentSlot :use="$slots.subtitle" unwrap="p">
            Hero subtitle
          </ContentSlot>
        </div>
        <div class="description">
          <ContentSlot :use="$slots.description" unwrap="p">
            Hero description
          </ContentSlot>
        </div>
      </div>
      <NuxtImg
        v-if="image"
        :class="imageClasses"
        :src="image"
        :alt="imageAlt"
      />
    </div>
  </section>
</template>

<style scoped lang="ts">
css({
  '.hero': {
    marginBottom: '{space.10}',
    '.layout': {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
      gap: '{space.8}',
      '@lg': {
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      },
      '.title': {
        fontSize: '{text.4xl.fontSize}',
        lineHeight: '{text.4xl.lineHeight}',
        fontWeight: '{fontWeight.bold}',
      },
      '.subtitle': {
        fontSize: '{text.3xl.fontSize}',
        lineHeight: '{text.3xl.lineHeight}',
        fontWeight: '{fontWeight.bold}',
      },
      '.description': {
        marginTop: '{space.3}',
        fontSize: '{text.xl.fontSize}',
        lineHeight: '{text.xl.lineHeight}',
      },
      img: {
        marginLeft: 'auto',
        width: '75%',
        aspectRatio: '1 / 1',
        objectFit: 'cover',
        borderRadius: '{radii.full}',
        '&.left': {
          order: -1
        }
      },
    }
  }
})
</style>
