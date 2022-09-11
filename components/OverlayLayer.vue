<script setup lang="ts">
import { useStyleStore } from '~/stores/style'

// Props and Emits
export interface Props {
  zIndex?: string
  type?: string
}
withDefaults(defineProps<Props>(), {
  zIndex: 'z-50',
  type: 'flex',
})
const emit = defineEmits(['overlay-click'])

// Stores
const { overlayStyle } = storeToRefs(useStyleStore())

// Click handlers
const overlayClick = (event: MouseEvent) => {
  emit('overlay-click', event)
}
</script>

<script lang="ts">
export default { name: 'OverlayLayer' }
</script>

<template>
  <div
    :class="[type, zIndex]"
    class="fixed inset-0 flex-col items-center justify-center overflow-hidden"
  >
    <ClientOnly>
      <transition
        enter-active-class="transition duration-150 ease-in"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          class="absolute inset-0 bg-gradient-to-tr opacity-90 dark:from-gray-700 dark:via-gray-900 dark:to-gray-700"
          :class="overlayStyle"
          @click="overlayClick"
        />
      </transition>
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="animate-fade-out"
      >
        <slot />
      </transition>
    </ClientOnly>
  </div>
</template>
