export type MenuItem = {
  to?: string
  icon?: string
  label?: string
  href?: string
  target?: string
  isCurrentUser?: boolean
  isDesktopNoLabel?: boolean
  isDivider?: boolean
  isLogout?: boolean
  isToggleLightDark?: boolean
  menu?: {
    to?: string
    icon?: string
    label?: string
    href?: string
    target?: string
    isCurrentUser?: boolean
    isDesktopNoLabel?: boolean
    isDivider?: boolean
    isLogout?: boolean
    isToggleLightDark?: boolean
  }[]
}

export type MenuAside = MenuItem[]
export type MenuNavBar = MenuItem[]
