<script setup lang="ts">
import type { Colors } from '~/types'

export interface Props {
  color: Colors
}

defineProps<Props>()

const { colorsBgLight } = useColors()
</script>

<script lang="ts">
export default { name: 'NotificationBarInCard' }
</script>

<template>
  <div class="flex flex-col mb-6 -mt-6 -ml-6 -mr-6 animate-fade-in">
    <div
      :class="[colorsBgLight[color]]"
      class="flex flex-col p-6 transition-colors rounded-t-2xl"
    >
      <slot />
    </div>
  </div>
</template>
