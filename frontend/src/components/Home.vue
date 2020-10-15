<template>
  <v-container>
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
  </v-container>
</template>

<script>
import Vue from 'vue';
import gql from 'graphql-tag';

export default Vue.extend({
  name: 'Home',
  data() {
    return {
      title: 'Find PI using the Monte Carlo method.',
      numberOfRandomPointsToFetch: null,
      randomPoints: [],
    };
  },
  computed: {
    approximatedPI() {
      const randomPointsCount = this.randomPoints.length;
      let randomPointsIn = 0;
      this.randomPoints.forEach((randomPoint) => {
        const distanceToOrigin = randomPoint.xCoordinate ** 2 + randomPoint.yCoordinate ** 2;
        if (distanceToOrigin < 1) {
          randomPointsIn += 1;
        }
      });
      return 4 * (randomPointsIn / randomPointsCount);
    },
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
