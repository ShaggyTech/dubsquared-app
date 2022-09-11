<script setup lang="ts">
import type { ButtonVariant } from '~/types'

type Props = {
  label?: string | number
  icon?: string
  iconSize?: string
  href?: string
  target?: string
  to?: string | object
  type?: string
  color?: ButtonVariant
  as?: string
  small?: boolean
  outline?: boolean
  active?: boolean
  disabled?: boolean
  roundedFull?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  label: undefined,
  icon: undefined,
  iconSize: undefined,
  href: undefined,
  target: undefined,
  to: undefined,
  type: undefined,
  color: 'white',
  as: undefined,
  small: false,
  outline: false,
  active: false,
  disabled: false,
  roundedFull: false,
})

const NuxtLink = resolveComponent('NuxtLink')

const { getButtonColor } = useColors()

const is = computed(() => {
  if (props.as) {
    return props.as
  }
  if (props.to) {
    return NuxtLink
  }
  if (props.href) {
    return 'a'
  }

  return 'button'
})

const computedType = computed(() => {
  if (is.value === 'button') {
    return props.type ?? 'button'
  }

  return null
})

const labelClass = computed(() => (props.small && props.icon ? 'px-1' : 'px-2'))

const componentClass = computed(() => {
  const base = [
    'inline-flex',
    'cursor-pointer',
    'justify-center',
    'items-center',
    'whitespace-nowrap',
    'focus:outline-none',
    'transition-colors',
    'focus:ring',
    'duration-150',
    'border',
    props.roundedFull ? 'rounded-full' : 'rounded',
    getButtonColor({
      color: props.color,
      isOutlined: props.outline,
      hasHover: !props.disabled,
      isActive: props.active,
    }),
  ]

  if (!props.label && props.icon) {
    base.push('p-1')
  } else if (props.small) {
    base.push('text-sm', props.roundedFull ? 'px-3 py-1' : 'p-1')
  } else {
    base.push('py-2', props.roundedFull ? 'px-6' : 'px-3')
  }

  if (props.disabled) {
    base.push('cursor-not-allowed', props.outline ? 'opacity-50' : 'opacity-70')
  }

  return base
})
</script>

<script lang="ts">
export default { name: 'BaseButton' }
</script>

<template>
  <component
    :is="is"
    :class="componentClass"
    :to="to ? to : undefined"
    :href="!to ? href : undefined"
    :type="computedType"
    :target="target"
    :disabled="disabled"
  >
    <BaseIcon v-if="icon" :path="icon" :size="iconSize" />
    <span v-if="label" :class="labelClass">{{ label }}</span>
  </component>
</template>
