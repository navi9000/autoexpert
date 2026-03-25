<script setup lang="ts">
const isOpen = ref(false)
</script>

<template>
  <div class="accordion">
    <div class="questioncontainer">
      <slot name="question" />
      <div class="iconwrapper" @click="isOpen = !isOpen">
        <slot name="icon" />
      </div>
    </div>
    <Transition name="answerwrapper">
      <div v-if="isOpen" class="answer">
        <slot name="answer" />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.questioncontainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  gap: 1px;
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
