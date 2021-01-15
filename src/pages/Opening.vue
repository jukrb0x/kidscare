<template>
  <!-- we desire for a swipe-able welcome(opening) page, but now it's all static since due date is coming -->
  <q-page padding class="welcome flex column items-center">
    <div
      class="body flex column flex-center items-center"
      @click="routerHandler('collectData')"
    >
      <span class="logo-block"><img :src="logo" alt=""/></span>
      <span class="logo-text text-h4">
        <span>Kids</span>
        <span>Care</span>
      </span>
      <span class="special text-subtitle1">Covid-19 special</span>
    </div>
    <div class="bottom flex column flex-center">
      <div class="power"><q-icon name="cloud"></q-icon> Powered by HCI ICU</div>
    </div>
  </q-page>
</template>

<script>
import RouterMixin from "components/RouterMixin";
export default {
  name: "Opening",
  mixins: [RouterMixin],
  data() {
    return {
      logo: require("assets/virus.svg") // hint: use assets instead ~assets in data section
    };
  },
  methods: {}
};
</script>

<style lang="sass" scoped>

.welcome
  background-color: $grey-1
  line-height: 35px

.logo-block
  margin-top: 240px

.logo-text span
  &:first-child
    color: $deep-orange-5
  &:last-child
    color: $blue-7

.bottom
  .power
    position: absolute
    align-items: center
    bottom: 20px
    color: $blue-grey
</style>
