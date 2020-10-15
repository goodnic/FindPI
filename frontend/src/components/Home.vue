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
    <v-row>
      <v-form>
        <v-container>
          <v-row>
            <v-col>
              <v-text-field
                v-model.number="numberOfRandomPointsToFetch"
                hide-details
                single-line
                type="number"
              >
              </v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-row>
  </v-conotainer>
</template>

<script>
import Vue from 'vue';
import gql from 'graphql-tag';

export default Vue.extend({
  name: 'Home',
  data: () => ({
    title: 'Find PI using the Monte Carlo method.',
    numberOfRandomPointsToFetch: null,
    randomPoints: [],
  }),
  computed: {
    approximatedPI: () => 3.141,
  },
  apollo: {
    randomPoints: {
      query: gql`
        query RandomPoints($amount: Int!) {
          randomPoints: getRandomPoints(amount: $amount) {
            xCoordinate
            yCoordinate
          }
        }
      `,
      variables() {
        return {
          amount: this.numberOfRandomPointsToFetch,
        };
      },
      skip() {
        return this.numberOfRandomPointsToFetch === null;
      },
    },
  },
});
</script>
