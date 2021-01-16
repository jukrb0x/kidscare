<template>
  <q-layout view="hHh LpR fFf" class="scrolling-trouble ios-top">
    <ShakeReport :shaked="shaker" />
    <q-toolbar class="text-primary header-top">
      <q-btn flat round dense icon="menu" @click="shakeHandler" />
      <q-toolbar-title @click="shaked = true">
        {{ tabTitle }}
      </q-toolbar-title>
      <q-btn flat round dense icon="more_vert" @click="routerHandler('/')" />
    </q-toolbar>
    <q-separator />
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->

    <!-- (Optional) The Footer -->
    <q-footer>
      <q-tabs
        v-model="tab"
        indicator-color="transparent"
        active-color="primary"
        class="tab bg-white text-grey-5 shadow-2"
      >
        <q-route-tab
          to="/Framework/home"
          exact
          name="home"
          icon="mdi-home"
          label="Home"
        />
        <q-route-tab
          to="/Framework/games"
          exact
          name="games"
          icon="mdi-nintendo-switch"
          label="Games"
        />
        <q-route-tab
          to="/Framework/stats"
          exact
          name="stats"
          icon="map"
          label="Stats"
        />
        <q-route-tab
          to="/Framework/me"
          exact
          name="me"
          icon="perm_identity"
          label="Me"
        />
      </q-tabs>
    </q-footer>

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->

    <q-page-container>
      <div class="head q-px-sm">
        <!-- This is where pages get injected -->
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import RouterMixin from "components/RouterMixin";
import ShakeReport from "components/ShakeReport";
export default {
  name: "HomeLayout",
  mixins: [RouterMixin],
  components: {
    ShakeReport
  },
  methods: {
    shakeHandler() {
      // FIXME: click times bug
      this.shaker = this.shaker === false;
    }
  },

  computed: {
    tabTitle() {
      if (this.tab === "home") {
        return "KidsCare";
      }
      if (this.tab === "games") {
        return "Game Tutorials";
      }
      if (this.tab === "stats") {
        return "Global Outbreak Stats";
      }
      if (this.tab === "me") {
        return "My Profile";
      }
    }
  },
  data() {
    return {
      tab: "home",
      shaker: false
    };
  }
};
</script>

<style lang="sass">
.tab
  padding-bottom: 12px

// .scrolling-trouble {
//   overflow-y: hidden !important;
//   height: 1px;
// }
.head
  //padding: 40px 10px 0 10px;
  // overflow-y: hidden !important;
</style>
