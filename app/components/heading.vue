<script setup lang="ts">
interface Props {
  tag?: keyof HTMLElementTagNameMap
  centered?: boolean
}

const { tag = "div", centered = false } = defineProps<Props>()
</script>

<template>
  <component :is="tag" class="heading"><slot /></component>
</template>

<style scoped>
.heading {
  font-weight: 700;
  font-size: 24px;
  line-height: 121%;
  text-transform: uppercase;
  color: var(--color-theme);

  @media screen and (min-width: 900px) {
    font-size: 32px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 48px;
  }
}
</style>
