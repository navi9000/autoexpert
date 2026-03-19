<script setup lang="ts">
interface Props {
  containerClass?: string
  inlayClass?: string
}
const props = defineProps<Props>()
</script>

<template>
  <div class="container" :class="containerClass">
    <div class="inlay" :class="inlayClass">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
  padding-inline: 20px;
  @media screen and (min-width: 990px) {
    padding-inline: 100px;
  }
}
.inlay {
  width: 100%;
  margin-inline: auto;
}
</style>
