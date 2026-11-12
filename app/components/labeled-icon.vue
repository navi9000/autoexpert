<script setup lang="ts">
interface Props {
  iconSrc: string
  label: string
  href?: string
  target?: string
}

const { iconSrc, label, href, target } = defineProps<Props>()
</script>

<template>
  <div class="group">
    <img :src="iconSrc" alt="" aria-hidden="true" class="img" />
    <component
      :is="href ? 'a' : 'p'"
      class="label"
      :href="href"
      :target="target"
      :rel="target === '_blank' ? 'noopener noreferrer' : undefined"
    >
      {{ label }}
    </component>
  </div>
</template>

<style scoped>
.group {
  display: flex;
  align-items: center;
  gap: 10px;
}

.img {
  height: 18px;
  width: 18px;

  @media screen and (min-width: 900px) {
    height: 32px;
    width: 32px;
  }
}

.label {
  font-weight: 600;
  font-size: 16px;
  line-height: 156%;
  color: #fff;
  text-decoration: none;

  @media screen and (min-width: 900px) {
    font-size: 20px;
    line-height: 125%;
  }
}
</style>
