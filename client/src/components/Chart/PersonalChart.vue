<template>
  <div class="personal-wrapper">
    <StoryChart
      v-for="(story, i) in storys"
      :key="i"
      :date="story.date"
      :progress="story.progress"
      :tasks="story.tasks"
      :text="story.text"
      :totalHours="chartData.meta.totalHours"
      :baseTime="chartData.meta.baseTime"
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
    },
    storys () {
      const metaStorys = this.chartData.meta.storys.map(
        (metaStory) => {
          const inputStory = this.chartData.storys.find(
            s => s.text === metaStory.text
          )
          if (!inputStory) return null
          else {
            const demo = {
              ...metaStory,
              ...inputStory
            }
            return demo
          }
        }
      ).filter(s => !!s)
      return metaStorys
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
