<script lang="ts">
export default {
  name: "RouterMixin",
  methods: {
    routerHandler(path) {
      // path is a string
      this.$router.push({ path: path });
    }
  }
};
</script>
