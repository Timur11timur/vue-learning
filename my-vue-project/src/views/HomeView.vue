<!--<script>-->
<!--import { useFlash } from "@/composables/useFlash";-->

<!--export default {-->
<!--  setup() {-->
<!--    let { flash } = useFlash();-->

<!--    return { flash };-->
<!--  }-->
<!--}-->
<!--</script>-->

<script setup>
import { useFlash } from "@/composables/useFlash";

let { flash } = useFlash();
</script>

<template>
  <div>
    <p>
      <button @click="flash('It Works!')">Click Me Here</button>
    </p>
  </div>
</template>
