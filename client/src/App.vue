<template>
  <div id="app">
    <div v-if="currentRoute == '/'">
      <Home></Home>
    </div>
    <div v-if="currentRoute == '/create'">
      <CreateStory></CreateStory>
    </div>
    <div v-if="currentRoute == '/list'">
      <StoryList></StoryList>
    </div>
    <div v-if="currentRoute == '/chart'">
      <Chart></Chart>
    </div>
  </div>
</template>

<script>
import Home from './components/Home'
import CreateStory from './components/CreateStory'
import StoryList from './components/StoryList'
import Chart from './components/Chart'


export default {
  name: 'app',
  data () {
    return {
      currentRoute: window.location.pathname
    }
  },

  components: {
    Home,
    CreateStory,
    StoryList,
    Chart
  }
}
</script>

<style>

</style>
