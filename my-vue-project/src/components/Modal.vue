<script setup>
  defineProps({
    show: Boolean
  });
</script>

<template>
  <Transition
    enter-from-class="opacity-0 scale-125"
    enter-to-class="opacity-100 scale-100"
    enter-active-class="transition duration-1000"
    leave-active-class="transition duration-200"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-75"
  >
    <div v-if="show" class="model-mask">
      <div class="model-container">
        <header>
          <slot name="header"></slot>
        </header>

        <div><slot></slot></div>

        <footer>
          <slot name="footer "></slot>
        </footer>
        <div class="close" @click="$emit('close')"></div>
      </div>
    </div>
  </Transition>
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
  border-radius: 7px;
}
.close{
  position: absolute;
  top: 5px;
  right: 5px;
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.close:before,
.close:after {
  content: "";
  position: absolute;
  top: 9px;
  left: 3px;
  width: 15px;
  height: 2px;
  background: rgba(0,0,0,.6);
}
.close:before {
  webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.close:after {
  webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
</style>