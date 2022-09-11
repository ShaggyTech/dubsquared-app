<script setup lang="ts">
export type Type = 'checkbox' | 'radio' | 'switch'

export interface Props {
  name: string
  inputValue: string | number | boolean
  type?: Type
  label?: string
  modelValue?: Array<any> | string | number | boolean
}
const props = withDefaults(defineProps<Props>(), {
  name: undefined,
  type: 'checkbox',
  label: undefined,
  modelValue: undefined,
  inputValue: undefined,
})

const emit = defineEmits(['update:modelValue'])

const computedValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value)
  },
})

const inputType = computed(() =>
  props.type === 'radio' ? 'radio' : 'checkbox'
)
</script>

<script lang="ts">
export default { name: 'FormCheckRadio' }
</script>

<template>
  <label :class="type">
    <input
      v-model="computedValue"
      :type="inputType"
      :name="name"
      :value="inputValue"
    />
    <span class="check" />
    <span class="pl-2">{{ label }}</span>
  </label>
</template>
