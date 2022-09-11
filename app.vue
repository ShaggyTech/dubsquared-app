<script setup lang="ts">
import { useStyleStore } from '~/stores/style'
import { darkModeKey, styleKey } from '~/data/config'

useHead({
  titleTemplate: (titleChunk) => {
    const titleBase = 'Admin One Vue 3 Tailwind'
    return titleChunk ? `${titleChunk} - ${titleBase}` : titleBase
  },
})

const { setDarkMode, setStyle } = useStyleStore()

const currentStyle =
  typeof localStorage !== 'undefined' && localStorage[styleKey]
    ? localStorage[styleKey]
    : 'basic'

setStyle(currentStyle)

const currentStoredDarkMode =
  typeof localStorage !== 'undefined' && localStorage[darkModeKey] === '1'

if (
  (!currentStoredDarkMode &&
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches) ||
  currentStoredDarkMode
) {
  setDarkMode(true)
}
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
