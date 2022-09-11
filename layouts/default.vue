<script setup lang="ts">
import { useStyleStore } from '~/stores/style'

const { darkMode } = storeToRefs(useStyleStore())
</script>

<template>
  <div :class="{ dark: darkMode }">
    <div class="bg-gray-50 dark:bg-slate-800 dark:text-slate-100">
      <slot />
    </div>
  </div>
</template>
