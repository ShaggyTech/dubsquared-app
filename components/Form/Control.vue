<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { useMainStore } from '~/stores/main'

// Props and Emits
export interface Props {
  name?: string
  id?: string
  autocomplete?: string
  placeholder?: string
  inputmode?: HTMLAttributes['inputmode']
  icon?: string
  options?: Record<string, any>
  type?: string
  modelValue?: string | number | string[] | undefined
  required?: boolean
  borderless?: boolean
  transparent?: boolean
  ctrlKFocus?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  name: undefined,
  id: undefined,
  autocomplete: undefined,
  placeholder: undefined,
  inputmode: undefined,
  icon: undefined,
  options: undefined,
  type: 'text',
  modelValue: '',
  required: false,
  borderless: false,
  transparent: false,
  ctrlKFocus: false,
})
const emit = defineEmits(['update:modelValue', 'setRef'])

// Stores
const mainStore = useMainStore()
const { isFieldFocusRegistered } = storeToRefs(mainStore)

// Data
const selectEl = ref<HTMLSelectElement>()
const textareaEl = ref<HTMLTextAreaElement>()
const inputEl = ref<HTMLInputElement>()

// Computed
const computedValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value)
  },
})

const inputElClass = computed(() => {
  const base = [
    'px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full',
    'dark:placeholder-gray-400',
    computedType.value === 'textarea' ? 'h-24' : 'h-12',
    props.borderless ? 'border-0' : 'border',
    props.transparent ? 'bg-transparent' : 'bg-white dark:bg-slate-800',
  ]

  if (props.icon) {
    base.push('pl-10')
  }

  return base
})

const computedType = computed(() => (props.options ? 'select' : props.type))

const controlIconH = computed(() =>
  props.type === 'textarea' ? 'h-full' : 'h-12'
)

// Lifecycle
onMounted(() => {
  if (selectEl.value) {
    emit('setRef', selectEl.value)
  } else if (textareaEl.value) {
    emit('setRef', textareaEl.value)
  } else {
    emit('setRef', inputEl.value)
  }
})

if (props.ctrlKFocus) {
  const fieldFocusHook = (e: KeyboardEvent) => {
    if (inputEl.value) {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault()
        inputEl.value.focus()
      } else if (e.key === 'Escape') {
        inputEl.value.blur()
      }
    }
  }

  onMounted(() => {
    if (!isFieldFocusRegistered.value) {
      window.addEventListener('keydown', fieldFocusHook)
      isFieldFocusRegistered.value = true
    } else {
      // console.error('Duplicate field focus event')
    }
  })

  onBeforeUnmount(() => {
    window.removeEventListener('keydown', fieldFocusHook)
    isFieldFocusRegistered.value = false
  })
}
</script>

<script lang="ts">
export default { name: 'FormControl' }
</script>

<template>
  <div class="relative">
    <select
      v-if="computedType === 'select'"
      :id="id"
      ref="selectEl"
      v-model="computedValue"
      :name="name"
      :class="inputElClass"
    >
      <option
        v-for="option in options"
        :key="option.id ?? option"
        :value="option"
      >
        {{ option.label ?? option }}
      </option>
    </select>
    <textarea
      v-else-if="computedType === 'textarea'"
      :id="id"
      ref="textareaEl"
      v-model="computedValue"
      :class="inputElClass"
      :name="name"
      :placeholder="placeholder"
      :required="required"
    />
    <input
      v-else
      :id="id"
      ref="inputEl"
      v-model="computedValue"
      :name="name"
      :inputmode="inputmode"
      :autocomplete="autocomplete"
      :required="required"
      :placeholder="placeholder"
      :type="computedType"
      :class="inputElClass"
    />
    <FormControlIcon v-if="icon" :icon="icon" :h="controlIconH" />
  </div>
</template>
