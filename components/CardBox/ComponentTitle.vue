<script setup lang="ts">
export interface Props {
  title: string
}
defineProps<Props>()
</script>

<script lang="ts">
export default { name: 'CardBoxComponentTitle' }
</script>

<template>
  <div class="flex items-center justify-between mb-3">
    <h1 class="text-2xl">
      {{ title }}
    </h1>
    <slot />
  </div>
</template>
