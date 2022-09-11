<script setup lang="ts">
import { mdiChevronUp, mdiChevronDown, mdiAlertCircleOutline } from '@mdi/js'
import type { Colors } from '~/types'

export interface TrendStyle {
  style: Colors
  icon?: string
}
export interface Props {
  trend: string
  trendType?: 'info' | 'up' | 'down' | 'alert'
  small?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  trend: undefined,
  trendType: undefined,
  small: false,
})

const trendStyle = computed<TrendStyle>(() => {
  if (props.trendType === 'up') {
    return {
      style: 'success',
      icon: mdiChevronUp,
    }
  }

  if (props.trendType === 'down') {
    return {
      style: 'danger',
      icon: mdiChevronDown,
    }
  }

  if (props.trendType === 'alert') {
    return {
      style: 'warning',
      icon: mdiAlertCircleOutline,
    }
  }

  return {
    style: 'info',
  }
})
</script>

<script lang="ts">
export default { name: 'PillTagTrend' }
</script>

<template>
  <PillTag
    :label="trend"
    :color="trendStyle.style"
    :icon="trendStyle.icon"
    :small="small"
  />
</template>
