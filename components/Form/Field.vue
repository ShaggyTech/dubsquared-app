<script setup lang="ts">
export interface Props {
  label?: string
  labelFor?: string
  help?: string
}

withDefaults(defineProps<Props>(), {
  label: undefined,
  labelFor: undefined,
  help: undefined,
})

const slots = useSlots()

const wrapperClass = computed(() => {
  const base = []
  const slotsLength = slots.default!().length

  if (slotsLength > 1) {
    base.push('grid grid-cols-1 gap-3')
  }

  if (slotsLength === 2) {
    base.push('md:grid-cols-2')
  }

  return base
})
</script>

<script lang="ts">
export default { name: 'FormField' }
</script>

<template>
  <div class="mb-6 last:mb-0">
    <label v-if="label" :for="labelFor" class="block mb-2 font-bold">{{
      label
    }}</label>
    <div :class="wrapperClass">
      <slot />
    </div>
    <div v-if="help" class="mt-1 text-xs text-gray-500 dark:text-slate-400">
      {{ help }}
    </div>
  </div>
</template>
