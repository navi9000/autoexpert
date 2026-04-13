<script setup lang="ts">
const isLargeScreen = useIsLargeScreen()

const list = ["Техническая проверка", "Выездная проверка"]
</script>

<template>
  <Container tag="section" class="section">
    <div class="top-inlay">
      <h1 class="heading">
        <span>Помощь<br />при</span> покупке<br />автомобиля
      </h1>
      <p class="subheading">
        Подбор и проверка любых авто, включая гибридные и электрические
      </p>
      <ul class="list">
        <li v-for="item in list">{{ item }}</li>
      </ul>
      <Button filling="solid">Задать вопрос</Button>
    </div>
    <img
      v-if="isLargeScreen !== null && !isLargeScreen"
      src="/img/gray_car.png"
      alt="car"
      class="car"
    />
  </Container>
</template>

<style scoped>
.section {
  background-image: url("/img/main_top_bg.png");
  background-size: 100% max-content;
  background-repeat: no-repeat;
  background-position: top 0% right 0%;

  @media screen and (min-width: 900px) {
    background-size:
      60%,
      50% 100%;
    background-image: url("/img/gray_car.png"), url("/img/main_top_bg.png");
    background-repeat: no-repeat, no-repeat;
    background-position:
      top 50% right 0%,
      top 0% right 0%;
    height: 100vh;
  }
}

.top-inlay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  padding-block: 40px;
  @media screen and (min-width: 900px) {
    height: 100vh;
    padding-block: initial;
  }
}

.car {
  width: 100%;
  height: auto;
  max-height: 256px;
  object-fit: contain;
  object-position: top 50% right 0%;
}

.heading {
  font-weight: 700;
  font-size: 32px;
  line-height: 116%;
  text-transform: uppercase;
  max-width: 8em;
  color: var(--color-white);
  @media screen and (min-width: 900px) {
    font-size: 72px;
    line-height: 106%;
  }
}
.heading span {
  color: var(--color-theme);
}

.subheading {
  font-weight: 600;
  font-size: 16px;
  line-height: 131%;
  color: var(--color-white);
  @media screen and (min-width: 900px) {
    font-size: 24px;
    line-height: 117%;
  }
}

.list {
  list-style-position: inside;
  list-style-image: linear-gradient(var(--color-theme));
}

.list li {
  font-weight: 600;
  font-size: 14px;
  line-height: 200%;
  color: var(--color-white);
  @media screen and (min-width: 900px) {
    font-size: 24px;
    line-height: 117%;
  }
}
</style>
