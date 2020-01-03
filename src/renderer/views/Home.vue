<template lang="pug">
  .home
    img(src="~@/assets/logo.png")
    card(:text="text")
</template>

<script>
import Card from '@/components/Card'

export default {
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
      this.data = await this.$http.post('/search', {id: 1})
      this.$message('hehe')
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
