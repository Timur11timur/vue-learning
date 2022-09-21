<script setup>
  defineProps({
    show: Boolean
  });
</script>

<template>
  <div v-if="show" class="model-mask" @click="$emit('close')">
    <div class="model-container">
      <header>
        <slot name="header"></slot>
      </header>

      <div><slot></slot></div>

      <footer>
        <slot name="footer "></slot>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.model-mask {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.6);
  display: grid;
  place-items: center;
}
.model-container {
  background: white;
  padding: 1rem;
  width: 80vw;
  max-width: 500px;
}
</style>