<script setup lang="ts">
const isLargeScreen = useIsLargeScreen()
</script>

<template>
  <section class="section">
    <img src="/img/blue-car.png" alt="car" class="bg" />
    <Container v-if="isLargeScreen !== null && !isLargeScreen">
      <div class="section-inlay">
        <Heading tag="h2" class="h2">Не нашли,<br />что искали?</Heading>
        <p class="text">
          Оставьте заявку. Мы обязательно свяжемся с вами в ближайшее время и
          решим все вопросы
        </p>
        <Button filling="solid">Оставить звонок</Button>
      </div>
    </Container>
    <div v-else-if="isLargeScreen" class="container-large">
      <Heading tag="h2" class="h2">Не нашли,<br />что искали?</Heading>
      <p class="text">
        Оставьте заявку. Мы обязательно свяжемся с вами в ближайшее время и
        решим все вопросы
      </p>
      <Button filling="solid">Оставить звонок</Button>
    </div>
  </section>
</template>
<style scoped>
.section {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 50px;
  overflow: hidden;
  padding-bottom: 16px;
  @media screen and (min-width: 900px) {
    display: block;
    flex-direction: unset;
    gap: unset;
    padding-bottom: initial;
  }
}
.bg {
  order: 2;
  height: 230px;
  object-fit: cover;
  object-position: left 0 top 50%;
  transform: translateX(12px);
  @media screen and (min-width: 900px) {
    object-fit: unset;
    object-position: unset;
    transform: unset;
    order: unset;
    float: right;
    clear: right;
    width: calc(100% - 440px);
    height: auto;
    shape-outside: url("/img/blue-car.png");
    shape-margin: 70px;
  }
}

.section-inlay {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  max-width: 240px;
  margin-inline: auto;

  @media screen and (min-width: 900px) {
    align-items: flex-start;
    justify-content: initial;
    max-width: unset;
    margin-inline: initial;
    gap: 10px;
  }
}

.section-inlay * {
  text-align: center;
  @media screen and (min-width: 900px) {
    text-align: initial;
  }
}

.text {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-white);
  max-width: 240px;

  @media screen and (min-width: 900px) {
    max-width: unset;
    font-size: 24px;
    margin-bottom: 40px;
  }
}

.h2 {
  @media screen and (min-width: 900px) {
    margin-bottom: 10px;
  }
}

.container-large {
  padding-left: 100px;
}
</style>
