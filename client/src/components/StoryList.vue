<template>
    <div class="storys-wrapper">
      <h3>项目名: {{projectName}}</h3>
      <h4>迭代版本: {{version}}</h4>
      <div class="story-list">
        <ul class="list">
          <li class="item" v-for="item in storyList">
            <span>{{item.text}}</span>
            <span><input v-bind:value="item.id" type="checkbox" v-model="selectedIds"></span>
          </li>
        </ul>
      </div>
    <button class="save" @click="save">确认</button>

    </div>
</template>

<script>
import API from '../config/api.js'

export default {
  name: 'storyList',
  data () {
    return {
      projectName: '',
      version: '',
      storyList: [],
      selectedIds: []
    }
  },

  mounted () {
    let me = this
    this
      .fetchList()
      .then(data => {
        let storys = data.storys
        me.projectName = storys.projectName
        me.version = storys.version
        me.storyList = storys.storyList
      })
  },

  methods: {
    fetchList() {
      return fetch(API.fetchStorys)
        .then(res => {
          return res.json()
        })
    },

    save() {
      let selectedStoryList = this.storyList.filter(
        item => this.selectedIds.indexOf(item.id) > -1
      )
      let { projectName, version } = this;

      let bodyParams = {
        author: 'wangyifeng03',
        projectName,
        version,
        storys: selectedStoryList
      }

      fetch(
        API.createSelectedStorys,
        {
          method: 'POST',
          body: JSON.stringify(bodyParams)
        }
      )
      .then(
        res => res.json()
      )
      .then(
        data => data
      )
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
