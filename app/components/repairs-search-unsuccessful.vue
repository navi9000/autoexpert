<template>
  <Container tag="section">
    <div class="section-inlay">
      <div class="text-container">
        <Heading tag="h2" class="h2">Не нашли,<br />что искали?</Heading>
        <p class="text">
          Оставьте заявку. Мы обязательно свяжемся с вами в ближайшее время и
          решим все вопросы
        </p>
        <Button filling="solid">Оставить звонок</Button>
      </div>
      <img src="/img/technicians.png" alt="technicians" class="img" />
    </div>
  </Container>
</template>

<style scoped>
.section-inlay {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  margin-inline: auto;

  @media screen and (min-width: 900px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    max-width: unset;
    margin-inline: initial;
    gap: 10px;
  }
}

.text-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  @media screen and (min-width: 900px) {
    margin-block: auto;
    align-items: initial;
  }
}

.text {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-white);
  max-width: 240px;
}

.img {
  max-height: 373px;
  width: auto;
  margin-inline: auto;
  @media screen and (min-width: 900px) {
    max-height: 480px;
    margin-inline: initial;
  }
  @media screen and (min-width: 1420px) {
    max-height: 785px;
  }
}
</style>
