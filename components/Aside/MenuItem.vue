<script setup lang="ts">
import { mdiMinus, mdiPlus } from '@mdi/js'
import { useStyleStore } from '~/stores/style'
import type { ButtonVariant, MenuAside } from '~/types'

// Props and Emits
type Props = {
  item: {
    label?: string
    icon?: string
    color?: ButtonVariant
    isLogout?: boolean
    to?: string
    href?: string
    target?: string
    menu?: MenuAside
  }
  isDropdownList?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  item: undefined,
  isDropdownList: false,
})
const emit = defineEmits(['menu-click'])

// Dynamic Components
const NuxtLink = resolveComponent('NuxtLink')

// Stores
const {
  asideMenuDropdownStyle,
  asideMenuItemActiveStyle: _asideMenuItemActiveStyle,
  asideMenuItemStyle,
} = storeToRefs(useStyleStore())

// Data
const isDropdownActive = ref(false)

// Computed
const hasColor = computed(() => props.item && props.item.color)

const asideMenuItemActiveStyle = computed(() =>
  hasColor.value ? '' : _asideMenuItemActiveStyle.value
)

const componentClass = computed(() => [
  props.isDropdownList ? 'py-3 px-6 text-sm' : 'py-3',
  hasColor.value
    ? getButtonColor({
        color: props.item.color as ButtonVariant,
        isOutlined: false,
        hasHover: true,
      })
    : `${asideMenuItemStyle} text-slate-200 dark:text-slate-300 dark:hover:text-white`,
])

const hasDropdown = computed(() => !!props.item.menu)

// Actions
const { getButtonColor } = useColors()

// Click handlers
const menuClick = (event: MouseEvent) => {
  emit('menu-click', event, props.item)

  if (hasDropdown.value) {
    isDropdownActive.value = !isDropdownActive.value
  }
}
</script>

<script lang="ts">
export default { name: 'AsideMenuItem' }
</script>

<template>
  <li>
    <component
      :is="item?.to ? NuxtLink : 'a'"
      v-slot="vSlot"
      :to="item?.to ? item.to : undefined"
      :href="!item?.to ? item?.href : undefined"
      :target="item?.target ?? null"
      class="flex cursor-pointer"
      :class="componentClass"
      @click="menuClick"
    >
      <BaseIcon
        v-if="item?.icon"
        :path="item?.icon"
        class="flex-none"
        :class="[vSlot && vSlot.isExactActive ? asideMenuItemActiveStyle : '']"
        w="w-16"
        :size="18"
      />
      <span
        class="grow text-ellipsis line-clamp-1"
        :class="[
          { 'pr-12': !hasDropdown },
          vSlot && vSlot.isExactActive ? asideMenuItemActiveStyle : '',
        ]"
        >{{ item?.label }}</span
      >
      <BaseIcon
        v-if="hasDropdown"
        :path="isDropdownActive ? mdiMinus : mdiPlus"
        class="flex-none"
        :class="[vSlot && vSlot.isExactActive ? asideMenuItemActiveStyle : '']"
        w="w-12"
      />
    </component>
    <AsideMenuList
      v-if="hasDropdown"
      :menu="item?.menu"
      :class="[
        asideMenuDropdownStyle,
        isDropdownActive ? 'block dark:bg-slate-800/50' : 'hidden',
      ]"
      is-dropdown-list
    />
  </li>
</template>
