<script setup>
import {ref} from "vue";
import { data } from '@/stores/dataStore.js'
import { useCounterStore } from '@/stores/CounterStore.js'

let counter = useCounterStore();
let value = ref('');

function saveData() {
  if (value.value !== '') {
    data.name = value.value;
  }
}

</script>

<template>
  <main>
    <form action="">
      <input v-model="value" />
      <button @click.prevent="saveData">Save</button>
    </form>
    <hr />
    <h1>{{ data.name }}</h1>
    <h3>{{ counter.count }}</h3>
    <button @click="counter.count++">Increment Directly</button>
    <button
        @click="counter.increment()"
        :disabled="!counter.remaining"
    >Increment ({{ counter.remaining }} remain)</button>

  </main>
</template>

<style scoped>
hr {
  margin: 30px 0;
}
</style>
