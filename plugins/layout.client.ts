import { useLayoutStore } from '~/stores/layout'

export default defineNuxtPlugin(({ hook, $pinia }) => {
  // when page redirects on mobile device, close mobile nav and app drawer
  const { toggleAsideMobile, toggleNavBarMobile } = useLayoutStore($pinia)

  hook('page:finish', () => {
    toggleAsideMobile(false)
    toggleNavBarMobile(false)
  })
})
