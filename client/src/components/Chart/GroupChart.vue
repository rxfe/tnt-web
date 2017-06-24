<template>
  <div class="group-wrapper" :style="{width: 600 + 'px'}">
    Group Chart
  </div>
</template>

<script>
export default {
  name: 'GroupChart',
  props: ['group', 'baseTime', 'endTime']
}
</script>

<style lang="scss" scoped>
.group-wrapper {
  margin: auto;
  border-left: 2px #999 dashed;
  border-right: 2px #999 dashed;
}
</style>
