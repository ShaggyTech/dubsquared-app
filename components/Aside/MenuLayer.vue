<script setup lang="ts">
import { mdiLogout, mdiClose } from '@mdi/js'
import { useLayoutStore } from '~/stores/layout'
import { useStyleStore } from '~/stores/style'
import type { ButtonVariant, MenuAside } from '~/types'

// Props and Emits
type Props = {
  menu: MenuAside
}
defineProps<Props>()
const emit = defineEmits(['menu-click'])

// Stores
const { asideStyle, asideBrandStyle, asideScrollbarsStyle, darkMode } =
  storeToRefs(useStyleStore())
const { toggleAsideLg } = useLayoutStore()

// Computed
const logoutItem = computed(() => ({
  label: 'Logout',
  icon: mdiLogout,
  color: 'info' as ButtonVariant,
  isLogout: true,
}))

// Click handlers
const menuClick = (event: MouseEvent, item: any) => {
  emit('menu-click', event, item)
}
</script>

<script lang="ts">
export default { name: 'AsideMenuLayer' }
</script>

<template>
  <aside
    id="aside"
    class="fixed top-0 z-40 flex h-screen overflow-hidden lg:py-2 lg:pl-2 w-60 transition-position"
  >
    <div
      :class="asideStyle"
      class="flex flex-col flex-1 overflow-hidden lg:rounded-2xl dark:bg-slate-900"
    >
      <div
        :class="asideBrandStyle"
        class="flex flex-row items-center justify-between h-14 dark:bg-slate-900"
      >
        <div
          class="flex-1 text-center lg:text-left lg:pl-6 xl:text-center xl:pl-0"
        >
          <b class="font-black">One</b>
        </div>
        <button
          class="hidden p-3 lg:inline-block xl:hidden"
          @click.prevent="toggleAsideLg(false)"
        >
          <BaseIcon :path="mdiClose" />
        </button>
      </div>
      <div
        :class="darkMode ? 'aside-scrollbars-[slate]' : asideScrollbarsStyle"
        class="flex-1 overflow-x-hidden overflow-y-auto"
      >
        <AsideMenuList :menu="menu" @menu-click="menuClick" />
      </div>

      <ul>
        <AsideMenuItem :item="logoutItem" @menu-click="menuClick" />
      </ul>
    </div>
  </aside>
</template>
