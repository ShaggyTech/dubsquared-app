<script setup lang="ts">
export interface Props {
  noPadding?: boolean
}
withDefaults(defineProps<Props>(), {
  noPadding: false,
})
</script>

<script lang="ts">
export default { name: 'CardBoxComponentBody' }
</script>

<template>
  <div class="flex-1" :class="{ 'p-6': !noPadding }">
    <slot />
  </div>
</template>
