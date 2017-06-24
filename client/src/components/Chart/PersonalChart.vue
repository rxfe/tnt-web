<template>
  <div class="personal-wrapper" :style="{width: 600 + 'px'}">
    <div class="radio-wrapper">
      <input type="radio" id="chart-o" value="o" v-model="type">
      <label for="chart-o">乐观估时</label>
      <input type="radio" id="chart-m" value="m" v-model="type">
      <label for="chart-m">预期估时</label>
      <input type="radio" id="chart-p" value="p" v-model="type">
      <label for="chart-p">悲观估时</label>
    </div>
    <div class="timeline">
      <span>2017-06-23</span>
      <span>2017-06-25</span>
    </div>
    <hr>
    <StoryChart
      v-for="(story, i) in storys"
      :key="i"
      :type="type"
      :totalWidth="600"
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
  data () {
    return {
      // o m p
      type: 'm'
    }
  },
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
  margin: auto;
  border-left: 2px #999 dashed;
  border-right: 2px #999 dashed;
}
.radio-wrapper {
  margin: 10px auto;
  padding-left: 5px;
  color: #666;
  font-size: 12px;
}
.timeline {
  display: flex;
  margin-top: 20px;
  padding-left: 5px;
  padding-right: 5px;
  justify-content: space-between;
  & > span {
    font-size: 12px;
    color: #999;
  }
}
</style>
