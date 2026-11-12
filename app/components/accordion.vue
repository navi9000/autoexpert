<script setup lang="ts">
const isOpen = ref(false)
const answerId = `accordion-answer-${useId()}`

const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="accordion">
    <button
      type="button"
      class="questioncontainer"
      :aria-expanded="isOpen"
      :aria-controls="answerId"
      @click="toggle"
    >
      <slot name="question" :is-open="isOpen" />
      <span class="iconwrapper">
        <slot name="icon" :is-open="isOpen" />
      </span>
    </button>
    <Transition name="answerwrapper">
      <div v-if="isOpen" :id="answerId" class="answer" role="region">
        <slot name="answer" />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.accordion {
  width: 100%;
}

.questioncontainer {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  cursor: pointer;
  padding: 0;
  border: none;
  background: transparent;
  color: inherit;
  text-align: left;
}

.questioncontainer:focus-visible,
.iconwrapper:focus-visible {
  outline: 2px solid var(--color-theme);
  outline-offset: 4px;
}

.iconwrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.answerwrapper-enter-active,
.answerwrapper-leave-active {
  transition: 500ms ease-in;
  max-height: 1024px;
  height: auto;
}

.answerwrapper-enter-from,
.answerwrapper-leave-to {
  max-height: 0;
  transition: 500ms ease-out;
}

.answer {
  overflow: hidden;
}
</style>
