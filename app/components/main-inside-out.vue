<template>
  <Container tag="section" class="container">
    <div class="heading-container">
      <Heading tag="h2">Видим автомобиль насквозь</Heading>
      <p class="subheading">Что мы проверяем в автомобиле</p>
    </div>
    <div v-if="isLargeScreen !== null && !isLargeScreen" class="list-container">
      <Accordion v-for="(item, index) in list" class="accordion-item">
        <template #question>
          <div class="question-container">
            <img :src="item.icon" alt="icon" class="icon" />
            <p class="question">{{ item.title }}</p>
          </div>
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
    </div>
    <div v-else-if="isLargeScreen" class="list-container">
      <img src="/img/car_inside_out.png" alt="car" class="car" />
      <div>
        <div
          v-for="(item, index) in list.slice(0, 6)"
          class="accordion-item"
          @mouseenter="toggleOnLargeScreen(index)"
          @mouseleave="toggleOnLargeScreen(index)"
        >
          <div class="question-container">
            <img :src="item.icon" alt="icon" class="icon" />
            <p class="question">{{ item.title }}</p>
          </div>
          <Transition name="answerwrapper">
            <p class="answer" v-if="isOpenOnLargeScreen[index]">
              {{ item.description }}
            </p>
          </Transition>
        </div>
      </div>
      <div>
        <div
          v-for="(item, index) in list.slice(6, 12)"
          class="accordion-item"
          @mouseenter="toggleOnLargeScreen(index + 6)"
          @mouseleave="toggleOnLargeScreen(index + 6)"
        >
          <div class="question-container">
            <img :src="item.icon" alt="icon" class="icon" />
            <p class="question">{{ item.title }}</p>
          </div>
          <Transition name="answerwrapper">
            <p class="answer" v-if="isOpenOnLargeScreen[index + 6]">
              {{ item.description }}
            </p>
          </Transition>
        </div>
      </div>
    </div>
  </Container>
</template>

<style scoped>
.container {
  background: linear-gradient(180deg, #182430 0%, rgba(24, 36, 48, 0) 100%);
  padding-block: 20px;

  @media screen and (min-width: 900px) {
    padding-block: 40px 80px;
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

.list-container {
  margin-top: 10px;
  @media screen and (min-width: 900px) {
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 40px;
    padding-top: 42px;
    margin-bottom: 54px;
  }
}

.car {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  height: 706px;
  width: 345px;
}

.accordion-item {
  padding-block: 9.8px;
  &:not(:last-of-type) {
    border-bottom: 1px solid var(--color-white);
  }
  @media screen and (min-width: 900px) {
    padding-block: 18px;
  }
}

.question-container {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 10px;

  @media screen and (min-width: 900px) {
    gap: 20px;
    padding-inline: 218px;
  }
}

.question {
  font-weight: 700;
  font-size: 16px;
  color: var(--color-theme);

  @media screen and (min-width: 900px) {
    font-size: 22px;
  }
}

.icon {
  height: 40px;
  width: 40px;
  @media screen and (min-width: 900px) {
    height: 64px;
    width: 64px;
  }
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
  margin-top: 10px;
  font-weight: 600;
  font-size: 14px;
  line-height: 136%;
  color: var(--color-white);
  overflow: hidden;
  @media screen and (min-width: 900px) {
    padding-inline: 218px;
  }
}

.answerwrapper-enter-active,
.answerwrapper-leave-active {
  transition: 500ms ease-in;
  max-height: 1024px;
  height: auto;
}

.answerwrapper-enter-from {
  max-height: 0;
  transition: 500ms ease-out;
}

.answerwrapper-leave-to {
  max-height: 0;
  transition: 250ms ease-out;
}
</style>

<script setup lang="ts">
const list = [
  {
    title: "Двигатель",
    description:
      "Важнейшая деталь вашего автомобиля, требующая особого подхода. В проверке мы используем 5 видов оборудования, чтобы узнать всё о сердце вашего автомобиля.",
    icon: "/img/inside_out_1.svg",
  },
  {
    title: "Кузов",
    description:
      'Самая дорогая и влияющая на безопасность деталь автомобиля. Кузов проверяется на "распил", предмет участия в ДТП, перекрасов, ремонта. Используется толщиномер и дефектоскоп металла для поиска незаводских сварных швов.',
    icon: "/img/inside_out_2.svg",
  },
  {
    title: "Проверка трансмиссии и сцепления",
    description:
      "В автомобилях с АКПП и вариаторах электрическая часть этих узлов проверяется диагностическим сканером, механическая часть проверяется тест-драйвом и осмотром на подъемнике.",
    icon: "/img/inside_out_3.svg",
  },
  {
    title: "Проверка электронных систем дианостическим сканером",
    description:
      "Проверка проводится профессиональным диагностическим сканером LAUNCH X431PRO. Проверяются все доступные узлы автомобиля, считываются ошибки, показания датчиков во время работы двигателя.",
    icon: "/img/inside_out_4.svg",
  },
  {
    title: "Системы безопасности",
    description:
      "Узел автомобиля, непосредственно отвечающий за вашу жизнь. Электроника систем безопасности проверяется диагностическим сканером. Пассивная безопасность проверяется в рамках проверки кузова.",
    icon: "/img/inside_out_5.svg",
  },
  {
    title: "Компьютерная диагностика",
    description:
      "Показывает 90% неисправностей двигателя, коробки передач и бортовой электросети",
    icon: "/img/inside_out_6.svg",
  },
  {
    title: "Тормозная система и ходовая часть",
    description:
      "Очень важный узел, влияющий на безопасность. Проверка выполняется на подъемнике и при тест-драйве.",
    icon: "/img/inside_out_7.svg",
  },
  {
    title: "Проверка салонной электроники",
    description:
      "На данном этапе проверяются - климат-контроль, подъемники стекол, лампочки, сигнал, указатели поворотов. В общем все кнопочки и переключатели, которые есть в салоне.",
    icon: "/img/inside_out_8.svg",
  },
  {
    title: "Проверка салона",
    description:
      "Проверяется состояние салона - сидения, обшивки, панели, багажный отсек. Существенные недостатки отмечаются в отчете.",
    icon: "/img/inside_out_9.svg",
  },
  {
    title: "Турбина",
    description:
      "Очень дорогостоящий в ремонте элемент. Турбина проверяется на нагнетание требуемого давления, люфты (при возможности) и на потеки ОЖ и/или масла.",
    icon: "/img/inside_out_10.svg",
  },
  {
    title: "Топливный насос высокого давления",
    description:
      "Для дизельных двигателей и бензиновых двигателей это важный этап проверки, т.к. ремонт топливной аппаратуры очень дорогой. Диагностическим сканером проверяется давление ТНВД и сравнивается с номинальным значением.",
    icon: "/img/inside_out_11.svg",
  },
  {
    title: "Тест-драйв",
    description:
      "На тест-драйве проверяются - двигатель, трансмиссия, тормозная система и рулевое управление. Проверка выполняется в различных режимах работы, чтобы выявить все возможные неисправности.",
    icon: "/img/inside_out_12.svg",
  },
]

const isOpen = ref(list.map(() => false))

const toggle = (index: number) => {
  isOpen.value = isOpen.value.map((value, i) => (i === index ? !value : value))
}

const isOpenOnLargeScreen = ref(list.map(() => false))

const toggleOnLargeScreen = (index: number) => {
  isOpenOnLargeScreen.value = isOpenOnLargeScreen.value.map((value, i) =>
    i === index ? !value : value,
  )
}

const isLargeScreen = useIsLargeScreen()
</script>
