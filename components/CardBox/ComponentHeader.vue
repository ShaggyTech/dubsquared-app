<script setup lang="ts">
export interface Props {
  title: string
  icon?: string
  buttonIcon?: string
}

withDefaults(defineProps<Props>(), {
  title: undefined,
  icon: undefined,
  buttonIcon: undefined,
})

const emit = defineEmits(['button-click'])

const buttonClick = (event: Event) => {
  emit('button-click', event)
}
</script>

<script lang="ts">
export default { name: 'CardBoxComponentHeader' }
</script>

<template>
  <header
    class="flex items-stretch border-b border-gray-100 dark:border-slate-800"
  >
    <div
      class="flex items-center py-3 font-bold grow"
      :class="[icon ? 'px-4' : 'px-6']"
    >
      <BaseIcon v-if="icon" :path="icon" class="mr-3" />
      {{ title }}
    </div>
    <button
      v-if="buttonIcon"
      class="flex items-center justify-center p-2 ring-blue-700 focus:ring"
      @click="buttonClick"
    >
      <BaseIcon :path="buttonIcon" />
    </button>
  </header>
</template>
