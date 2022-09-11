<script setup lang="ts">
import { useStyleStore } from '~/stores/style'

// Props and Emits
export interface Props {
  bg: 'purplePink' | 'pinkRed'
}
const props = defineProps<Props>()

// Stores
const { darkMode } = storeToRefs(useStyleStore())

// Data
const { gradientBgPurplePink, gradientBgDark, gradientBgPinkRed } = useColors()

// Computed
const colorClass = computed(() => {
  if (darkMode) {
    return gradientBgDark
  }

  switch (props.bg) {
    case 'purplePink':
      return gradientBgPurplePink
    case 'pinkRed':
      return gradientBgPinkRed
    default:
      break
  }

  return ''
})
</script>

<script lang="ts">
export default { name: 'SectionFullScreen' }
</script>

<template>
  <div
    class="flex items-center justify-center min-h-screen"
    :class="colorClass"
  >
    <slot card-class="w-11/12 shadow-2xl md:w-7/12 lg:w-6/12 xl:w-4/12" />
  </div>
</template>
