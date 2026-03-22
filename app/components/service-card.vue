<script setup lang="ts">
interface Props {
  imgSrc: string
  title: string
  description: string
}

const props = defineProps<Props>()

const getImageUrl = (name: string) => {
  return new URL(`../assets/img/${name}`, import.meta.url).href
}
</script>

<template>
  <article class="article">
    <h3 class="title">{{ title }}</h3>
    <p class="description">{{ description }}</p>
    <img :src="getImageUrl(imgSrc)" alt="photo" class="img" />
  </article>
</template>

<style scoped>
.article {
  position: relative;
  background: linear-gradient(180deg, #222930 0%, #0d151d 100%);
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 400px;
}

.title {
  font-size: 32px;
  line-height: 116%;
  color: #fff;
}

.description {
  font-weight: 600;
  font-size: 16px;
  line-height: 131%;
  color: #fff;
}

.img {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
