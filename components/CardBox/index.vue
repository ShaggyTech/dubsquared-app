<script setup lang="ts">
export interface Props {
  rounded?: string
  flex?: string
  hasComponentLayout?: boolean
  hasTable?: boolean
  isForm?: boolean
  isHoverable?: boolean
  isModal?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  rounded: 'rounded-2xl',
  flex: 'flex-col',
  hasComponentLayout: false,
  hasTable: false,
  isForm: false,
  isHoverable: false,
  isModal: false,
})

const emit = defineEmits(['submit'])

const slots = useSlots()

const hasFooterSlot = computed(() => slots.footer && !!slots.footer())

const componentClass = computed(() => {
  const base = [
    props.rounded,
    props.flex,
    props.isModal ? 'dark:bg-slate-900' : 'dark:bg-slate-900/70',
  ]

  if (props.isHoverable) {
    base.push('hover:shadow-lg transition-shadow duration-500')
  }

  return base
})

const submit = (event: Event) => {
  emit('submit', event)
}
</script>

<script lang="ts">
export default { name: 'CardBox' }
</script>

<template>
  <form
    v-if="isForm"
    :class="componentClass"
    class="flex bg-white"
    @submit="submit"
  >
    <slot v-if="hasComponentLayout" />
    <template v-else>
      <CardBoxComponentBody :no-padding="hasTable">
        <slot />
      </CardBoxComponentBody>
      <CardBoxComponentFooter v-if="hasFooterSlot">
        <slot name="footer" />
      </CardBoxComponentFooter>
    </template>
  </form>
  <div v-else :class="componentClass" class="flex bg-white" @submit="submit">
    <slot v-if="hasComponentLayout" />
    <template v-else>
      <CardBoxComponentBody :no-padding="hasTable">
        <slot />
      </CardBoxComponentBody>
      <CardBoxComponentFooter v-if="hasFooterSlot">
        <slot name="footer" />
      </CardBoxComponentFooter>
    </template>
  </div>
</template>
