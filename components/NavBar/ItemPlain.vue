<script setup lang="ts">
import { useStyleStore } from '~/stores/style'

// Props and Emits
export interface Props {
  display?: string
  useMargin?: boolean
}
withDefaults(defineProps<Props>(), {
  display: 'flex',
  useMargin: false,
})

// Stores
const { navBarItemLabelHoverStyle, navBarItemLabelStyle } = storeToRefs(
  useStyleStore()
)
</script>

<script lang="ts">
export default { name: 'NavBarItemPlain' }
</script>

<template>
  <div
    :class="[
      display,
      navBarItemLabelStyle,
      navBarItemLabelHoverStyle,
      useMargin ? 'my-2 mx-3' : 'py-2 px-3',
    ]"
    class="items-center cursor-pointer dark:text-white dark:hover:text-slate-400"
  >
    <slot />
  </div>
</template>
