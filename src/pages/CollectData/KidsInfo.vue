<template>
  <q-page padding class="my-gradient flex column">
    <div class="header">
      <q-btn
        class="back q-my-sm"
        size="md"
        flat
        color="blue-1"
        icon="arrow_back_ios"
        label="Back"
        @click="routerHandler('/collectData')"
      ></q-btn>
    </div>
    <q-separator dark />
    <div class="body">
      <div class="text">
        <div class="q-pa-sm q-gutter-sm">
          <q-banner inline-actions rounded class="bg-blue-1 text-black-2">
            <template v-slot:avatar>
              <q-icon name="mdi-account-heart-outline" color="primary" />
            </template>
            {{ info }}
          </q-banner>
        </div>
      </div>
      <div class="q-pa-sm forms">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-sm">
          <q-input
            color="blue-1"
            filled
            v-model="me.name"
            label="Your name *"
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'Please type your name']"
          />

          <q-input
            color="blue-1"
            filled
            type="number"
            v-model="me.age"
            label="Your age *"
            lazy-rules
            :rules="[
              val => (val !== null && val !== '') || 'Please type e age',
              val => (val > 0 && val < 100) || 'Please type a real age'
            ]"
          />

          <q-input
            color="blue-1"
            filled
            type="number"
            v-model="parent.phone"
            label="Emergency contact phone number"
            lazy-rules
            :rules="[
              val =>
                (val !== null && val !== '') ||
                'Please type your emergency phone number',
              val =>
                (val > 0 && val < 100) || 'Please type a real telephone number'
            ]"
          />

          <q-select
            options-dark
            color="blue-1"
            text-color
            filled
            type="number"
            v-model="parent.relation"
            :options="parent.relations"
            label="Emergency contact relation"
          />

          <div class="btn-group">
            <q-btn label="Submit" type="submit" outline color="blue-1" />
            <q-btn
              label="Reset"
              type="reset"
              color="blue-1"
              flat
              outline
              class="q-ml-sm"
            />
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
import RouterMixin from "components/RouterMixin";

export default {
  name: "KidsInfo",
  mixins: [RouterMixin],
  methods: {
    onReset() {
      this.me.name = null;
      this.me.age = null;
      this.parent.relation = null;
      this.parent.phone = null;
    }
  },
  data() {
    return {
      info: "Let your parents help you through!",
      accept: false,
      me: {
        name: null,
        age: null
      },
      parent: {
        relation: null,
        relations: ["Parents", "Grandparents", "Brotehr/Sister", "Others"],
        phone: null
      }
    };
  }
};
</script>

<style lang="sass" scoped>
.header
  position: sticky
  margin-top: 50px

.body
  margin-left: 10px
  margin-right: 10px
  //color: #fff
.text
  margin-top: 20px
  .text-card
    opacity: .0

.btn-group
  margin-top: 35px
</style>
