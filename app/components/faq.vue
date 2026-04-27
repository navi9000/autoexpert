<script setup lang="ts">
const questionList = [
  {
    q: "Как проходит ремонт машины по страховке в 2022 году?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    q: "Могу ли я приехать к Вам в автосервис с уже купленными своими запчастями? Будет ли у меня гарантия на работу?",
    a: "Да, мы произведем работы по замене тех запчастей, которые вы уже приобрели и дадим гарантию на работы.",
  },
  {
    q: "Что будет, если качество работ меня не устроит?",
    a: "Если по какой-то причине вас не устроит качество произведенных работ, то вы можете сразу написать письмо находясь в автосервисе, и оно попадет напрямую к Директору. В зависимости от возникшей ситуации, мы с Вами примем решение, которое удовлетворит вас и нас.",
  },
]
const isOpen = ref([false, false, false])

const toggle = (index: number) => {
  isOpen.value = isOpen.value.map((value, i) => (i === index ? !value : value))
}
</script>

<template>
  <Container class="container">
    <div class="content">
      <Heading tag="h2">FAQ</Heading>
      <p class="subheading">Спрашивали — отвечаем</p>
      <div class="questionlist">
        <Accordion v-for="(item, index) in questionList" class="item">
          <template #question>
            <p class="question" @click="toggle(index)">{{ item.q }}</p>
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
            <p class="answer">{{ item.a }}</p>
          </template>
        </Accordion>
      </div>
    </div>
  </Container>
</template>

<style scoped>
.container {
  background: linear-gradient(180deg, #182430 0%, rgba(24, 36, 48, 0) 100%);
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-block: 20px;
  @media screen and (min-width: 900px) {
    gap: 20px;
    padding-block: 40px 124px;
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

.questionlist {
  width: 100%;
  margin-top: 22px;
  margin-bottom: 14px;
  @media screen and (min-width: 900px) {
    margin-top: 0;
    margin-bottom: 0;
  }
}

.question {
  font-weight: 700;
  font-size: 16px;
  line-height: 131%;
  color: var(--color-white);
  transition: color 300ms;
  padding-block: 20px;
  @media screen and (min-width: 900px) {
    font-size: 24px;
    line-height: 117%;
    padding-block: 42px 50px;
  }
}

.item:hover .question {
  color: var(--color-theme);
}

.item:not(:last-of-type) {
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
</style>
