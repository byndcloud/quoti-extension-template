<template lang="pug">
v-container
  v-row
    v-col
      v-card(outlined)
        v-card-title {{ cardTitle }}
        example
        v-btn(@click="$router.push(`/${$store.getters['organization/slug']}/develop/example`)") Ir para example
</template>

<script>
import registerVuexModules from '@/store'
import { mapFields } from 'vuex-map-fields'
import example from '../../components/example/example.vue'

export default {
  props: ["QuotiApi"],
  components: {
    example
  },
  computed: {
    ...mapFields('exampleModule', ['cardTitle'])
  },
  beforeCreate() {
    registerVuexModules.call(this)
  }
}
</script>

<style lang="sass">
</style>
