<template lang="pug">
  .card {{text}}
</template>

<script>
export default {
  props: {
    text: String
  }
}
</script>

<style scoped lang="stylus">
@import "../color"

.card {
  padding 10px
}
</style>
