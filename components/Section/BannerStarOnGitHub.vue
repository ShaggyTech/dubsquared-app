<script setup lang="ts">
import { mdiGithub } from '@mdi/js'

const { gradientBgPinkRed } = useColors()
</script>

<script lang="ts">
export default { name: 'SectionBannerStarOnGithub' }
</script>

<template>
  <SectionBanner :class="gradientBgPinkRed">
    <h1 class="mb-6 text-3xl text-white">
      Like the project? Please star on <b>GitHub</b> ;-)
    </h1>
    <div>
      <BaseButton
        href="https://github.com/justboil/admin-one-vue-tailwind"
        :icon="mdiGithub"
        label="GitHub"
        target="_blank"
        rounded-full
      />
    </div>
  </SectionBanner>
</template>
