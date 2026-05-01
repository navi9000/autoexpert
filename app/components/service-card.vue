<script setup lang="ts">
interface Props {
  imgSrc: string
  title: string
  description: string
}

const props = defineProps<Props>()

const shapeImage = {
  "--service-card-img": `url("${props.imgSrc}")`,
}
</script>

<template>
  <article class="article">
    <div class="ghost-float"></div>
    <img :src="imgSrc" alt="photo" class="img" :style="shapeImage" />
    <div class="article-inlay">
      <h3 class="title">{{ title }}</h3>
      <p class="description">{{ description }}</p>
    </div>
  </article>
</template>

<style scoped>
.article {
  position: relative;
  background: linear-gradient(180deg, #222930 0%, #0d151d 100%);
  height: 400px;
}

.article-inlay {
  padding: 40px;
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
  margin-block: 24px;
}

.ghost-float {
  width: 0;
  height: 188px;
  float: right;
}

.img {
  shape-outside: var(--service-card-img);
  float: right;
  height: 212px;
  clear: both;
}
</style>
