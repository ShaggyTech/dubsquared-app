<script setup lang="ts">
export type Type = 'checkbox' | 'radio' | 'switch'

export interface Props {
  name: string
  options?: Record<string, any>
  type?: Type
  componentClass?: string
  isColumn?: boolean
  modelValue?: Array<any> | string | number | boolean
}

const props = withDefaults(defineProps<Props>(), {
  options: () => ({}),
  name: undefined,
  type: 'checkbox',
  componentClass: undefined,
  isColumn: false,
  modelValue: undefined,
})

const emit = defineEmits(['update:modelValue'])

const computedValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value)
  },
})
</script>

<script lang="ts">
export default { name: 'FormCheckRadioGroup' }
</script>

<template>
  <div
    class="flex flex-wrap justify-start -mb-3"
    :class="{ 'flex-col': isColumn }"
  >
    <FormCheckRadio
      v-for="(value, key) in options"
      :key="key"
      v-model="computedValue"
      :type="type"
      :name="name"
      :input-value="key"
      :label="value"
      :class="componentClass"
      class="mb-3 mr-6 last:mr-0"
    />
  </div>
</template>
