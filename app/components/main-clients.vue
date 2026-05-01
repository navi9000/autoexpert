<script setup lang="ts">
const assetPath = useAssetPath()

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
        <img :src="assetPath('/img/clients_car.webp')" alt="car" class="img" />
        <div class="content">
          <div class="top-section">
            <div class="location-container">
              <img :src="assetPath('/img/map-marker.svg')" alt="pointer" class="pointer" />
              <span class="location">Лимассол</span>
            </div>
            <div class="pagination-container"></div>
          </div>
          <div class="heading-container">
            <h3 class="h3">Проверили Lexus NX 200t в редком синем цвете</h3>
            <p class="line">
              В рамках услуги “Подбор автомобиля под ключ” в Лимассоле был
              осмотрен автомобиль Lexus LX 570
            </p>
          </div>

          <div class="result-container">
            <h4 class="h4">Результат</h4>
            <p class="line">
              Данный автомобиль мы рекомендовали к покупке, так как был сделан
              рестайлинг с 12 года. Видно, что машину обслуживали. Красивый и
              редкий синий цвет.
            </p>
          </div>
          <div class="list-container">
            <div v-for="item in list" class="list-item">
              <p class="item-title">{{ item.title }}</p>
              <p class="item-description">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img :src="assetPath('/img/main-page-circle.svg')" alt="circle" class="circle" />
  </Container>
</template>

<style scoped>
.container {
  padding-block: 20px;
  position: relative;
  @media screen and (min-width: 1440px) {
    padding-block: 40px 70px;
  }
}
.inner-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media screen and (min-width: 1440px) {
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

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 1472px;
    width: 100%;
  }
}

.img {
  height: 276px;
  width: 100%;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    height: 420px;
  }

  @media screen and (min-width: 1440px) {
    height: inherit;
  }
}

.content {
  padding: 20px;
  background: linear-gradient(121deg, #010911 0%, rgba(5, 13, 21, 0) 100%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media screen and (min-width: 1024px) {
    padding: 30px;
    gap: 20px;
  }
  @media screen and (min-width: 1660px) {
    padding: 40px;
  }
}

.top-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.heading-container {
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 4px;
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

.pagination-container {
  height: 40px;
  width: 1px;
}

.pointer {
  width: 20px;
  height: 20px;
  @media screen and (min-width: 1024px) {
    width: 24px;
    height: 24px;
  }
}

.location {
  font-weight: 700;
  font-size: 14px;
  line-height: 143%;
  color: var(--color-theme);
  @media screen and (min-width: 1024px) {
    font-size: 16px;
    line-height: 125%;
  }
}

.h3 {
  font-size: 24px;
  color: var(--color-white);
  @media screen and (min-width: 1024px) {
    font-size: 28px;
  }
  @media screen and (min-width: 1660px) {
    font-size: 32px;
  }
}

.line {
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  color: var(--color-white);
  @media screen and (min-width: 1024px) {
    font-size: 18px;
    line-height: 135%;
  }
}

.result-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-block: 10px;
  @media screen and (min-width: 1024px) {
    padding-block: 0;
  }
  @media screen and (min-width: 1660px) {
    padding-block: 20px;
  }
}

.h4 {
  font-size: 20px;
  color: var(--color-theme);
}

.list-container {
  display: flex;
  flex-direction: column;
  gap: 18px;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    width: 100%;
    margin-top: 10px;
    & > * {
      flex: 1;
    }
  }
  @media screen and (min-width: 1660px) {
    margin-top: 36px;
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

  @media screen and (min-width: 1024px) {
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
  max-width: 140px;
}

.list-item:not(:nth-of-type(2)) .item-description {
  font-size: 24px;
}

.circle {
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
}
</style>
