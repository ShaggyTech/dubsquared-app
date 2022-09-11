<script setup lang="ts">
import { containerMaxW } from '~/data/config'
</script>

<script lang="ts">
export default { name: 'SectionMain' }
</script>

<template>
  <section class="p-6" :class="containerMaxW">
    <slot />
  </section>
</template>
