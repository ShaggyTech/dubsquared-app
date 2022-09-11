<script setup lang="ts">
import { mdiCog } from '@mdi/js'

export interface Props {
  title: string
  icon?: string
  main?: boolean
}

withDefaults(defineProps<Props>(), {
  title: undefined,
  icon: undefined,
  main: false,
})

const hasSlot = computed(() => useSlots().default)
</script>

<script lang="ts">
export default { name: 'SectionTitleLineWithButton' }
</script>

<template>
  <section
    :class="{ 'pt-6': !main }"
    class="flex items-center justify-between mb-6"
  >
    <div class="flex items-center justify-start">
      <IconRounded
        v-if="icon && main"
        :icon="icon"
        color="light"
        class="mr-3"
        bg
      />
      <BaseIcon v-else-if="icon" :path="icon" class="mr-2" size="20" />
      <h1 :class="main ? 'text-3xl' : 'text-2xl'" class="leading-tight">
        {{ title }}
      </h1>
    </div>
    <slot v-if="hasSlot" />
    <BaseButton v-else :icon="mdiCog" color="whiteDark" />
  </section>
</template>
