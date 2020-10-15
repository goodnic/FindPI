<template>
  <v-app>
    <v-main>
      <Home/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Home from './components/Home.vue';

export default Vue.extend({
  name: 'App',

  components: {
    Home,
  },

  data: () => ({
    //
  }),
});
</script>

<style lang="scss">
html {
  overflow-y: hidden;
}
</style>
