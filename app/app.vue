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

body {
  min-width: 320px;
  overflow: hidden;
  min-height: 100vh;
  background-color: black;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
