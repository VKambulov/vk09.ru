<script setup lang="ts">
defineProps({
  image: {
    type: String,
    default: null,
  },
  imageAlt: {
    type: String,
    default: "Hero Image",
  },
  imageClasses: {
    type: String,
    default: "right",
  },
});
</script>

<template>
  <section class="hero">
    <div class="layout">
      <div class="content">
        <div class="title">
          <ContentSlot :use="$slots.title" unwrap="p"> Hero title </ContentSlot>
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
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '{space.8}',
      '.title': {
        fontSize: '{text.5xl.fontSize}',
        lineHeight: '{text.5xl.lineHeight}',
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
        display: 'none',
        '@md': {
          display: 'block',
          width: '40%',
        },
        '@lg': {
          display: 'block',
          width: '50%',
        },
        '&.left': {
          order: -1
        }
      },
    }
  }
})
</style>
