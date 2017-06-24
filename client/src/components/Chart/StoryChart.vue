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
        :title="t.text"
        v-for="(t, i) in seqTasks"
        :key="i"
        :style="{
          background: getTaskBackground(t.status),
          width: getTotalHours(t.timing) * widthPerHour + 'px'
        }"
      >
        {{t.text[0]}}
      </div>
    </div>
    <div class="float-chart" :style="{width: totalWidth + 'px'}">
      <div
        class="task"
        :title="t.text"
        v-for="(t, i) in floatTasks"
        :key="i"
        :style="{
          background: getTaskBackground(t.status),
          width: getTotalHours(t.timing) * widthPerHour + 'px'
        }"
      >
        {{t.text[0]}}
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
    },
    getTaskBackground (status) {
      const mapping = {
        pending: 'linear-gradient(0, #ddd, #eee)',
        done: 'linear-gradient(0, #90ee90, #c3ffc3)',
        active: 'linear-gradient(0, #add8e6, #e8f4f8)'
      }
      return mapping[status]
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
  border-right: 2px rgba(0, 0, 0, .3) dashed;
  transition: all .2s ease;

  font-size: 12px;
  overflow-x: hidden;
  color: #666;
  line-height: 35px;
  text-align: center;
  padding: 0 5px;
  vertical-align: middle;
  cursor: default;
}
span {
  margin-left: 5px;
  color: #666;
  font-size: 12px;
}
</style>
