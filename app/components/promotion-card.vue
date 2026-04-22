<script setup lang="ts">
interface Props {
  title: string
  description?: string
  imgSrc: string
}

defineProps<Props>()
</script>

<template>
  <article class="card">
    <h3 class="title">{{ title }}</h3>
    <p v-if="description" class="description">{{ description }}</p>
    <Button filling="solid" class="promo-button">Подробнее</Button>
    <img :src="imgSrc" alt="card-image" class="background" />
  </article>
</template>

<style scoped>
.card {
  position: relative;
  min-height: 324px;
  background:
    linear-gradient(137deg, #010911 0%, rgba(5, 13, 21, 0) 100%),
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.1) 100%
    );
  display: flex;
  flex-direction: column;
  padding: 50px 40px;
  gap: 20px;

  @media screen and (min-width: 990px) {
    min-height: 390px;
  }
}

.title {
  font-size: 24px;
  color: #fff;
  @media screen and (min-width: 990px) {
    font-size: 32px;
  }
}

.description {
  font-weight: 600;
  font-size: 16px;
  line-height: 125%;
  color: #fff;
  @media screen and (min-width: 990px) {
    font-size: 18px;
    line-height: 111%;
  }
}

.button {
  align-self: flex-start;
  margin-top: auto;
}

.promo-button {
  z-index: 1;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  mix-blend-mode: overlay;
}
</style>
