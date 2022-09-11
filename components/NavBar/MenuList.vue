<script setup lang="ts">
import type { MenuNavBar } from '~/types'

export interface Props {
  menu: MenuNavBar
}

withDefaults(defineProps<Props>(), {
  menu: () => [],
})

const emit = defineEmits(['menu-click'])

const menuClick = (event: MouseEvent, item: any) => {
  emit('menu-click', event, item)
}
</script>

<script lang="ts">
export default { name: 'NavBarItemPlain' }
</script>

<template>
  <div>
    <NavBarItem
      v-for="(item, index) in menu"
      :key="index"
      :item="item"
      @menu-click="menuClick"
    />
  </div>
</template>
