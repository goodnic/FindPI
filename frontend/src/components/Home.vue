<template>
  <v-conotainer>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>
          {{ title }}
        </h1>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col cols="6">
        <h1>
          {{ approximatedPI }}
        </h1>
      </v-col>
      <v-col cols="6"> </v-col>
    </v-row>
  </v-conotainer>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
  data: () => ({
    title: 'Find PI using the Monte Carlo method.',
  }),
  computed: {
    approximatedPI: () => 3.141,
  },
});
</script>
