<script setup lang="ts">
import {
  mdiInformation,
  mdiTrendingDown,
  mdiTrendingUp,
  mdiTrendingNeutral,
} from '@mdi/js'
import type { Colors } from '~/types'

// Props and Emits
export interface Props {
  name: string
  login: string
  date: string
  progress?: number
  text?: string
  type?: Colors
}
const props = withDefaults(defineProps<Props>(), {
  name: undefined,
  login: undefined,
  date: undefined,
  progress: 0,
  text: undefined,
  type: undefined,
})

// Computed
const pillType = computed<Colors>(() => {
  if (props.type) {
    return props.type
  }

  if (props.progress) {
    if (props.progress >= 60) {
      return 'success'
    }
    if (props.progress >= 40) {
      return 'warning'
    }

    return 'danger'
  }

  return 'info'
})

const pillIcon = computed(() => {
  return {
    success: mdiTrendingUp,
    warning: mdiTrendingNeutral,
    danger: mdiTrendingDown,
    info: mdiInformation,
    white: mdiInformation,
    light: mdiInformation,
    contrast: mdiInformation,
  }[pillType.value]
})

const pillText = computed(() => props.text ?? `${props.progress}%`)
</script>

<script lang="ts">
export default { name: 'CardBoxClient' }
</script>

<template>
  <CardBox class="mb-6 last:mb-0" is-hoverable>
    <BaseLevel>
      <BaseLevel type="justify-start">
        <UserAvatar class="w-12 h-12 mr-6" :user-name="(name as string)" />
        <div class="overflow-hidden text-center md:text-left">
          <h4 class="text-xl text-ellipsis">
            {{ name }}
          </h4>
          <p class="text-gray-500 dark:text-slate-400">
            {{ date }} @ {{ login }}
          </p>
        </div>
      </BaseLevel>
      <PillTag :color="pillType" :label="pillText" :icon="pillIcon" />
    </BaseLevel>
  </CardBox>
</template>
