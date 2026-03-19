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
    <div>Default layout</div>
  </NuxtLayout>
      <nav>
        <li v-for="{label, to} in nav">
          <li><NuxtLink :to>{{label}}</NuxtLink></li>
        </li>
      </nav>

  <slot />
</template>
