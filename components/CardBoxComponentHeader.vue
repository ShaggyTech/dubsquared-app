<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: null,
  },
  buttonIcon: {
    type: String,
    default: null,
  },
});

const emit = defineEmits(["button-click"]);

const buttonClick = (event) => {
  emit("button-click", event);
};
</script>

<template>
  <header
    class="flex items-stretch border-b border-gray-100 dark:border-slate-800"
  >
    <div
      class="flex items-center py-3 font-bold grow"
      :class="[icon ? 'px-4' : 'px-6']"
    >
      <BaseIcon v-if="icon" :path="icon" class="mr-3" />
      {{ title }}
    </div>
    <button
      v-if="buttonIcon"
      class="flex items-center justify-center p-2 ring-blue-700 focus:ring"
      @click="buttonClick"
    >
      <BaseIcon :path="buttonIcon" />
    </button>
  </header>
</template>
