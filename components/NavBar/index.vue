<script setup lang="ts">
import { mdiClose, mdiDotsVertical } from '@mdi/js'
import { containerMaxW } from '~/data/config'
import type { MenuNavBar } from '~/types'
export interface Props {
  menu: MenuNavBar
}

defineProps<Props>()

const emit = defineEmits(['menu-click'])

const menuClick = (event: Event, item: any) => {
  emit('menu-click', event, item)
}

const isMenuNavBarActive = ref(false)
</script>

<script lang="ts">
export default { name: 'NavBar' }
</script>

<template>
  <nav
    class="fixed inset-x-0 top-0 z-30 w-screen bg-gray-50 h-14 transition-position lg:w-auto dark:bg-slate-800"
  >
    <div class="flex lg:items-stretch" :class="containerMaxW">
      <div class="flex items-stretch flex-1 h-14">
        <slot />
      </div>
      <div class="flex items-stretch flex-none h-14 lg:hidden">
        <NavBarItemPlain
          @click.prevent="isMenuNavBarActive = !isMenuNavBarActive"
        >
          <BaseIcon
            :path="isMenuNavBarActive ? mdiClose : mdiDotsVertical"
            size="24"
          />
        </NavBarItemPlain>
      </div>
      <div
        class="absolute left-0 w-screen overflow-y-auto shadow-lg max-h-screen-menu lg:overflow-visible top-14 bg-gray-50 lg:w-auto lg:flex lg:static lg:shadow-none dark:bg-slate-800"
        :class="[isMenuNavBarActive ? 'block' : 'hidden']"
      >
        <NavBarMenuList
          :menu="menu"
          class="relative lg:flex"
          @menu-click="menuClick"
        />
      </div>
    </div>
  </nav>
</template>
