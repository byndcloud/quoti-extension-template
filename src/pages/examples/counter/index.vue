<template lang="pug">
v-container
  p {{ counter }}
  v-btn(color="primary" @click="increment")
    | increment
</template>

<script>
export default {
  data() {
    return { counter: 0 }
  },
  methods: {
    increment() {
      this.counter += 1
    }
  }
}
</script>
