<script setup lang="ts">
import { containerMaxW } from '~/data/config'

const year = new Date().getFullYear()
</script>

<script lang="ts">
export default { name: 'FooterBar' }
</script>

<template>
  <footer class="px-6 py-2" :class="containerMaxW">
    <BaseLevel>
      <div class="text-center md:text-left">
        <b
          >&copy;{{ year }},
          <a href="https://justboil.me/" target="_blank">JustBoil.me</a>.</b
        >
        <slot />
      </div>
      <div class="md:py-2">
        <a href="https://justboil.me">
          <LogoJustboil class="w-auto h-8 md:h-6" />
        </a>
      </div>
    </BaseLevel>
  </footer>
</template>
