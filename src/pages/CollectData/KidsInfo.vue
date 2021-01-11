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
        @click="routerHandler('/collectData')"
      ></q-btn>
    </div>
  </q-page>
</template>

<script>
import RouterMixin from "components/RouterMixin";

export default {
  name: "KidsInfo",
  mixins: [RouterMixin],
  methods: {}
};
</script>

<style lang="sass" scoped>
.body
  margin-top: 50px
</style>
