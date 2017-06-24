<template>
  <div class="group-wrapper" :style="{width: 600 + 'px'}">
    <div class="group-header">项目总体排期甘特图</div>
    <div class="timeline">
      <span>2017-06-23</span>
      <span>2017-06-25</span>
    </div>
    <hr>
    <div class="group-item"
      v-for="item in group"
      :style="{width: item.width + 'px', marginLeft: item.offset + 'px'}">
      <span>{{item.meta.author}}</span>
    </div>
  </div>
</template>

<script>

const timeToDay = function (eTime, sTime) {
    return (eTime - sTime) / (24 * 60 * 60 * 1000) + 1
}

export default {
  name: 'GroupChart',
  props: ['group', 'baseTime', 'endTime'],

  data() {
    return {
      MaxWidth: 600
    }
  },

  created() {
    let { group, baseTime } = this

    let totalDays = timeToDay(this.endTime, this.baseTime)
    let unitDayWidth = this.MaxWidth / totalDays
    let unitHourWidth = this.MaxWidth / (totalDays * 8)

    group.forEach(item => {
      let localBaseTime = item.meta.baseTime
      let offset = (timeToDay(localBaseTime, baseTime) - 1) * unitDayWidth
      let width = item.meta.totalHours * unitHourWidth
      item.offset = offset
      item.width = width
    })
  },

  methods: {

  }

}
</script>

<style lang="scss" scoped>
.group-wrapper {
  margin: auto;
  border-left: 2px #999 dashed;
  border-right: 2px #999 dashed;

  .group-header {
    padding: 6px;
  }

  .group-item {
    box-sizing: border-box;
    height: 35px;
    line-height: 35px;
    text-align: center;
    background: linear-gradient(0, lightblue, lighten(lightblue, 15%));
    border-radius: 5px;
    border-right: 2px rgba(0, 0, 0, .3) dashed;
    margin-top: 12px;
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
}
</style>
