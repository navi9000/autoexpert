<script setup lang="ts">
const list = [
  {
    title: "Сэкономили",
    description: "10 000€",
  },
  {
    title: "Наша оценка",
    description: "Рекомендован к покупке",
  },
  {
    title: "Стоимость автомобиля",
    description: "40 760€",
  },
]
</script>

<template>
  <Container tag="section">
    <div class="inner-container">
      <Heading tag="h2" class="heading"
        >Реальные истории наших клиентов</Heading
      >
      <div class="card">
        <img src="/img/clients_car.png" alt="car" class="img" />
        <div class="content">
          <div class="location-container">
            <img src="/img/map-marker.svg" alt="pointer" class="pointer" />
            <span class="location">Лимасол</span>
          </div>
          <h3 class="h3">Проверили Lexus NX 200t в редком синем цвете</h3>
          <p class="line">
            В рамках услуги “Подбор автомобиля под ключ” в Лимассоле был
            осмотрен автомобиль Lexus LX 570
          </p>
          <h4 class="h4">Результат</h4>
          <p class="line">
            Данный автомобиль мы рекомендовали к покупке, так как был сделан
            рестайлинг с 12 года. Видно, что автомобиль обслуживался. Красивый и
            редкий синий цвет.
          </p>
          <div class="list-container">
            <div v-for="item in list" class="list-item">
              <p class="item-title">{{ item.title }}</p>
              <p class="item-description">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>

<style scoped>
.container {
  padding-block: 20px;
  @media screen and (min-width: 900px) {
    padding-block: 40px;
  }
}
.inner-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 900px) {
    gap: 40px;
  }
}

.heading {
  text-align: center;
}

.card {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.img {
  height: 276px;
  width: 100%;
  object-fit: cover;

  @media screen and (min-width: 900px) {
    height: inherit;
  }
}

.content {
  padding: 20px;
  background: linear-gradient(121deg, #010911 0%, rgba(5, 13, 21, 0) 100%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media screen and (min-width: 900px) {
    padding: 40px;
  }
}

.location-container {
  border-radius: 8px;
  padding: 5px 10px;
  background: linear-gradient(
    142deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(45, 205, 255, 0.1) 100%
  );
  display: flex;
  align-items: center;
  gap: 10px;
  width: max-content;
}

.pointer {
  width: 20px;
  height: 20px;
  @media screen and (min-width: 900px) {
    width: 24px;
    height: 24px;
  }
}

.location {
  font-weight: 700;
  font-size: 14px;
  line-height: 143%;
  color: var(--color-theme);
  @media screen and (min-width: 900px) {
    font-size: 16px;
    line-height: 125%;
  }
}

.h3 {
  font-size: 24px;
  color: var(--color-white);
  @media screen and (min-width: 900px) {
    font-size: 32px;
  }
}

.line {
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  color: var(--color-white);
  @media screen and (min-width: 900px) {
    font-size: 18px;
  }
}

.h4 {
  font-size: 20px;
  color: var(--color-theme);
}

.list-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 900px) {
    flex-direction: row;
    width: 100%;
    & > * {
      flex: 1;
    }
  }
}

.list-item {
  border-radius: 8px;
  background: #161e26;
  padding: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media screen and (min-width: 900px) {
    justify-content: center;
    width: 100%;
    height: 125px;
  }
}

.item-title {
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  color: var(--color-theme);
}

.item-description {
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  color: var(--color-white);
}
</style>
