<template>
  <div class="create-wrapper">
    <h3>项目名: {{projectName}}</h3>
    <h4>迭代版本: {{version}}</h4>
    <div class="story-list">
      <ul class="list">
        <li class="item" v-for="item in storyList">{{item.text}} <span  class="remove" @click="remove(item)">删除</span></li>
      </ul>
    </div>

    <div class="add-story">
      <input type="text" v-model="storyText">
      <button class="add" @click="add">增加</button>
    </div>
    <button class="save-storys" @click="save">保存</button>
  </div>
</template>

<script>

import API from '../config/api.js'

export default {
  name: 'createStory',
  data () {
    return {
      projectName: 'TNT',
      version: '1.0.0',
      storyList: [],
      storyText: ''
    }
  },

  methods: {
    add: function() {
      let text = this.storyText
      let id = this.storyList.length + 1
      this.storyList.push({
        text,
        id
      })
      this.storyText = ''
    },
    remove: function (item) {
      let removeIndex = this.storyList.indexOf(item)
      this.storyList.splice(removeIndex, 1)
    },
    save: function() {
      let { projectName, version, storyList } = this;

      let postParam = {
        projectName,
        version,
        storyList
      }

      fetch(API.createStorys, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(postParam)
      })
      .then(
        () => alert('新建成功')
      )
    }
  }

}
</script>

<style lang="scss" scoped>
  .create-wrapper {
    width: 600px;
    margin: 50px auto;

    .story-list {
      margin-bottom: 30px;
      .item {
        padding: 6px 0;
        .remove{
          float: right;
          margin-right: 68px;
        }
      }
    }
    .add-story {
      input {
        width: 526px;
        height: 28px;
      }
      button {
        width: 60px;
        height: 34px;
      }
    }
    .save-storys {
      width: 60px;
      height: 34px;
      margin-top: 50px;
      float: right;
    }
  }
</style>
