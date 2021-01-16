<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg" />
    <q-button>
      <router-link :to="{ name: '/' }"> reset </router-link>
    </q-button>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex"
};
</script>
