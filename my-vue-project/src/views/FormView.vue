<script setup>
import TabbableTextarea from "@/components/TabbableTextarea.vue";
import {ref} from "vue";

let commit = ref('Default text');

</script>

<template>
  <main>
    <form action="">
      <TabbableTextarea v-model="commit"/>
    </form>
  </main>
</template>

<style scoped>
textarea {
  width: 100%;
  height: 300px;
}
</style>
