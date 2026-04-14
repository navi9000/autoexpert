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
    <Container v-if="isLargeScreen !== null && !isLargeScreen">
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
      :space-between="100"
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
  </section>
</template>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-block: 40px;
  @media screen and (min-width: 900px) {
    gap: 70px;
  }
}
.heading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  @media screen and (min-width: 900px) {
    gap: 30px;
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
</style>
