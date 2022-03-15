<template>
  <my-home :cards="cards" search="" :pagination="pagination" class="uk-container" />
</template>

<script>
import MyHome from 'components/src/stories/layouts/Home/Home.vue'

export default {
  name: 'home-view',
  components: {
    MyHome
  },
  computed: {
    cards () {
      return this.$store.getters.cards
    }
  },
  data () {
    return {
      pagination: {
        next: true,
        previous: true
      }
    }
  },
  beforeMount () {
    this.$store.dispatch('GET_CARDS')
  }
}
</script>
