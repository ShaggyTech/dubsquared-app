<script setup lang="ts">
export interface Props {
  label: string
  icon?: string
  small?: boolean
}

withDefaults(defineProps<Props>(), {
  label: undefined,
  icon: undefined,
  small: false,
})
</script>

<script lang="ts">
export default { name: 'PillTagPlain' }
</script>

<template>
  <div
    class="inline-flex items-center leading-none capitalize"
    :class="[small ? 'text-xs' : 'text-sm']"
  >
    <BaseIcon
      v-if="icon"
      :path="icon"
      h="h-4"
      w="w-4"
      :class="small ? 'mr-1' : 'mr-2'"
      :size="small ? 14 : undefined"
    />
    <span>{{ label }}</span>
  </div>
</template>
