<script setup lang="ts"></script>

<template>
  <Container tag="section">
    <div class="about-inlay">
      <div class="img-container">
        <img src="/img/mechanic 1.webp" alt="technician" class="img" />
      </div>
      <div class="text-wrapper">
        <Heading tag="h1" class="about-heading">О компании</Heading>
        <p>
          Лидер в сфере тюнинга и обслуживания автомобилей. На сегодняшний день
          компания обладает множеством международных достижений в области
          мощностного тюнинга и повышения производительности автомобилей. В
          течение многих лет работы компания обрела необходимые опыт и знания, а
          также привлекла настоящих профессионалов в области тюнинга и
          обслуживания автомобилей.
        </p>
        <p>
          Вне зависимости от первоначальной цели клиента, будь то масштабный
          тюнинг, или же необходимость сложного ремонта и обслуживания
          автомобиля, каждый наш гость неизменно наслаждается индивидуальным
          подходом как в общении, так и в решении поставленных задач.
        </p>
        <p>
          Компания организует работу таким образом, чтобы гости ощущали комфорт
          и дружественную атмосферу в совокупности с качественным подходом к
          Вашим автомобилям на всех этапах работы.
        </p>
      </div>
    </div>
  </Container>
</template>

<style scoped>
.container {
  margin-top: 96px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  padding-inline: 26px 24px;
  @media screen and (min-width: 900px) {
    background: initial;
  }
}

.about-inlay {
  --about-padding: 0;
  --about-top-offset: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  padding: var(--about-padding);
  overflow: hidden;
  @media screen and (min-width: 900px) {
    --about-padding: 20px;

    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.1) 100%
    );
  }
  @media screen and (min-width: 1420px) {
    --about-padding: 40px 40px 0;
    --about-top-offset: 212px;
    margin-inline: 74px;
    gap: 46px;
    grid-template-columns: clamp(1px, 42.4%, 700px) 1fr;
    background: linear-gradient(
      180deg,
      transparent var(--about-top-offset),
      rgba(255, 255, 255, 0.1) var(--about-top-offset),
      rgba(255, 255, 255, 0.1) 100%
    );
  }
}

.about-heading {
  font-size: 32px;
  @media screen and (min-width: 900px) {
    font-size: 48px;
  }
}

.text-wrapper {
  padding-block: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 20.5px;
  @media screen and (min-width: 900px) {
    padding-block: initial;
  }
  @media screen and (min-width: 1420px) {
    padding-block: var(--about-top-offset) 0;
    gap: 25.5px;
  }
}

.img-container {
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 400px;
  grid-row: 2 / 3;
  margin-inline: auto;
  display: flex;

  @media screen and (min-width: 1420px) {
    width: 100%;
    grid-row: 1 / 2;
    max-width: unset;
  }
}

.img {
  width: 100%;
  aspect-ratio: 0.7216;
}

p {
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  color: #fff;
  @media screen and (min-width: 900px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1620px) {
    font-size: 20px;
  }
}
</style>
