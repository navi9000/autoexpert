<script setup lang="ts">
const list = [
  "Большой ассортимент услуг для вашего авто",
  "Индивидуальный подход",
]
const isLargeScreen = useIsLargeScreen()
</script>

<template>
  <Container tag="section" class="section">
    <img
      v-if="isLargeScreen"
      src="~/assets/img/white-car.png"
      alt="car"
      class="car"
    />
    <div class="top-inlay">
      <h1 class="heading"><span>Услуги</span> нашего сервиса</h1>
      <ul class="list">
        <li v-for="item in list">{{ item }}</li>
      </ul>
      <Button filling="solid">Задать вопрос</Button>
    </div>
  </Container>
</template>

<style scoped>
.section {
  background-image: url("~/assets/img/services_bg.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: top 0% right 0%;
  height: 100vh;
  @media screen and (min-width: 900px) {
    background-size: 50%;
  }
}

.top-inlay {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
}

.car {
  order: 2;
  @media screen and (min-width: 900px) {
    order: initial;
    float: right;
    width: 60%;
    translate: 0 50%;
  }
}

.heading {
  font-weight: 700;
  font-size: 32px;
  line-height: 116%;
  text-transform: uppercase;
  max-width: 7em;
  color: var(--color-white);
  @media screen and (min-width: 900px) {
    font-size: 72px;
    line-height: 106%;
  }
}
.heading span {
  color: var(--color-theme);
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
