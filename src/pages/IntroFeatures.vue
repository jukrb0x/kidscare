<template>
  <q-page padding class="header-top">
    <div class="text-h4 text-bold q-pa-lg" @click="routerHandler('/')">
      <div>Kidscare</div>
      <div class="text-h6">COVID-19 special</div>
    </div>
    <div class="flex flex-center column justify-center">
      <q-card
        flat
        padding
        class="bg-deep-orange-4 text-white"
        style="padding: 10px 70px; "
      >
        <div class="text-h4 text-bold">New here?</div>
        <div>Let me introduce myself</div>
      </q-card>
    </div>
    <div class="q-pa-sm flex column justify-center q-pa-lg">
      <div class="f1">
        <div class="f-title text-h6">
          <q-icon name="mdi-notebook-edit"></q-icon>
          Health knowledge
        </div>
        <div class="f-body">
          You can learn Health Tips, Medical Skill, or Epidemic Updates -
          whatever global pandemic or your local news here, the feed is designed
          for you.
        </div>
      </div>

      <div class="f2">
        <div class="f-title text-h6">
          <q-icon name="mdi-nintendo-switch"></q-icon>
          Fun Games
        </div>
        <div class="f-body">
          You can play some fun little games, and learn the ideas about epidemic
          knowledge even share with your friends!
        </div>
      </div>

      <div class="f3">
        <div class="f-title text-h6">
          <q-icon name="map"></q-icon>
          Epidemic Stats
        </div>
        <div class="f-body">
          Have a look on the map! Get to know more about the covid-19 pandemic
          statistics in your region or the global.
        </div>
      </div>

      <div class="f4">
        <div class="f-title text-h6">
          <q-icon name="mdi-medical-bag"></q-icon>
          Medical Help
        </div>
        <div class="f-body">
          The location tracker (you can turn it on or off) will keep notice your
          area is safe or not, and let you know. You can seek for help easily
          through this app.
        </div>
      </div>

      <div class="next flex flex-center column justify-center q-pa-md">
        <q-btn color="deep-orange-4" push @click="routerHandler('/Framework')">
          <div class="row items-center no-wrap">
            <q-icon left name="mdi-arrow-right-bold-hexagon-outline" />
            <div class="text-center">Start<br />Journey</div>
          </div>
        </q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
import RouterMixin from "components/RouterMixin";

export default {
  name: "IntroFeatures",
  mixins: [RouterMixin]
};
</script>

<style lang="sass" scoped>
.f-body
  margin: auto 30px
  font-size: 16px
</style>
