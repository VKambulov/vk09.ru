<script setup lang="ts">
defineProps({
  image: {
    type: String,
    default: null,
  },
  imageDark: {
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
      <template v-if="image && imageDark">
        <NuxtImg
          class="light-img"
          :class="imageClasses"
          :src="image"
          :alt="imageAlt"
        />
        <NuxtImg
          class="dark-img"
          :class="imageClasses"
          :src="imageDark"
          :alt="imageAlt"
        />
      </template>
      <NuxtImg
        v-else-if="image"
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
        '&.light-img': {
          '@md': {
            display: 'block',
          },
        },
        '&.dark-img': {
          display: 'none',
        },
        '@dark': {
          '&.dark-img': {
            '@md': {
              display: 'block',
            },
          },
          '&.light-img': {
            display: 'none',
          },
        },
        '@md': {
          width: '40%',
        },
        '@lg': {
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
