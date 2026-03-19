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
</style>
