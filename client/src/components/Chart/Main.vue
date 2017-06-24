<template>
  <div class="chart-wrapper">
    <PersonalChart
      :chartData="chartData"
    >
    </PersonalChart>
    <br>
    <GroupChart
      :group="groupMockData.data"
      :baseTime="groupMockData.baseTime"
      :endTime="groupMockData.endTime"
    >
    </GroupChart>
  </div>
</template>

<script>
import PersonalChart from './PersonalChart'
import GroupChart from './GroupChart'
import mockData from './mockData'
import groupMockData from './groupMockData'

export default {
  name: 'Chart',
  data () {
    return {
      chartData: mockData,
      groupMockData: groupMockData
    }
  },
  methods: {

  },
  components: {
    GroupChart,
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
