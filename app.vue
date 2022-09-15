<script setup lang="ts">
import { useThemeStore } from '~/stores/theme'
import { useStyleStore } from '~/stores/style'
import { styleKey } from '~/data/config'

useHead({
  titleTemplate: (titleChunk) => {
    const titleBase = 'Admin One Vue 3 Tailwind'
    return titleChunk ? `${titleChunk} - ${titleBase}` : titleBase
  },
})

const { currentTheme } = storeToRefs(useThemeStore())
const { setStyle } = useStyleStore()

const currentStyle =
  typeof localStorage !== 'undefined' && localStorage[styleKey]
    ? localStorage[styleKey]
    : 'basic'

setStyle(currentStyle)
</script>

<template>
  <Html :class="`${currentTheme === 'dark' ? 'dark' : ''}`" lang="en">
    <Head>
      <Meta
        name="viewport"
        content="width=device-width, initial-scale=1 viewport-fit=cover"
      />
      <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <Link rel="preconnect" href="https://fonts.googleapis.com" crossorigin />
      <Link rel="preconnect" href="https://res.cloudinary.com" crossorigin />
      <Link rel="icon" type="image/png" href="/favicon.png" />
    </Head>
    <Body
      class="antialiased transition-colors duration-300 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-nunito"
    >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
