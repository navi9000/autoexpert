<script setup lang="ts">
interface Props {
  title?: string
}

const { title = "Контакты" } = defineProps<Props>()
const isContactsPage = title === "Контакты"
const screenWidth = ref(window?.innerWidth)
const assetPath = useAssetPath()

const handleResize = () => {
  screenWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener("resize", handleResize)
})

onUnmounted(() => {
  window.removeEventListener("resize", handleResize)
})
</script>

<template>
  <section
    class="container"
    :class="{
      ['container_bottom-block']: !isContactsPage,
      ['container_contacts-page']: isContactsPage,
    }"
  >
    <Heading tag="h2" v-if="!isContactsPage">{{ title }}</Heading>
    <div class="content">
      <div class="text-content">
        <Heading tag="h2" v-if="isContactsPage" class="heading_contacts">{{
          title
        }}</Heading>
        <div class="contact-list">
          <LabeledIcon
            :icon-src="assetPath('/img/marker-pin.svg')"
            label="First avenue, 0, city name, country name"
          />
          <LabeledIcon
            :icon-src="assetPath('/img/compass.svg')"
            label="Как добраться на автомобиле?"
          />
          <LabeledIcon
            :icon-src="assetPath('/img/phone.svg')"
            label="+000 0000 00 00"
          />
          <LabeledIcon
            :icon-src="assetPath('/img/mail.svg')"
            label="mail@mail.com"
          />
        </div>
        <Button filling="solid" class="contacts-button">Заказать звонок</Button>
      </div>

      <div v-if="screenWidth >= 1420" class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13125.537202067273!2d33.02439743428457!3d34.670249115296656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14e732508c6dc73d%3A0xa2000abd57ccf29f!2sFragklinou%20Rousvelt%20-%20Social%20Insurance!5e0!3m2!1sen!2sge!4v1777699123251!5m2!1sen!2sge"
          width="100%"
          height="100%"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 42px;
  padding: 30px 20px;
  width: 100%;
  @media screen and (min-width: 900px) {
    padding: 50px 150px;
  }
}

.container_bottom-block {
  background: linear-gradient(180deg, #182430 0%, rgba(24, 36, 48, 0) 100%);
}

.container_contacts-page {
  padding: 130px 20px 20px;
  @media screen and (min-width: 900px) {
    padding: 160px 150px 50px;
  }
}

.content {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media screen and (min-width: 1440px) {
    grid-template-columns: 1fr 849px;
  }
}

.text-content {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.heading_contacts {
  justify-self: center;
  margin-bottom: 20px;
  @media screen and (min-width: 900px) {
    justify-self: initial;
    margin-bottom: 40px;
  }
}

.contact-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 900px) {
    gap: 40px;
  }
}

.map {
  width: 849px;
  height: 597px;
  background-color: grey;
}

.contacts-button {
  margin-top: 40px;
  align-self: center;
  @media screen and (min-width: 900px) {
    align-self: flex-start;
  }
}
</style>
