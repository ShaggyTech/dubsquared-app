export const useLayoutStore = defineStore('layout', () => {
  // State
  const isAsideMobileExpanded = ref<boolean>(false)
  const isAsideLgActive = ref<boolean>(false)

  const isNavBarMobileExpanded = ref<boolean>(false)

  // Actions
  const toggleAsideMobile = (show?: boolean) => {
    if (typeof show === 'boolean') {
      isAsideMobileExpanded.value = show
    } else {
      isAsideMobileExpanded.value = !isAsideMobileExpanded.value
    }
  }

  const toggleAsideLg = (show?: boolean) => {
    if (typeof show === 'boolean') {
      isAsideLgActive.value = show
    } else {
      isAsideLgActive.value = !isAsideLgActive.value
    }
  }

  const toggleNavBarMobile = (show?: boolean) => {
    if (typeof show === 'boolean') {
      isNavBarMobileExpanded.value = show
    } else {
      isNavBarMobileExpanded.value = !isNavBarMobileExpanded.value
    }
  }

  return {
    // State
    isAsideMobileExpanded,
    isAsideLgActive,
    isNavBarMobileExpanded,
    // Actions
    toggleAsideMobile,
    toggleAsideLg,
    toggleNavBarMobile,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLayoutStore, import.meta.hot))
}
