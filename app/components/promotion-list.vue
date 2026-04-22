<script setup lang="ts">
const isLargeScreen = useIsLargeScreen()

const list = [
  {
    title: "Вызов эвакуатора",
    description:
      "Организуем подачу эвакуатора.Сумма эвакуации фиксированная для автомобилей до 2,5 тонны",
    img: "/img/promotion-1.png",
  },
  {
    title: "Диагностика ходовой части автомобиля — бесплатно!",
    img: "/img/promotion-2.png",
  },
  {
    title: "Замена масла и масляного фильтра — в подарок!",
    img: "/img/promotion-3.png",
  },
]

const slides = ref(list)

const swiperRef = ref(null)
const swiper = useSwiper(swiperRef)
</script>

<template>
  <section class="section">
    <Container>
      <div class="heading-container">
        <Heading tag="h1">Акции</Heading>
        <p class="subheader">Все лучшее для наших клиентов</p>
      </div>
    </Container>
    <Container
      v-if="isLargeScreen !== null && !isLargeScreen"
      class="mobile-container"
    >
      <PromotionCard
        v-for="item in list"
        :title="item.title"
        :description="item?.description"
        :img-src="item.img"
      />
    </Container>
    <swiper-container
      v-else-if="isLargeScreen"
      :slides-per-view="3"
      :space-between="44"
      centered-slides
    >
      <swiper-slide
        v-for="item in slides"
        :key="item.title"
        class="slide-container"
      >
        <PromotionCard
          :title="item.title"
          :description="item?.description"
          :img-src="item.img"
        />
      </swiper-slide>
    </swiper-container>
    <img
      v-if="isLargeScreen !== null && !isLargeScreen"
      src="/img/background-circle.svg"
      alt="background"
      class="circles"
    />
    <img
      v-else-if="isLargeScreen"
      src="/img/background-circle-lg.svg"
      alt="background"
      class="circles"
    />
  </section>
</template>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-block: 129px 40px;
  position: relative;
  overflow: hidden;
  @media screen and (min-width: 900px) {
    gap: 70px;
    padding-block: 196px 318px;
  }
}
.heading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  @media screen and (min-width: 900px) {
    gap: 20px;
  }
}

.subheader {
  font-weight: 700;
  font-size: 16px;
  color: var(--color-white);
  @media screen and (min-width: 900px) {
    font-size: 24px;
  }
}

.mobile-container > * {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.circles {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
}
</style>
