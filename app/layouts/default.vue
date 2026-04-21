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

const isLargeScreen = useIsLargeScreen()
</script>

<template>
  <Container class="header-container">
    <header class="header">
      <NuxtLink to="/" class="logo">Logo</NuxtLink>
      <div class="textwrapper" v-if="isLargeScreen">
        <a href="tel:00000000000" class="phone">+000 0000 00 00</a>
        <p class="hours">Ежедневно с 09:00 до 21:00</p>
      </div>
      <Button variant="default" filling="transparent" v-if="isLargeScreen"
        >Заказать звонок</Button
      >
    </header>
  </Container>
  <Button variant="menu" class="menubutton" @click="toggleMenu">{{
    menuIsOpen ? "Закрыть" : "Меню"
  }}</Button>
  <Transition name="navmenu">
    <nav v-if="menuIsOpen" class="menucontainer">
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
  </Transition>
  <slot />
</template>

<style scoped>
.header-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

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
  margin-inline: auto;
  font-size: 36px;

  @media screen and (min-width: 900px) {
    margin-inline: unset;
    margin-right: auto;
    font-size: 16px;
  }
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
  z-index: 10;
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
  transition: all 300ms;
  @media screen and (min-width: 990px) {
    font-size: 64px;
  }
  &:hover {
    color: var(--color-theme);
    text-shadow: 0 0 14px 0 rgba(45, 205, 255, 0.68);
  }
}

.navmenu-enter-active,
.navmenu-leave-active {
  transition: 300ms;
}

.navmenu-enter-from,
.navmenu-leave-to {
  translate: 100vw 0;
}
</style>
