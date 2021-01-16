<template>
  <q-page padding>
    <!-- content -->
    <div class="info">
      <q-avatar color="white" text-color="grey" size="150px">
        <q-icon name="account_circle" size="150px"></q-icon>
        <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
          Click avatar to change your face!
        </q-tooltip>
      </q-avatar>
      <span class="name text-h6">James Bond</span>
      <q-chip
        outline
        dense
        color="green"
        text-color="white"
        icon="mdi-sticker-circle-outline"
        class="stuId text-subtitle2"
        >Verified</q-chip
      >

      <span class="email text-subtitle1"></span>
    </div>
    <div class="list">
      <q-list bordered>
        <q-item clickable v-ripple>
          <q-item-section>My bookmarks</q-item-section>
          <q-item-section avatar>
            <q-icon color="primary" name="mdi-bookmark" />
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>Update my profile</q-item-section>
          <q-item-section avatar>
            <q-icon color="secondary" name="mdi-face" />
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>Update Emergency contacts</q-item-section>
          <q-item-section avatar>
            <q-icon color="negative" name="mail" />
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>Location settings</q-item-section>
          <q-item-section avatar>
            <q-icon color="warning" name="mdi-crosshairs-gps" />
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section>Other settings</q-item-section>
          <q-item-section avatar>
            <q-icon color="warning" name="mdi-tools" />
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <div class="opt">
      <q-btn color="red" @click="confirm = true" class="sign-out"
        >Sign Out</q-btn
      >
      <!-- pop-up -->
      <q-dialog v-model="confirm">
        <q-card>
          <q-card-section class="row items-center">
            <q-avatar icon="exit_to_app" color="red" text-color="white" />
            <span class="q-ml-sm">Are you sure to sign out?</span>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="Cancel" color="primary" v-close-popup />
            <q-btn
              flat
              label="Sign Out"
              color="red"
              v-close-popup
              @click="routerHandler('/')"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import RouterMixin from "components/RouterMixin";

export default {
  name: "Me",
  mixins: [RouterMixin],
  data() {
    return {
      confirm: false
    };
  }
};
</script>
<style lang="sass" scoped>
.info
  margin-top: 20px
  margin-left: 10px
  display: flex
  flex-direction: column
  justify-content: space-between
  align-items: center

.list
  margin-top: 10px

.opt
  margin-top: 20px
  display: flex
  flex-direction: column
  justify-content: space-between
  align-items: center
  .sign-out
    width: 150px
</style>
