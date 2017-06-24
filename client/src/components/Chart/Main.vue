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
import API from '../../config/api'

export default {
  name: 'Chart',
  data () {
    return {
      chartData: mockData,
      groupMockData: groupMockData
    }
  },
  methods: {
    fetchPersonalStory() {
      let params = {
        author: 'wangyifeng03',
        project: 'TNT',
        version: '1.0.0'
      }
      return fetch(API.fetchPersonalStory + '?author=wangyifeng03&project=TNT&version=1.0.0')
        .then(
          res => res.json()
        )
    }
  },
  mounted() {
    this
      .fetchPersonalStory()
      .then(
        res => {
          this.chartData = res.data
        }
      )
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
