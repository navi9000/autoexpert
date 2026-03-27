<template>
  <section class="section">
    <img src="~/assets/img/blue-car.png" alt="car" class="bg" />
    <Container>
      <div class="section-inlay">
        <Heading tag="h2" class="h2">Не нашли,<br />что искали?</Heading>
        <p class="text">
          Оставьте заявку. Мы обязательно свяжемся с вами в ближайшее время и
          решим все вопросы
        </p>
        <Button filling="solid">Оставить звонок</Button>
      </div>
    </Container>
  </section>
</template>
<style scoped>
.section {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 50px;
  @media screen and (min-width: 900px) {
    display: block;
    flex-direction: unset;
    gap: unset;
  }
}
.bg {
  order: 2;
  @media screen and (min-width: 900px) {
    order: unset;
    float: right;
    clear: right;
    width: calc(100% - 440px);
    height: auto;
    shape-outside: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
    shape-margin: 0;
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
}
</style>
