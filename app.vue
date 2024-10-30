<template>
  <div>
    <Toaster></Toaster>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import Toaster from './components/ui/toast/Toaster.vue'
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `Vinylata | ${titleChunk}` : 'Vinylata'
  },
})
</script>
