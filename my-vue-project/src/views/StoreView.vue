<script setup>
import {ref} from "vue";
import { data } from '@/stores/dataStore.js'

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
  </main>
</template>

<style scoped>
hr {
  margin: 30px 0;
}
</style>
