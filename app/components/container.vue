<script setup lang="ts">
interface Props {
  tag?: keyof HTMLElementTagNameMap
}

const { tag = "div" } = defineProps<Props>()
</script>

<template>
  <component :is="tag" class="container">
    <div class="inlay">
      <slot />
    </div>
  </component>
</template>

<style scoped>
.container {
  max-width: 100%;
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
