<script setup lang="ts">
const nav = [
  {
    label: "Подбор авто",
    to: "/",
  },
  {
    label: "Услуги по ремонту",
    to: "/repairs",
  },
  {
    label: "Акции",
    to: "/promotions",
  },
  {
    label: "О компании",
    to: "/about",
  },
  {
    label: "Контакты",
    to: "/contacts",
  },
]
</script>

<template>
  <NuxtLayout :nav>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
:root {
  --color-theme: #2dcdff;
  --color-white: #ffffff;
  --color-background-menu: #0a121a;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Montserrat";
}

body {
  min-width: 320px;
  min-height: 100vh;
  background-color: black;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
