<template>
  <div class="chart-wrapper">
    <PersonalChart
      :chartData="chartData"
    >
    </PersonalChart>
  </div>
</template>

<script>
import PersonalChart from './PersonalChart'
import mockData from './mockData'

export default {
  name: 'Chart',
  data () {
    return {
      chartData: mockData
    }
  },
  methods: {

  },
  components: {
    PersonalChart
  }
}
</script>

<style lang="scss" scoped>
.chart-wrapper {
  max-width: 1000px;
  margin: auto;
}
</style>
