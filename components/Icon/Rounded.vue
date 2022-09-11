<script setup lang="ts">
import type { Colors } from '~/types'

export interface Props {
  icon: string
  color?: Colors
  w?: string
  h?: string
  bg?: boolean
}

withDefaults(defineProps<Props>(), {
  icon: undefined,
  color: 'white',
  w: 'w-12',
  h: 'h-12',
  bg: false,
})

const { colorsText, colorsBgLight } = useColors()
</script>

<script lang="ts">
export default { name: 'IconRounded' }
</script>

<template>
  <BaseIcon
    :path="icon"
    :w="w"
    :h="h"
    size="24"
    class="rounded-full"
    :class="
      bg
        ? colorsBgLight[color]
        : [colorsText[color], 'bg-gray-50 dark:bg-slate-800']
    "
  />
</template>
