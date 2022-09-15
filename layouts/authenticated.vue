<script setup lang="ts">
import { mdiForwardburger, mdiBackburger, mdiMenu } from '@mdi/js'
import menuAside from '~/data/menuAside'
import menuNavBar from '~/data/menuNavBar'
import { useMainStore } from '~/stores/main'
import { useLayoutStore } from '~/stores/layout'

import { useThemeStore } from '~/stores/theme'

// Styles
const layoutAsidePadding = 'xl:pl-60'

// Stores
const { setUser } = useMainStore()

const layoutStore = useLayoutStore()
const { toggleAsideLg, toggleAsideMobile } = layoutStore
const { isAsideLgActive, isAsideMobileExpanded } = storeToRefs(layoutStore)

const { toggleLightDark } = useThemeStore()

// Set example User for demo purposes
setUser({
  name: 'John Doe',
  email: 'john@example.com',
  avatar:
    'https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&options[accessoriesChance]=93',
})

// Togggle asides on route change
const router = useRouter()
router.beforeEach(() => {
  toggleAsideLg(false)
  toggleAsideMobile(false)
})

// Click Handlers
const menuClick = (_event: MouseEvent, item: any) => {
  if (item.isToggleLightDark) {
    toggleLightDark()
  }

  if (item.isLogout) {
    useRouter().push('/')
  }
}
</script>

<template>
  <div
    :class="{
      'overflow-hidden lg:overflow-visible': isAsideMobileExpanded,
    }"
  >
    <div
      :class="[layoutAsidePadding, { 'ml-60 lg:ml-0': isAsideMobileExpanded }]"
      class="w-screen min-h-screen pt-14 transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100"
    >
      <NavBar
        :menu="menuNavBar"
        :class="[
          layoutAsidePadding,
          { 'ml-60 lg:ml-0': isAsideMobileExpanded },
        ]"
        @menu-click="menuClick"
      >
        <NavBarItemPlain
          display="flex lg:hidden"
          @click.prevent="toggleAsideMobile()"
        >
          <BaseIcon
            :path="isAsideMobileExpanded ? mdiBackburger : mdiForwardburger"
            size="24"
          />
        </NavBarItemPlain>
        <NavBarItemPlain
          display="hidden lg:flex xl:hidden"
          @click.prevent="isAsideLgActive = true"
        >
          <BaseIcon :path="mdiMenu" size="24" />
        </NavBarItemPlain>
        <NavBarItemPlain use-margin>
          <FormControl
            placeholder="Search (ctrl+k)"
            ctrl-k-focus
            transparent
            borderless
          />
        </NavBarItemPlain>
      </NavBar>
      <AsideMenu :menu="menuAside" @menu-click="menuClick" />
      <slot />
      <FooterBar>
        Get more with
        <a
          href="https://tailwind-vue.justboil.me/"
          target="_blank"
          class="text-blue-600"
          >Premium version</a
        >
      </FooterBar>
    </div>
  </div>
</template>
