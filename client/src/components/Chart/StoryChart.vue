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
function h (hourStr) {
  return hourStr.indexOf('d') > -1
    ? parseFloat(hourStr) * 8
    : parseFloat(hourStr)
}

function getTotalHours (hours) {
  if (hours.length === 0) return 0
  else if (hours.length === 1) {
    return h(hours[0])
  } else if (hours.length === 2) {
    return h(hours[0]) + h(hours[1]) / 2
  } else {
    return h(hours[0]) + 4 * h(hours[1]) + h(hours[1]) / 6
  }
}

function getHoursByDate (dateStr) {
  const begin = new Date(dateStr.split('~')[0])
  const end = new Date(dateStr.split('~')[1])
  return (end - begin) / (3600000 * 3) + 8
}

export default {
  props: [
    'date', 'progress', 'tasks', 'text',
    'totalHours', 'baseTime'
  ],
  name: 'StoryChart',
  computed: {
    storyHours () {
      // 仅存在起始日期时，需对 tasks 求和以计算本 Story 总工时
      if (this.date.match(/~$/)) {
        const hours = this.tasks.map(
          task => getTotalHours(task.timing)
        ).reduce((a, b) => a + b)
        return hours
      } else {
        // 存在起止日期时，根据起止日期计算出总工时
        const hours = getHoursByDate(this.date)
        return hours
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.seq-chart, .float-chart {
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
