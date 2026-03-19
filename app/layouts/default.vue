<script setup lang="ts">
interface NavItem {
  label: string
  to: string
}
interface Props {
  nav: NavItem[]
}
const props = defineProps<Props>()
</script>

<template>
  <NuxtLayout name="container">
    <header class="header">
      <NuxtLink to="/" class="logo">Logo</NuxtLink>
      <div class="textwrapper">
        <a href="tel:00000000000" class="phone">+000 0000 00 00</a>
        <p class="hours">Ежедневно с 09:00 до 21:00</p>
      </div>
    </header>
  </NuxtLayout>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
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
</style>
