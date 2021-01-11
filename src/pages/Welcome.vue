<template>
  <!-- we desire for a swipe-able welcome(opening) page, but now it's all static since due date is coming -->
  <q-page padding class="welcome flex column items-center">
    <div class="body flex column flex-center items-center">
      <span class="logo-block"><img :src="logo" alt=""/></span>
      <span class="logo-text text-h4">
        <span>Kids</span>
        <span>Care</span>
      </span>
      <span class="special">Covid-19 special</span>
    </div>
    <div class="bottom">
      abc
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      logo: require("assets/virus.svg") // hint: use assets instead ~assets in data section
    };
  }
};
</script>

<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital@1&display=swap')

.welcome
  background-color: $grey-1
.logo-block
  margin-top: 180px
.logo-text span
  &:first-child
    color: $deep-orange-5
  &:last-child
    color:$blue-7

.special
  font-family: 'Nunito', sans-serif
</style>
