<template>
  <q-page padding>
    <q-card class="my-card">
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img
              src="data:image/jpeg;base64,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"
            />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Fun Little Games</q-item-label>
          <q-item-label caption
            >Fight the virus with Bob, Get you friends safe!</q-item-label
          >
        </q-item-section>
      </q-item>

      <q-img src="https://photos.prnasia.com/prnvar/20200302/2735281-1">
        <div class="text-h5 absolute-bottom text-right">
          Fight the virus with Bob
        </div>
      </q-img>
    </q-card>

    <q-card class="my-card">
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT38C0jLkIlwPE7Szzdvx3r-aP4om99dYNICw&usqp=CAU"
              style="width: 140%"
            />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Fight With Us</q-item-label>
          <q-item-label caption
            >Health knowledge competition with friends.</q-item-label
          >
        </q-item-section>
      </q-item>

      <q-img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4NrdKFkfNOiMQSZc-02CLb1qo_plzBAk3Vw&usqp=CAU"
      >
        <div class="text-h5 absolute-bottom text-right">
          Pandemic Health Quiz
        </div>
      </q-img>
    </q-card>
    <q-card class="my-card">
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXWLcAdkCea7WB2f6U89B5Xt3fWwo6d5Cp1g&usqp=CAU"
            />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Interactive Video Center</q-item-label>
          <q-item-label caption
            >Learn the health knowledge with Sofia.</q-item-label
          >
        </q-item-section>
      </q-item>

      <q-img src="https://i.ytimg.com/vi_webp/kgmD1stCXYU/maxresdefault.webp">
        <div class="text-h5 absolute-bottom text-right">
          On the twilight of my house
        </div>
      </q-img>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: "Games"
};
</script>

<style lang="sass" scoped>
.my-card
  margin-bottom: 15px
</style>
