<script setup lang="ts">
import { mdiChevronUp, mdiChevronDown } from '@mdi/js'
import { useStyleStore } from '~/stores/style'
import { useMainStore } from '~/stores/main'
import type { MenuItem } from '~/types'

// Props and Emits
export interface Props {
  item: MenuItem
}
const props = defineProps<Props>()
const emit = defineEmits(['menu-click'])

// Stores
const { userName } = storeToRefs(useMainStore())
const {
  navBarItemLabelActiveColorStyle,
  navBarItemLabelHoverStyle,
  navBarItemLabelStyle,
} = storeToRefs(useStyleStore())

// Data
const root = ref<HTMLElement>()
const isDropdownActive = ref(false)

// Computed
const is = computed(() => {
  if (props.item.href) {
    return 'a'
  }
  if (props.item.to) {
    return resolveComponent('NuxtLink')
  }
  return 'div'
})

const componentClass = computed(() => {
  const base = [
    isDropdownActive.value
      ? `${navBarItemLabelActiveColorStyle} dark:text-slate-400`
      : `${navBarItemLabelStyle} dark:text-white dark:hover:text-slate-400 ${navBarItemLabelHoverStyle}`,
    props.item.menu ? 'lg:py-2 lg:px-3' : 'py-2 px-3',
  ]

  if (props.item.isDesktopNoLabel) {
    base.push('lg:w-16', 'lg:justify-center')
  }

  return base
})

const itemLabel = computed(() =>
  props.item.isCurrentUser ? userName : props.item.label
)

// Click handlers
const menuClick = (event: MouseEvent) => {
  emit('menu-click', event, props.item)

  if (props.item.menu) {
    isDropdownActive.value = !isDropdownActive.value
  }
}

const menuClickDropdown = (event: MouseEvent, item: any) => {
  emit('menu-click', event, item)
}

const forceClose = (event: MouseEvent) => {
  if (root.value && !root.value.contains(event.target as Node)) {
    isDropdownActive.value = false
  }
}

// Lifecycle
onMounted(() => {
  if (props.item.menu) {
    window.addEventListener('click', forceClose)
  }
})

onBeforeUnmount(() => {
  if (props.item.menu) {
    window.removeEventListener('click', forceClose)
  }
})
</script>

<script lang="ts">
export default { name: 'NavBarItem' }
</script>

<template>
  <BaseDivider v-if="item.isDivider" nav-bar />
  <component
    :is="is"
    v-else
    ref="root"
    class="relative items-center block cursor-pointer lg:flex"
    :class="componentClass"
    :to="item.to ? item.to : undefined"
    :href="!item.to ? item.href : undefined"
    @click="menuClick"
  >
    <div
      class="flex items-center"
      :class="{
        'bg-gray-100 dark:bg-slate-800 lg:bg-transparent lg:dark:bg-transparent p-3 lg:p-0':
          item.menu,
      }"
    >
      <UserAvatarCurrentUser
        v-if="item.isCurrentUser"
        class="inline-flex w-6 h-6 mr-3"
      />
      <BaseIcon v-if="item.icon" :path="item.icon" class="transition-colors" />
      <span
        class="px-2 transition-colors"
        :class="{ 'lg:hidden': item.isDesktopNoLabel && item.icon }"
        >{{ itemLabel }}</span
      >
      <BaseIcon
        v-if="item.menu"
        :path="isDropdownActive ? mdiChevronUp : mdiChevronDown"
        class="hidden transition-colors lg:inline-flex"
      />
    </div>
    <div
      v-if="item.menu"
      class="text-sm border-b border-gray-100 lg:border lg:bg-white lg:absolute lg:top-full lg:left-0 lg:min-w-full lg:z-20 lg:rounded-lg lg:shadow-lg lg:dark:bg-slate-800 dark:border-slate-700"
      :class="{ 'lg:hidden': !isDropdownActive }"
    >
      <NavBarMenuList :menu="item.menu" @menu-click="menuClickDropdown" />
    </div>
  </component>
</template>
