<script setup lang="ts">
import type { MenuAside } from '~/types'

// Props and Emits
type Props = {
  menu: MenuAside
  isDropdownList?: boolean
}
withDefaults(defineProps<Props>(), {
  menu: undefined,
  isDropdownList: false,
})
const emit = defineEmits(['menu-click'])

// Click handlers
const menuClick = (event: MouseEvent, item: any) => {
  emit('menu-click', event, item)
}
</script>

<script lang="ts">
export default { name: 'AsideMenuList' }
</script>

<template>
  <ul>
    <AsideMenuItem
      v-for="(item, index) in menu"
      :key="index"
      :item="item"
      :is-dropdown-list="isDropdownList"
      @menu-click="menuClick"
    />
  </ul>
</template>
