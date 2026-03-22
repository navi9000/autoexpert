<script setup lang="ts">
interface Props {
  iconSrc: string
  label: string
}

defineProps<Props>()

const getImageUrl = (name: string) => {
  return new URL(`../assets/img/${name}`, import.meta.url).href
}
</script>

<template>
  <div class="group">
    <img :src="getImageUrl(iconSrc)" alt="icon" class="img" />
    <p class="label">{{ label }}</p>
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

  @media screen and (min-width: 900px) {
    font-size: 20px;
    line-height: 125%;
  }
}
</style>
