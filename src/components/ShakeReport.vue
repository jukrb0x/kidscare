<template>
  <div>
    <q-dialog v-model="shaked" transition-show="scale" transition-hide="scale">
      <q-card class="bg-blue text-white" style="width: 300px">
        <q-card-section class="row items-center q-pb-none justify-between">
          <div class="">CLOSE FOREVER</div>
          <!-- FIXME: q-space does not work -->
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup color="white" />
        </q-card-section>
        <q-card-section class="q-pt-none flex justify-center">
          <q-icon name="mdi-help-network-outline" color="white" />
          <div class="text-h6">Any problem?</div>
        </q-card-section>
        <q-card-actions
          align="center"
          class="bg-white text-grey-7 q-pa-md"
          style="text-align: center"
        >
          We detect you shook the phone. <br />If you meet any problem when
          using this app, you can report it to us through<b> Feedback Center</b
          >&nbsp;in Settings.
        </q-card-actions>
        <q-card-actions align="center" class="bg-white text-blue">
          <q-btn
            outline
            label="Report a bug"
            style="width: 240px"
            v-close-popup
          />
        </q-card-actions>
        <q-card-actions
          align="center"
          class="bg-white text-blue"
          style="padding-top: 1px"
        >
          <q-btn outline label="Screenshot and report" style="width: 240px" />
        </q-card-actions>
        <q-card-actions
          align="center"
          class="bg-white text-grey"
          style="padding-top: 5px;padding-bottom: 15px"
        >
          Help Center
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: "ShakeReport",
  props: ["shaked"],
  data() {
    return {
      // shaked: false
    };
  }
};
</script>

<style scoped></style>
