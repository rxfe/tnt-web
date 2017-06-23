<template>
  <div class="personal-wrapper">
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
.personal-wrapper {
  width: 600px;
  margin: auto;
  border-left: 2px #999 dashed;
  border-right: 2px #999 dashed;
}
</style>
