<script setup lang="ts"></script>

<template>
  <Container tag="section">
    <div class="about-inlay">
      <div class="text-wrapper">
        <Heading tag="h1">О компании</Heading>
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
      <div class="img-container">
        <img src="~/assets/img/mechanic 1.png" alt="technician" class="img" />
      </div>
    </div>
  </Container>
</template>

<style scoped>
.container {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  @media screen and (min-width: 900px) {
    background: initial;
  }
}

.about-inlay {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  @media screen and (min-width: 900px) {
    grid-template-columns: 400px 1fr;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.1) 100%
    );
  }
  @media screen and (min-width: 1420px) {
    grid-template-columns: 700px 1fr;
  }
}

.text-wrapper {
  padding-block: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.img-container {
  position: relative;
  height: 100%;
  width: 100%;

  @media screen and (min-width: 900px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
}

.img {
  width: 100%;
  aspect-ratio: 0.7216;

  @media screen and (min-width: 900px) {
    position: absolute;
    height: calc(100% + 100px);
    left: 0;
    bottom: 0;
    object-fit: cover;
  }
  @media screen and (min-width: 1420px) {
    height: calc(100% + 200px);
  }
}

p {
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  color: #fff;
  @media screen and (min-width: 900px) {
    font-size: 20px;
  }
}
</style>
