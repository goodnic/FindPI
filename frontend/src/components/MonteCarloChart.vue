<script>
import { Scatter, mixins } from 'vue-chartjs';

const { reactiveProp } = mixins;

export default {
  extends: Scatter,
  mixins: [reactiveProp],
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>
