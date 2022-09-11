<script setup lang="ts">
import numeral from 'numeral'

export interface Props {
  prefix?: string
  suffix?: string
  value?: number
  duration?: number
}

const props = withDefaults(defineProps<Props>(), {
  prefix: undefined,
  suffix: undefined,
  value: 0,
  duration: 500,
})

const newValue = ref(0)

const newValueFormatted = computed(() =>
  newValue.value < 1000 ? newValue.value : numeral(newValue.value).format('0,0')
)

const value = computed(() => props.value)

const grow = (amount: number) => {
  const v = Math.ceil(newValue.value + amount)

  if (v > value.value) {
    newValue.value = value.value
    return false
  }

  newValue.value = v

  setTimeout(() => {
    grow(amount)
  }, 25)
}

const growInit = () => {
  newValue.value = 0
  grow(props.value / (props.duration / 25))
}

watch(value, () => {
  growInit()
})

onMounted(() => {
  growInit()
})
</script>

<script lang="ts">
export default { name: 'NumberDynamic' }
</script>

<template>
  <div>{{ prefix }}{{ newValueFormatted }}{{ suffix }}</div>
</template>
