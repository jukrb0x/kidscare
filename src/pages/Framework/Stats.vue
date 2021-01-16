<template>
  <q-page padding>
    <!--    <q-card flat bordered class="my-card">-->
    <!--      <q-card-section>-->
    <!--        <div class="text-h6">Our Changing Planet</div>-->
    <!--      </q-card-section>-->

    <!--      <q-card-section class="q-pt-none">-->
    <!--        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod-->
    <!--        tempor incididunt ut labore et dolore magna aliqua.-->
    <!--      </q-card-section>-->

    <!--      <q-separator inset />-->

    <!--      <q-card-section>-->
    <!--        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod-->
    <!--        tempor incididunt ut labore et dolore magna aliqua.-->
    <!--      </q-card-section>-->
    <!--    </q-card>-->

    <div class="flex text-grey justify-between q-px-sm">
      <div class="text-grey">Latest Updated: 2021-01-16 11:40</div>
      <div>
        <em
          ><img
            alt="question"
            style="width: 12px"
            src="data:image/png;base64,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"
          />Data</em
        >
      </div>
    </div>
    <q-card flat bordered class="my-card">
      <q-card-section class="">
        <div class="card-content">
          <div class="count">
            <div class="li" style=" border-right: solid 1px #eee">
              <div class="createItem">
                <div class="createCount">
                  <b>New <em style="color: rgb(247, 76, 49);">+88</em></b>
                </div>
              </div>
              <strong style="color: rgb(247, 76, 49);">1,815</strong
              ><span>Active cases</span>
            </div>
            <div class="li" style=" border-right: solid 1px #eee">
              <div class="createItem">
                <div class="createCount">
                  <b>New <em style="color: rgb(247, 130, 7);">+15</em></b>
                </div>
              </div>
              <strong style="color: rgb(247, 130, 7);">4,489</strong
              ><span>Imported cases</span>
            </div>
            <div class="li">
              <div class="createItem">
                <div class="createCount">
                  <b>New <em style="color: rgb(162, 90, 78);">+52</em></b>
                </div>
              </div>
              <strong style="color: rgb(162, 90, 78);">670</strong
              ><span>Asymptomatic</span>
            </div>
            <div
              class="li"
              style="padding-right: 13px; border-right: solid 1px #eee"
            >
              <div class="createItem">
                <div class="createCount">
                  <b>New <em style="color: rgb(174, 33, 44);">+169</em></b>
                </div>
              </div>
              <strong style="color: rgb(174, 33, 44);">98,459</strong
              ><span>Confirmed</span>
            </div>
            <div
              class="li"
              style="padding-right: 30px; border-right: solid 1px #eee"
            >
              <div class="createItem">
                <div class="createCount">
                  <b>New <em>0</em></b>
                </div>
              </div>
              <strong style="color: rgb(93, 112, 146);">4,803</strong
              ><span>Deaths</span>
            </div>
            <div class="li">
              <div class="createItem">
                <div class="createCount">
                  <b>New <em style="color: rgb(40, 183, 163);">+81</em></b>
                </div>
              </div>
              <strong style="color: rgb(40, 183, 163);">91,841</strong
              ><span>Recovered</span>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
    <div class="q-px-sm text-grey flex justify-between">
      <div>Data is based on your location: Fujian, China</div>
      <div><u>Incorrect?</u></div>
    </div>
    <div class="trend">
      <div class="text-h6 q-px-sm q-py-sm">COVID-19 Global Pandemic Trend</div>
      <img src="~assets/gtrend.jpeg" width="385" alt="" />
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Stats"
};
</script>

<style lang="sass" scoped>

.count
  flex-flow: wrap
  display: flex
  justify-content: space-between
  padding: 0 5px
  //padding-top: 12px


  .li
    display: flex
    align-items: center
    height: 52px
    margin-bottom: 12px
    color: #666
    font-weight: 400
    font-size: 12px
    //display: flex
    flex-direction: column
    //align-items: center
    //justify-content: center
    padding: 0 10px
    strong
      margin-bottom: .01rem
      font-weight: 700
      font-size: 25px
      line-height: 20px
    span
      color: #333
      font-weight: 700
      font-size: 14px
      min-width: 30px
      //max-width: 30px
</style>
