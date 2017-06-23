<template>
  <div>
    <div class="seq-chart">
      <div class="task" :style="{width: '50px'}"></div>
      <div class="task" :style="{width: '70px'}"></div>
      <div class="task" :style="{width: '90px'}"></div>
    </div>
    <div class="float-chart">
      <div class="task" :style="{width: '60px'}"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['storyData'],
  name: 'StoryChart',
  computed: {

  }
}
</script>

<style lang="scss" scoped>
.seq-chart, .float-chart {
  border-left: 2px #ddd solid;
  border-right: 2px #ddd solid;
  width: 600px;
  height: 60px;
  margin: auto;
  display: flex;
  align-items: center;
}
.seq-chart {
  justify-content: space-between;
}
.float-chart {
  justify-content: space-around;
}
.task {
  height: 50px;
  background: linear-gradient(0, lightblue, lighten(lightblue, 15%));
  border-radius: 5px;
}
</style>
