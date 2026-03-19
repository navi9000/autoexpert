<script setup lang="ts">
const nav = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
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
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Montserrat";
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
