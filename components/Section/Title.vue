<script setup lang="ts">
export interface Props {
  custom?: boolean
  first?: boolean
  last?: boolean
}
withDefaults(defineProps<Props>(), {
  custom: false,
  first: false,
  last: false,
})
</script>

<script lang="ts">
export default { name: 'SectionTitle' }
</script>

<template>
  <section
    class="px-6 py-24 text-center lg:px-0 lg:max-w-2xl lg:mx-auto"
    :class="{ '-mb-6': first, '-mt-6': last, '-my-6': !first && !last }"
  >
    <slot v-if="custom" />
    <h1 v-else class="text-2xl text-gray-500 dark:text-slate-400">
      <slot />
    </h1>
  </section>
</template>
