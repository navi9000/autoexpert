<template>
  <Container tag="section" class="container">
    <div class="heading-container">
      <Heading tag="h2">Наши услуги</Heading>
      <p class="subheading">Почему нам стоит довериться</p>
    </div>
    <swiper-container
      v-if="isLargeScreen !== null && !isLargeScreen"
      :slides-per-view="1"
      :space-between="20"
    >
      <swiper-slide v-for="item in list">
        <MainServiceCard :title="item.title" :description="item.description" />
      </swiper-slide>
    </swiper-container>
    <div v-else-if="isLargeScreen" class="grid">
      <MainServiceCard
        :title="list[0]!.title"
        :description="list[0]!.description"
      />
      <img src="/img/main_services_1.png" alt="services" class="img" />
      <MainServiceCard
        :title="list[1]!.title"
        :description="list[1]!.description"
      />
      <img src="/img/main_services_2.png" alt="services" class="img" />
      <MainServiceCard
        :title="list[2]!.title"
        :description="list[2]!.description"
      />
      <img src="/img/main_services_3.png" alt="services" class="img" />
    </div>
  </Container>
</template>

<style scoped>
.container {
  padding-block: 30px 0;

  @media screen and (min-width: 900px) {
    padding-block: 40px;
  }
}

.heading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 32px;
  @media screen and (min-width: 900px) {
    gap: 20px;
  }

  & > * {
    text-align: center;
  }
}

.subheading {
  font-weight: 700;
  font-size: 16px;
  color: var(--color-white);
  @media screen and (min-width: 900px) {
    font-size: 24px;
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  margin-top: 40px;
}

.img {
  width: 100%;
  object-fit: cover;
}
</style>

<script setup lang="ts">
const isLargeScreen = useIsLargeScreen()

const list = [
  {
    title: "Подбор автомобиля под ключ",
    description:
      "Ищем подходящие машины, проверяем технически, торгуемся с продавцами",
  },
  {
    title: "Дистанционная покупка автомобиля",
    description: "Безопасный выкуп автомобиля. Организуем доставку по Кипру",
  },
  {
    title: "Полная проверка автомобиля",
    description:
      "Проводим техническую проверку, используем до 12 видов оборудования плюс осматриваем авто на подъемнике",
  },
]

const slides = ref(list)
const swiperRef = ref(null)
const swiper = useSwiper(swiperRef)
</script>
