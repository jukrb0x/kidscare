<template>
  <!-- first use the app, collect the data from users-->
  <q-page padding class="my-gradient flex column">
    <div class="body">
      <!--TODO: Add logo here-->
      <div class="title text-h2 text-blue-1" @click="routerHandler('/')">
        <!-- for demo, invisible router trigger to home -->
        Hi there!
      </div>
      <div class="tips text-white text-weight-regular">
        {{ tip.l1 }}
        <br />
        {{ tip.l2 }}
        <!--        <span style="font-size: 16px;">{{ tip.l2 }}</span>-->
      </div>
      <div class="btn-group">
        <div class="btn">
          <q-btn
            size="18px"
            outline
            class="go"
            label="Get Started"
            @click="routerHandler('/collectData/kidsInfo')"
          ></q-btn>
          <!--        <q-btn-->
          <!--          size="15px"-->
          <!--          :ripple="false"-->
          <!--          flat-->
          <!--          class="back"-->
          <!--          label="Exit"-->
          <!--          @click="routerHandler('/')"-->
          <!--        ></q-btn>-->
        </div>
        <div class="indicator">
          <q-icon class="arrow animated" name="north"></q-icon>

          Click here to start!
        </div>
      </div>
      <img class="kids-yoga" src="~assets/Kids-yoga.png" alt="" />
    </div>
  </q-page>
</template>

<script>
import RouterMixin from "components/RouterMixin";

export default {
  name: "CollectData",
  mixins: [RouterMixin],
  data() {
    return {
      tip: {
        l1:
          "Thank you for using this app, this app will help you with the knowledge to COVID-19, have fun and learn through this app!",
        l2: "Let's get you acquainted.",
        l3:
          "Continuing with the next steps will indicate your acceptance of our user agreement and privacy consent."
      }
    };
  },
  methods: {}
};
</script>

<style lang="sass" scoped>
.body
  margin-left: 10px
.title
    margin: 200px auto 10px 0
.tips
  font-size: $body-text
  font-weight: normal
  line-height: normal
  margin-top: 20px
  //margin-bottom: 45px
.btn-group
  margin-top: 75px
  .btn
    .go
      color: $light-blue-1
    .back
      color: $light-blue-2

.indicator
  color: white
  margin-top: 15px
  margin-left: 5px
  font-size: large
  .arrow
    animation: bouncer
    //height: 10px
    animation-duration: 1.5s
    animation-iteration-count: infinite

.kids-yoga
  margin-left: 160px
</style>
