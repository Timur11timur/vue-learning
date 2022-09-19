<script>
import flash from "@/mixins/flash";

export default {
  mixins: [flash]
}
</script>

<template>
  <div>
    <p>
      <button @click="flash('It Works!')">Click Me Here</button>
    </p>
  </div>
</template>
