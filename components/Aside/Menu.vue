<script setup lang="ts">
import { useLayoutStore } from '~/stores/layout'
import type { MenuAside } from '~/types'

// Props and Emits
type Props = {
  menu: MenuAside
}
defineProps<Props>()
const emit = defineEmits(['menu-click'])

// Stores
const layoutStore = useLayoutStore()
const { toggleAsideLg } = layoutStore
const { isAsideLgActive, isAsideMobileExpanded } = storeToRefs(layoutStore)

// Click handlers
const menuClick = (event: MouseEvent, item: any) => {
  emit('menu-click', event, item)
}
</script>

<script lang="ts">
export default { name: 'AsideMenu' }
</script>

<template>
  <div>
    <AsideMenuLayer
      :menu="menu"
      :class="[
        isAsideMobileExpanded ? 'left-0' : '-left-60 lg:left-0',
        { 'lg:hidden xl:flex': !isAsideLgActive },
      ]"
      @menu-click="menuClick"
    />
    <OverlayLayer
      v-show="isAsideLgActive"
      z-index="z-30"
      @overlay-click="toggleAsideLg(false)"
    />
  </div>
</template>
