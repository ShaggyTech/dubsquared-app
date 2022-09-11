<script setup lang="ts">
import { mdiClose } from '@mdi/js'

import type { ButtonVariant } from '~/types'

export interface Props {
  title: string
  button?: ButtonVariant
  buttonLabel?: string
  modelValue?: string | number | boolean
  hasCancel?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: undefined,
  button: 'info',
  buttonLabel: 'Done',
  modelValue: undefined,
  hasCancel: false,
})

const emit = defineEmits(['update:modelValue', 'cancel', 'confirm'])

const value = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})

const confirmCancel = (mode: 'update:modelValue' | 'cancel' | 'confirm') => {
  value.value = false
  emit(mode)
}

const confirm = () => confirmCancel('confirm')

const cancel = () => confirmCancel('cancel')

onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && value.value) {
      cancel()
    }
  })
})
</script>

<script lang="ts">
export default { name: 'CardBoxModal' }
</script>

<template>
  <OverlayLayer v-show="value" @overlay-click="cancel">
    <CardBox
      v-show="value"
      class="z-50 w-11/12 shadow-lg max-h-modal md:w-3/5 lg:w-2/5 xl:w-4/12"
      is-modal
    >
      <CardBoxComponentTitle :title="(title as string)">
        <BaseButton
          v-if="hasCancel"
          :icon="mdiClose"
          color="whiteDark"
          small
          rounded-full
          @click.prevent="cancel"
        />
      </CardBoxComponentTitle>

      <div class="space-y-3">
        <slot />
      </div>

      <template #footer>
        <BaseButtons>
          <BaseButton :label="buttonLabel" :color="button" @click="confirm" />
          <BaseButton
            v-if="hasCancel"
            label="Cancel"
            :color="button"
            outline
            @click="cancel"
          />
        </BaseButtons>
      </template>
    </CardBox>
  </OverlayLayer>
</template>
