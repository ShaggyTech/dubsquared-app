<script setup lang="ts">
import { mdiClose } from '@mdi/js'
import type { Colors } from '~/types'

export interface Props {
  color: Colors
  icon?: string
  outline?: boolean
}

const props = defineProps<Props>()

const { colorsBgLight, colorsOutline } = useColors()

const componentClass = computed(() =>
  props.outline ? colorsOutline[props.color] : colorsBgLight[props.color]
)

const isDismissed = ref(false)
const dismiss = () => {
  isDismissed.value = true
}

const hasRightSlot = computed(() => useSlots().right)
</script>

<script lang="ts">
export default { name: 'NotificationBar' }
</script>

<template>
  <div
    v-if="!isDismissed"
    :class="componentClass"
    class="px-3 py-6 mb-6 transition-colors duration-150 border rounded-lg md:py-3 last:mb-0"
  >
    <BaseLevel>
      <div class="flex flex-col items-center md:flex-row">
        <BaseIcon
          v-if="icon"
          :path="icon"
          w="w-10 md:w-5"
          h="h-10 md:h-5"
          size="24"
          class="md:mr-2"
        />
        <span class="text-center md:text-left md:py-2"><slot /></span>
      </div>
      <slot v-if="hasRightSlot" name="right" />
      <BaseButton
        v-else
        :icon="mdiClose"
        small
        rounded-full
        color="white"
        @click="dismiss"
      />
    </BaseLevel>
  </div>
</template>
