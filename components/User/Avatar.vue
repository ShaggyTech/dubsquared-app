<script setup lang="ts">
// Props and Emits
export interface Props {
  userName?: string
  avatar?: string
  api?: string
}
const props = withDefaults(defineProps<Props>(), {
  userName: undefined,
  avatar: undefined,
  api: 'avataaars',
})

// Computed
const avatar = computed(() => {
  if (props.userName && props.api) {
    return `https://avatars.dicebear.com/api/${
      props.api
    }/${props.userName.replace(/[^a-z0-9]+/i, '-')}.svg`
  } else if (props.avatar) {
    return props.avatar
  } else {
    return undefined
  }
})

const userName = computed(() => props.userName)
</script>

<script lang="ts">
export default { name: 'UserAvatar' }
</script>

<template>
  <div>
    <img
      :src="avatar"
      :alt="userName"
      class="block w-full h-auto max-w-full bg-gray-100 rounded-full dark:bg-slate-800"
    />
    <slot />
  </div>
</template>
