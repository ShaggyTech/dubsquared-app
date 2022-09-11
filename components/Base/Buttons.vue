<script lang="ts">
export default defineComponent({
  name: 'BaseButtons',
  props: {
    noWrap: Boolean,
    type: {
      type: String,
      default: 'justify-start',
    },
    classAddon: {
      type: String,
      default: 'mr-3 last:mr-0 mb-3',
    },
    mb: {
      type: String,
      default: '-mb-3',
    },
  },
  render() {
    const hasSlot = Boolean(this.$slots && this.$slots.default)

    const parentClass = [
      'flex',
      'items-center',
      this.type,
      this.noWrap ? 'flex-nowrap' : 'flex-wrap',
    ]

    if (this.mb) {
      parentClass.push(this.mb)
    }

    const children = hasSlot
      ? this.$slots.default!().map((element: any) => {
          if (
            element &&
            element.children &&
            typeof element.children === 'object'
          ) {
            return h(
              element,
              {},
              element.children.map((child: any) => {
                return h(child, { class: [this.classAddon] })
              })
            )
          }

          return h(element, { class: [this.classAddon] })
        })
      : null

    if (children) return h('div', { class: parentClass }, children)
    else return h('div', { class: parentClass })
  },
})
</script>
