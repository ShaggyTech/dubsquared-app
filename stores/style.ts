import { darkModeKey, styleKey } from '~/data/config'
import type { AvailableStyles } from '~/types/styles'

export const useStyleStore = defineStore('style', () => {
  // State
  const styleState = ref({
    asideStyle: '',
    asideBrandStyle: '',
    asideMenuItemStyle: '',
    asideMenuItemActiveStyle: '',
    asideMenuDropdownStyle: '',
    asideScrollbarsStyle: '',
    navBarItemLabelStyle: '',
    navBarItemLabelHoverStyle: '',
    navBarItemLabelActiveColorStyle: '',
    overlayStyle: '',
  })

  // Getters
  const asideStyle = computed(() => styleState.value.asideStyle)
  const asideBrandStyle = computed(() => styleState.value.asideBrandStyle)
  const asideMenuItemStyle = computed(() => styleState.value.asideMenuItemStyle)
  const asideMenuItemActiveStyle = computed(
    () => styleState.value.asideMenuItemActiveStyle
  )
  const asideMenuDropdownStyle = computed(
    () => styleState.value.asideMenuDropdownStyle
  )
  const asideScrollbarsStyle = computed(
    () => styleState.value.asideScrollbarsStyle
  )
  const navBarItemLabelStyle = computed(
    () => styleState.value.navBarItemLabelStyle
  )
  const navBarItemLabelHoverStyle = computed(
    () => styleState.value.navBarItemLabelHoverStyle
  )
  const navBarItemLabelActiveColorStyle = computed(
    () => styleState.value.navBarItemLabelActiveColorStyle
  )
  const overlayStyle = computed(() => styleState.value.overlayStyle)
  const darkMode = ref<boolean>(false)

  // Actions
  const setStyle = (styleName: AvailableStyles) => {
    const { styles } = useStyles()

    if (!styles[styleName]) {
      return
    }

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(styleKey, styleName)
    }

    const style = styles[styleName]

    for (const key in style) {
      const styleStateKey = `${key}Style` as keyof typeof styleState.value
      styleState.value[styleStateKey] = style[key as keyof typeof style]
    }
  }

  const setDarkMode = (show?: boolean | undefined) => {
    darkMode.value = show !== undefined ? show : !darkMode.value
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(darkModeKey, darkMode.value ? '1' : '0')
    }
    if (typeof document !== 'undefined') {
      document.body.classList[darkMode.value ? 'add' : 'remove'](
        'dark-scrollbars'
      )
      document.documentElement.classList[darkMode.value ? 'add' : 'remove'](
        'dark-scrollbars-compat'
      )
    }
  }

  return {
    // State
    styleState,
    // Getters
    asideStyle,
    asideBrandStyle,
    asideMenuItemStyle,
    asideMenuItemActiveStyle,
    asideMenuDropdownStyle,
    asideScrollbarsStyle,
    navBarItemLabelStyle,
    navBarItemLabelHoverStyle,
    navBarItemLabelActiveColorStyle,
    overlayStyle,
    darkMode,
    // Actions
    setStyle,
    setDarkMode,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStyleStore, import.meta.hot))
}
