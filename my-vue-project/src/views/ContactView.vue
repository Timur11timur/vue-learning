<script setup>
import { useStorage } from "@/composables/useStorage";

let food = useStorage('food');
let age = useStorage('age', 21);
</script>

<template>
  <main>
    <p>
      What is your favorite food? <input type="text" v-model="food" @input="write('food', food)">
    </p>
    <p>
      How old are you? <input type="text" v-model="age" @input="write('age', age)">
    </p>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .contact {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
