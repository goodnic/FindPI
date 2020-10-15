<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 v-if="Number.isNaN(approximatedPI)">
          {{ title }}
        </h1>
        <h1 v-else>
          PI is approximately {{ approximatedPI }}
        </h1>
      </v-col>
    </v-row>
    <v-row v-if="!Number.isNaN(approximatedPI)">
      <v-spacer>
      </v-spacer>
      <monte-carlo-chart :chart-data="datacollection"></monte-carlo-chart>
      <v-spacer>
      </v-spacer>
    </v-row>
    <v-row>
      <v-spacer>
      </v-spacer>
      <v-col cols="3">
        <v-text-field
          v-model.number="numberOfRandomPointsToFetch"
          hide-details
          single-line
          type="number"
          placeholder="Enter a number"
        >
        </v-text-field>
      </v-col>
      <v-spacer>
      </v-spacer>
    </v-row>
  </v-container>
</template>

<script>
import Vue from 'vue';
import gql from 'graphql-tag';
import MonteCarloChart from './MonteCarloChart.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    MonteCarloChart,
  },
  data() {
    return {
      title: 'Find PI using the Monte Carlo method.',
      numberOfRandomPointsToFetch: null,
      randomPoints: [],
      datacollection: null,
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
  watch: {
    randomPoints(newPoints) {
      const intermediate = {
        labels: [],
        datasets: [{
          label: 'First',
          data: [],
        }],
      };
      newPoints.forEach((newPoint) => {
        const data = {
          x: newPoint.xCoordinate,
          y: newPoint.yCoordinate,
        };
        intermediate.datasets[0].data.push(data);
      });
      this.datacollection = intermediate;
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
