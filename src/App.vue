<template>
  <div id="app">
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <UserSearch/>
    <UsersList/>
    <UserDetail/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import UsersList from './components/UsersList.vue'
import UserDetail from './components/UserDetail.vue'
import UserSearch from './components/UserSearch.vue'

export default {
  name: 'App',
  components: {
//    HelloWorld,
    UsersList,
    UserDetail, 
    UserSearch 
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
