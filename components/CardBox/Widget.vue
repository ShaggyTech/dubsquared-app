<script setup lang="ts">
import { mdiCog } from '@mdi/js'
import type { Colors, TrendType } from '~/types'

export interface Props {
  number?: number
  icon?: string
  prefix?: string
  suffix?: string
  label?: string
  color?: Colors
  trend?: string
  trendType?: TrendType
}

withDefaults(defineProps<Props>(), {
  number: 0,
  icon: undefined,
  prefix: undefined,
  suffix: undefined,
  label: undefined,
  color: undefined,
  trend: undefined,
  trendType: undefined,
})
</script>

<script lang="ts">
export default { name: 'CardBoxWidget' }
</script>

<template>
  <CardBox>
    <BaseLevel v-if="trend" class="mb-3" mobile>
      <PillTagTrend :trend="trend" :trend-type="trendType" small />
      <BaseButton
        :icon="mdiCog"
        icon-w="w-4"
        icon-h="h-4"
        color="lightDark"
        small
      />
    </BaseLevel>
    <BaseLevel mobile>
      <div>
        <h3 class="text-lg leading-tight text-gray-500 dark:text-slate-400">
          {{ label }}
        </h3>
        <h1 class="text-3xl font-semibold leading-tight">
          <NumberDynamic :value="number" :prefix="prefix" :suffix="suffix" />
        </h1>
      </div>
      <BaseIcon
        v-if="icon"
        :path="icon"
        size="48"
        w=""
        h="h-16"
        :class="color"
      />
    </BaseLevel>
  </CardBox>
</template>
