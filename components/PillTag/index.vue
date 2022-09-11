<script setup lang="ts">
import type { Colors } from '~/types'

export interface Props {
  label: string
  color: Colors
  icon?: string
  small?: boolean
  outline?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  label: undefined,
  color: undefined,
  icon: undefined,
  small: false,
  outline: false,
})

const { colorsBgLight, colorsOutline } = useColors()

const componentClass = computed(() => [
  props.small ? 'py-1 px-3' : 'py-1.5 px-4',
  props.outline ? colorsOutline[props.color] : colorsBgLight[props.color],
])
</script>

<script lang="ts">
export default { name: 'PillTag' }
</script>

<template>
  <PillTagPlain
    class="border rounded-full"
    :class="componentClass"
    :icon="icon"
    :label="(label as string)"
    :small="small"
  />
</template>
