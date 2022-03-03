<template lang="pug">
v-card-subtitle {{ cardSubtitle }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('exampleModule', ['cardSubtitle'])
  }
}
</script>

<style lang="sass">
</style>
