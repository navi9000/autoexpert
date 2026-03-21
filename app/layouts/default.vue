<script setup lang="ts">
interface NavItem {
  label: string
  to: string
}
interface Props {
  nav: NavItem[]
}

const props = defineProps<Props>()

const menuIsOpen = ref(false)

const toggleMenu = () => {
  menuIsOpen.value = !menuIsOpen.value
}
</script>

<template>
  <NuxtLayout name="container">
    <header class="header">
      <NuxtLink to="/" class="logo">Logo</NuxtLink>
      <div class="textwrapper">
        <a href="tel:00000000000" class="phone">+000 0000 00 00</a>
        <p class="hours">Ежедневно с 09:00 до 21:00</p>
      </div>
      <Button variant="default" filling="transparent">Заказать звонок</Button>
    </header>
  </NuxtLayout>
  <Button variant="menu" class="menubutton" @click="toggleMenu">{{
    menuIsOpen ? "Закрыть" : "Меню"
  }}</Button>
  <nav
    class="menucontainer"
    :class="[{ [`menucontainer_hidden`]: !menuIsOpen }]"
  >
    <ul class="menulist">
      <li v-for="{ label, to } in nav" class="menulinkwrapper">
        <div class="menulinkinnerwrapper">
          <NuxtLink :to class="menulink" @click="toggleMenu">{{
            label
          }}</NuxtLink>
        </div>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-block: 28px;
  @media screen and (min-width: 990px) {
    gap: 20px;
  }
}
.logo {
  text-transform: uppercase;
  font-weight: 700;
  color: var(--color-theme);
  margin-right: auto;
}

.textwrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.phone {
  font-weight: 600;
  font-size: 20px;
  color: var(--color-theme);
}
.hours {
  font-size: 16px;
  color: var(--color-white);
}
.menubutton {
  position: fixed;
  transform-origin: right bottom;
  rotate: -90deg;
  top: 50%;
  right: 0;
  z-index: 15;
}

.menucontainer {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: var(--color-background-menu);
}

.menucontainer_hidden {
  translate: 100vw;
}

.menulist {
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
}

.menulinkwrapper {
  background: linear-gradient(to right, transparent, white, transparent);
}

.menulinkwrapper:not(:last-child) {
  border-bottom: 1px solid transparent;
}

.menulinkinnerwrapper {
  background-color: var(--color-background-menu);
  height: 100%;
  width: 100%;
  padding-block: 20px;
  display: flex;
  justify-content: center;
}

.menulink {
  font-weight: 700;
  font-size: 22px;
  text-transform: uppercase;
  color: var(--color-white);
  @media screen and (min-width: 990px) {
    font-size: 64px;
  }
}
</style>
