<template>
  <q-page padding class="my-gradient flex column">
    <div class="body">
      <q-btn
        class="back"
        size="md"
        flat
        color="blue-1"
        icon="arrow_back_ios"
        label="Back"
        @click="routerBack"
      ></q-btn>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "KidsInfo",
  methods: {
    routerBack() {
      this.$router.push({ path: "/collectData" });
    }
  }
};
</script>

<style lang="sass" scoped>
.body
  margin-top: 50px
</style>
