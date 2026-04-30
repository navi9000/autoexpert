<script setup lang="ts">
interface Props {
  title: string
  description: string
}

const { title, description } = defineProps<Props>()
</script>

<template>
  <article class="card">
    <h3 class="title">{{ title }}</h3>
    <p class="description">{{ description }}</p>
    <Button filling="solid" class="card-button">Подробнее</Button>
  </article>
</template>

<style scoped>
.card {
  border-radius: 8px;
  width: 100%;
  height: 272px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  @media screen and (min-width: 900px) {
    border-radius: 0;
    aspect-ratio: 1;
    height: 100%;
    align-items: flex-start;
    gap: 18px;
  }

  /* @media screen and (min-width: 1024px) {
    padding: 60px 20px 20px;
  } */

  @media screen and (min-width: 1640px) {
    align-items: flex-start;
    padding: clamp(1px, 40%, 212px) 40px 40px;
    gap: 38px;
  }
}

.title {
  font-weight: 700;
  font-size: 24px;
  color: var(--color-white);
  text-align: center;

  @media screen and (min-width: 900px) {
    text-align: initial;
  }

  @media screen and (min-width: 1024px) {
    font-size: 28px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
}

.description {
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  color: var(--color-white);
  text-align: center;
  @media screen and (min-width: 900px) {
    text-align: initial;
    line-height: 119%;
  }
  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }
}

.card-button {
  @media screen and (min-width: 1440px) {
    margin-top: auto;
  }
}
</style>
