<template>
  <div>
    <StoryChart
      :storyData="demoStory"
    >
    </StoryChart>
  </div>
</template>

<script>
import StoryChart from './StoryChart'

export default {
  props: ['chartData'],
  name: 'PersonalChart',
  computed: {
    demoStory () {
      const storyName = this.chartData.meta.storys[0].text
      const targetStory = this.chartData.storys.find(
        s => s.text === storyName
      )
      return {
        ...targetStory,
        date: this.chartData.meta.storys[0].date
      }
    }
  },
  components: {
    StoryChart
  }
}
</script>

<style lang="scss" scoped>
</style>
