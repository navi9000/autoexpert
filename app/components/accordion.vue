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
}

.answerwrapper-enter-active,
.answerwrapper-leave-active {
  transition: 300ms;
  height: 200px;
}

.answerwrapper-enter-from,
.answerwrapper-leave-to {
  height: 0;
  overflow-y: scroll;
  transition: height 0.5s;
}

.answer {
  overflow: hidden;
}
</style>
