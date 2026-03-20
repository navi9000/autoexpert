<script setup lang="ts">
interface DefaultButton {
  variant: "default"
  filling: "solid" | "transparent"
}

type Props = DefaultButton

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
  ></button>
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
  @media screen and (min-width: 990px) {
    font-size: 16px;
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
</style>
