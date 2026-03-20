<script setup lang="ts">
interface DefaultButton {
  variant: "default"
  filling: "solid" | "transparent"
}

interface MenuButton {
  variant: "menu"
  filling?: never
}

type Props = DefaultButton | MenuButton

const props = defineProps<Props>()
</script>

<template>
  <button
    class="button"
    :class="[
      {
        [`button_${variant}`]: variant,
        [`button_filling${filling}`]: filling,
      },
    ]"
  >
    <slot />
  </button>
</template>

<style scoped>
.button {
  cursor: pointer;
}
.button_default {
  border-radius: 4px;
  padding: 13px 18px;
  border: 1px solid var(--color-theme);
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  transition: 300ms;
  @media screen and (min-width: 990px) {
    font-size: 16px;
  }
  &:hover {
    opacity: 0.7;
  }
}

.button_fillingsolid {
  background-color: var(--color-theme);
  color: var(--color-white);
}

.button_fillingtransparent {
  background-color: transparent;
  color: var(--color-theme);
}

.button_menu {
  border-radius: 8px 8px 0 0;
  border: none;
  background: #09121c;
  mix-blend-mode: screen;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  color: #fff;
  padding: 6px 18px;
  text-transform: uppercase;
  @media screen and (min-width: 900px) {
    font-size: 20px;
    padding: 13px 25px;
  }
}
</style>
