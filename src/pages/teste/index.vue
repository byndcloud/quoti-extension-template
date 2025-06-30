<template lang="pug">
div
  p {{ counter }}
  v-btn(color="primary" @click="increment")
    | increment
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return { counter: 0 }
  },
  methods: {
    increment() {
      this.counter += 1
    }
  }
  // setup() {
  //   const counter = ref(0)
  //   const increment = () => {
  //     counter.value += 1
  //   }
  //   return { counter, increment }
  // }
})
</script>
