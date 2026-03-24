<script setup lang="ts">
const isOpen = ref(false)
</script>

<template>
  <div class="accordion">
    <div class="headingcontainer">
      <div class="heading">
        <slot name="heading" />
      </div>
      <div class="button" @click="isOpen = !isOpen">
        <slot name="button" />
      </div>
    </div>
    <Transition name="inlaywrapper">
      <div v-if="isOpen" class="inlay">
        <slot name="answer" />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.accordion {
  color: white;
}

.headingcontainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.inlaywrapper-enter-active,
.inlaywrapper-leave-active {
  transition: 300ms;
  height: 200px;
}

.inlaywrapper-enter-from,
.inlaywrapper-leave-to {
  height: 0;
  overflow-y: scroll;
  transition: height 0.5s;
}

.inlay {
  overflow: hidden;
}
</style>
