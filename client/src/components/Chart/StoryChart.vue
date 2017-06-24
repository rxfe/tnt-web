<template>
  <div>
    <span>{{text}}</span>
    <div
      class="seq-chart"
      :style="{
        left: widthPerHour * offsetHours + 'px',
        width: widthPerHour * storyHours + 'px'
      }"
    >
      <div
        class="task"
        v-for="(t, i) in seqTasks"
        :key="i"
        :style="{
          width: getTotalHours(t.timing) * widthPerHour + 'px'
        }"
      >
      </div>
    </div>
    <div class="float-chart" :style="{width: totalWidth + 'px'}">
      <div
        class="task"
        v-for="(t, i) in floatTasks"
        :key="i"
        :style="{
          width: getTotalHours(t.timing) * widthPerHour + 'px'
        }"
      >
      </div>
    </div>
  </div>
</template>

<script>
function h (hourStr) {
  return hourStr.indexOf('d') > -1
    ? parseFloat(hourStr) * 8
    : parseFloat(hourStr)
}

function getHoursByDate (dateStr) {
  const begin = new Date(dateStr.split('~')[0])
  const end = new Date(dateStr.split('~')[1])
  return (end - begin) / (3600000 * 3) + 8
}

export default {
  props: [
    'type', 'date', 'progress', 'tasks', 'text',
    'totalHours', 'baseTime', 'totalWidth'
  ],
  name: 'StoryChart',
  computed: {
    seqTasks () {
      return this.tasks.filter(t => !t.isFloat)
    },
    floatTasks () {
      return this.tasks.filter(t => t.isFloat)
    },
    storyHours () {
      // 仅存在起始日期时，需对 tasks 求和以计算本 Story 总工时
      if (this.date.match(/~$/)) {
        const hours = this.tasks.map(
          task => this.getTotalHours(task.timing)
        ).reduce((a, b) => a + b)
        return hours
      } else {
        // 存在起止日期时，根据起止日期计算出总工时
        const hours = getHoursByDate(this.date)
        return hours
      }
    },
    widthPerHour () {
      return this.totalWidth / this.totalHours
    },
    offsetHours () {
      const storyBeginTime = new Date(this.date.split('~')[0])
      return (storyBeginTime - this.baseTime) / (3600000 * 3)
    }
  },
  methods: {
    getTotalHours (hours) {
      if (hours.length === 0) return 0
      else if (hours.length === 1) {
        return h(hours[0])
      } else if (hours.length === 2) {
        if (this.type === 'o') {
          return h(hours[0])
        } else if (this.type === 'm') {
          return h(hours[0]) + h(hours[1]) / 2
        } else {
          return h(hours[1])
        }
      } else {
        if (this.type === 'o') {
          return h(hours[0])
        } else if (this.type === 'm') {
          return (h(hours[0]) + 4 * h(hours[1]) + h(hours[2])) / 6
        } else {
          return h(hours[2])
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.seq-chart, .float-chart {
  position: relative;
  height: 40px;
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
  box-sizing: border-box;
  height: 35px;
  background: linear-gradient(0, lightblue, lighten(lightblue, 15%));
  border-radius: 5px;
  border-right: 2px lightcoral dashed;
  transition: all .2s ease;
}
span {
  margin-left: 5px;
  color: cadetblue;
  font-size: 14px;
}
</style>
