<script setup lang="ts">
export interface Props {
  type?: string
}

withDefaults(defineProps<Props>(), {
  type: 'td',
})

const emit = defineEmits(['checked'])

const checked = ref(false)

watch(checked, (newVal) => {
  emit('checked', newVal)
})
</script>

<script lang="ts">
export default { name: 'TableCheckboxCell' }
</script>

<template>
  <component :is="type" class="lg:w-1">
    <label class="checkbox">
      <input v-model="checked" type="checkbox" />
      <span class="check" />
    </label>
  </component>
</template>
