<template lang="pug">
  .home
    img(src='~@/assets/logo.png')
    card(:text="text")
</template>

<script>
import mixin from '../mixin.js'
import Card from '@/components/Card'

export default {
  name: 'home',
  mixins: [mixin],
  components: {
    Card
  },
  data () {
    return {
      text: '123',
      data: ''
    }
  },
  methods: {
    async getData () {
      this.$store.dispatch('fetchUserInfo', 'yang')
      this.data = await this.$http.post(this.$config.api_url + '/search', {id: 1})
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style scoped lang="stylus">
@import "../color"

</style>
