<script setup lang="ts">
export interface Props {
  icon?: string
  h?: string
}
withDefaults(defineProps<Props>(), {
  icon: undefined,
  h: undefined,
})
</script>

<script lang="ts">
export default { name: 'FormControlIcon' }
</script>

<template>
  <BaseIcon
    :path="icon"
    w="w-10"
    :h="h"
    class="absolute top-0 left-0 z-10 text-gray-500 pointer-events-none dark:text-slate-400"
  />
</template>
