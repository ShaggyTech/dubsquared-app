<script setup lang="ts">
import { useMainStore } from '~/stores/main'

const mainStore = useMainStore()
const { userName, userAvatar } = storeToRefs(mainStore)
</script>

<script lang="ts">
export default { name: 'UserAvatarCurrentUser' }
</script>

<template>
  <UserAvatar :username="userName" :avatar="userAvatar">
    <slot />
  </UserAvatar>
</template>
