<script setup lang="ts">
import {
  mdiCashMinus,
  mdiCashPlus,
  mdiReceipt,
  mdiCreditCardOutline,
} from '@mdi/js'

import type { Colors, DataTransactionType } from '~/types'

export interface Props {
  amount: number
  date: string
  business: string
  type: DataTransactionType
  name: string
}

const props = defineProps<Props>()

const icon = computed(() => {
  if (props.type === 'withdrawal') {
    return {
      icon: mdiCashMinus,
      type: 'danger',
    }
  } else if (props.type === 'deposit') {
    return {
      icon: mdiCashPlus,
      type: 'success',
    }
  } else if (props.type === 'invoice') {
    return {
      icon: mdiReceipt,
      type: 'warning',
    }
  }

  return {
    icon: mdiCreditCardOutline,
    type: 'info',
  }
})
</script>

<script lang="ts">
export default { name: 'CardBoxTransaction' }
</script>

<template>
  <CardBox class="mb-6 last:mb-0" is-hoverable>
    <BaseLevel>
      <BaseLevel type="justify-start">
        <IconRounded
          :icon="icon.icon"
          :color="(icon.type as Colors)"
          class="md:mr-6"
        />
        <div class="space-y-1 text-center md:text-left md:mr-6">
          <h4 class="text-xl">${{ amount }}</h4>
          <p class="text-gray-500 dark:text-slate-400">
            <b>{{ date }}</b> via {{ business }}
          </p>
        </div>
      </BaseLevel>
      <div class="space-y-2 text-center md:text-right">
        <p class="text-sm text-gray-500">
          {{ name }}
        </p>
        <div>
          <PillTag :color="(icon.type as Colors)" :label="type" small />
        </div>
      </div>
    </BaseLevel>
  </CardBox>
</template>
