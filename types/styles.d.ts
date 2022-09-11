export type AvailableStyles = 'basic' | 'white'

export interface Styles {
  aside: string
  asideScrollbars: string
  asideBrand: string
  asideMenuItem: string
  asideMenuItemActive: string
  asideMenuDropdown: string
  navBarItemLabel: string
  navBarItemLabelHover: string
  navBarItemLabelActiveColor: string
  overlay: string
}

export type UseStylesState = {
  styles: Record<AvailableStyles, Styles>
}
