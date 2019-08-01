export default {
  components: {
  },
  data () {
    return {
    }
  },
  filters: {
  },
  methods: {
    go (path) {
      this.$router.push(path)
    },
    goBack () {
      this.$router.go(-1)
    }
  },
  computed: {
    userInfo () {
      return this.$store.state.userInfo
    }
  },
  watch: {
  },
  mounted () {
  },
  beforeDestory () {
  }
}
