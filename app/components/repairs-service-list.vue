<script setup lang="ts">
const isLargeScreen = useIsLargeScreen()

const list = [
  {
    title: "Обслуживание и ремонт двигателя",
    description:
      "Ремонт двигателя и комплектующих. Обслуживание навесного оборудования и систем а/с",
    img: "/img/services-1.webp",
  },
  {
    title: "Обслуживание трансмиссии",
    description:
      "Диагностика, ремонт и замена любых коробок передач и систем полного привода",
    img: "/img/services-2.webp",
  },
  {
    title: "Работы с подвеской",
    description:
      "Диагностика, ремонт и настройка подвески. Регулировка углов установки колес",
    img: "/img/services-3.webp",
  },
  {
    title: "Детейлинг",
    description: "Комплекс специализированных процедур по уходу за автомобилем",
    img: "/img/services-4.webp",
  },
  {
    title: "Компьютерная диагностика",
    description:
      "Показывает 90% неисправностей двигателя, коробки передач и бортовой электросети",
    img: "/img/services-5.webp",
  },
  {
    title: "Кузовной ремонт",
    description:
      "Восстановление целостности кузовных элементов, замена отдельных кузовных деталей, покраска автомобиля",
    img: "/img/services-6.webp",
  },
  {
    title: "Малярные работы",
    description:
      "Даже маленькая царапина, которая пробила слой лака, губительна для любой детали кузова автомобиля",
    img: "/img/services-7.webp",
  },
  {
    title: "Тормозная система",
    description:
      "Полностью доверять своему автомобилю можно лишь тогда, когда в исправности его тормозной системы нет сомнений",
    img: "/img/services-8.webp",
  },
  {
    title: "Техобслуживание автомобиля",
    description:
      "Техническое обслуживание автомобиля является неотъемлемой частью эксплуатации",
    img: "/img/services-9.webp",
  },
]

const isOpen = ref(list.map(() => false))

const toggle = (index: number) => {
  isOpen.value = isOpen.value.map((value, i) => (i === index ? !value : value))
}
</script>

<template>
  <Container tag="section">
    <div class="inner-inlay">
      <Heading tag="h2">Услуги</Heading>
      <Accordion
        v-if="isLargeScreen !== null && !isLargeScreen"
        v-for="(item, index) in list"
        class="accordion"
      >
        <template #question>
          <p class="question" @click="toggle(index)">{{ item.title }}</p>
        </template>
        <template #icon>
          <img
            src="/img/plus.svg"
            alt="plus"
            class="img"
            :class="isOpen[index] ? 'img_rotate' : ''"
            @click="toggle(index)"
          />
        </template>
        <template #answer>
          <p class="answer">{{ item.description }}</p>
        </template>
      </Accordion>
      <div v-else-if="isLargeScreen" class="grid">
        <ServiceCard
          v-for="item in list"
          :title="item.title"
          :description="item.description"
          :img-src="item.img"
        />
      </div>
    </div>
  </Container>
</template>

<style scoped>
.inner-inlay {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 20px;
  @media screen and (min-width: 900px) {
    padding-block: 50px;
    gap: 40px;
  }
}

.accordion {
  width: 100%;
}

.question {
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;
  color: var(--color-theme);
  transition: color 300ms;
  padding-block: 16px;
  @media screen and (min-width: 900px) {
    font-size: 24px;
    line-height: 117%;
    padding-block: 40px;
  }
}

.accordion:not(:last-of-type) {
  border-bottom: 1px solid var(--color-theme);
}

.img {
  transition: 500ms;
  height: 20px;
  width: 20px;
  @media screen and (min-width: 900px) {
    height: 34px;
    width: 34px;
  }
}

.img_rotate {
  rotate: 45deg;
}

.answer {
  font-size: 18px;
  line-height: 128%;
  color: var(--color-white);
  padding-bottom: 20px;
  @media screen and (min-width: 900px) {
    padding-bottom: 40px;
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }
}
</style>
