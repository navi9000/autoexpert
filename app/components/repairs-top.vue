<script setup lang="ts">
const list = [
  "Большой ассортимент услуг для вашего авто",
  "Индивидуальный подход",
]
const isLargeScreen = useIsLargeScreen()
const assetPath = useAssetPath()

const sectionBackground = {
  "--repairs-top-bg": `url("${assetPath("/img/services_bg.webp")}")`,
  "--repairs-top-car": `url("${assetPath("/img/white-car.webp")}")`,
}
</script>

<template>
  <Container tag="section" class="section" :style="sectionBackground">
    <div class="top-inlay">
      <h1 class="heading"><span>Услуги</span> нашего сервиса</h1>
      <ul class="list">
        <li v-for="item in list">{{ item }}</li>
      </ul>
      <Button filling="solid">Задать вопрос</Button>
    </div>
    <img
      v-if="isLargeScreen !== null && !isLargeScreen"
      :src="assetPath('/img/white-car.webp')"
      alt="car"
      class="car"
    />
  </Container>
</template>

<style scoped>
.section {
  background-image: var(--repairs-top-bg);
  background-size: 100% max-content;
  background-repeat: no-repeat;
  background-position: top 0% right 0%;
  padding-block: 77px 94px;
  overflow: hidden;

  @media screen and (min-width: 900px) {
    background-size:
      60%,
      50% 100%;
    background-image: var(--repairs-top-car), var(--repairs-top-bg);
    background-repeat: no-repeat, no-repeat;
    background-position:
      top 72% right 12%,
      top 0% right 0%;
    height: 100vh;
    padding-block: unset;
    padding-top: 0;
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
    gap: 62px;
    max-width: 36%;
  }
}

.car {
  max-height: 256px;
  object-fit: contain;
  transform: translateX(-30px);
  @media screen and (min-width: 500px) {
    transform: unset;
    object-position: top 0 right 0;
    margin-left: auto;
    display: block;
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
    font-size: 44px;
    line-height: 106%;
  }
  @media screen and (min-width: 1440px) {
    font-size: 72px;
  }
}
.heading span {
  color: var(--color-theme);
}

.list {
  list-style-image: linear-gradient(var(--color-theme));
  padding-block: 8px;
  padding-inline: 14px;
}

.list li {
  font-weight: 600;
  font-size: 14px;
  line-height: 132%;
  color: var(--color-white);
  &::marker {
    font-size: 1.2em;
    @media screen and (min-width: 900px) {
      font-size: 0.8em;
    }
    @media screen and (min-width: 1440px) {
      font-size: 0.7em;
    }
  }
  @media screen and (min-width: 900px) {
    font-size: 18px;
    line-height: 117%;
  }
  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }
}
</style>
