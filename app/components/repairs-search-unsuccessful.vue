<template>
  <Container tag="section" class="section">
    <div class="section-inlay">
      <div class="text-container">
        <Heading tag="h2" class="h2">Не нашли,<br />что искали?</Heading>
        <p class="text">
          Оставьте заявку. Мы обязательно свяжемся с вами в ближайшее время и
          решим все вопросы
        </p>
        <Button filling="solid">Оставить звонок</Button>
      </div>
      <img src="/img/technicians.webp" alt="technicians" class="img" />
    </div>
    <img src="/img/repairs_circle.svg" alt="bg" class="circle" />
  </Container>
</template>

<style scoped>
.section {
  overflow: hidden;
  padding-top: 16px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  position: relative;
  @media screen and (min-width: 900px) {
    padding-top: 0;
  }
  @media screen and (min-width: 1440px) {
    padding-inline: 236px;
  }
}
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

    button {
      width: max-content;
    }
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
  @media screen and (min-width: 900px) {
    max-height: 480px;
  }
  @media screen and (min-width: 1420px) {
    max-height: 785px;
  }
}

.circle {
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
}
</style>
