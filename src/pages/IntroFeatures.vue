<template>
  <q-page padding>
    <div @click="routerHandler('/')">back</div>
    Test
  </q-page>
</template>

<script>
import RouterMixin from "components/RouterMixin";

export default {
  name: "IntroFeatures",
  mixins: [RouterMixin]
};
</script>

<style scoped></style>
