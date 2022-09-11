<script setup lang="ts">
import { mdiUpload } from '@mdi/js'
import type { ButtonVariant } from '~~/types'

export interface Props {
  modelValue?: Record<string, any> | File | Array<any>
  label?: string
  icon?: string
  accept?: string
  color?: ButtonVariant
  isRoundIcon?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: undefined,
  label: undefined,
  icon: mdiUpload,
  accept: undefined,
  color: 'info',
  isRoundIcon: false,
})

const emit = defineEmits(['update:modelValue'])

const root = ref<HTMLInputElement>()

const file = ref(props.modelValue)

const showFilename = computed(() => !props.isRoundIcon && file.value)

const modelValueProp = computed(() => props.modelValue)

watch(modelValueProp, (value) => {
  file.value = value

  // if (!value && root.value) {
  //   (root.value as HTMLInputElement).input.value = null;
  // }
})

const upload = (event: Event) => {
  const value =
    (event.target as HTMLInputElement).files ||
    (event as DragEvent).dataTransfer?.files

  if (value) file.value = value[0]

  emit('update:modelValue', file.value)

  // Use this as an example for handling file uploads
  // let formData = new FormData()
  // formData.append('file', file.value)

  // const mediaStoreRoute = `/your-route/`

  // axios
  //   .post(mediaStoreRoute, formData, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data'
  //     },
  //     onUploadProgress: progressEvent
  //   })
  //   .then(r => {
  //
  //   })
  //   .catch(err => {
  //
  //   })
}

// const uploadPercent = ref(0)
//
// const progressEvent = progressEvent => {
//   uploadPercent.value = Math.round(
//     (progressEvent.loaded * 100) / progressEvent.total
//   )
// }
</script>

<script lang="ts">
export default { name: 'FormFilePicker' }
</script>

<template>
  <div class="relative flex items-stretch justify-start">
    <label class="inline-flex">
      <BaseButton
        as="a"
        :class="{ 'w-12 h-12': isRoundIcon, 'rounded-r-none': showFilename }"
        :icon-size="isRoundIcon ? '24' : undefined"
        :label="isRoundIcon ? undefined : label"
        :icon="icon"
        :color="color"
        :rounded-full="isRoundIcon"
      />
      <input
        ref="root"
        type="file"
        class="absolute top-0 left-0 w-full h-full outline-none opacity-0 cursor-pointer -z-1"
        :accept="accept"
        @input="upload"
      />
    </label>
    <div
      v-if="showFilename"
      class="px-4 py-2 bg-gray-100 border border-gray-200 rounded-r dark:bg-slate-800 dark:border-slate-700"
    >
      <span class="text-ellipsis line-clamp-1"> 'file.name' </span>
    </div>
  </div>
</template>
