<template>
  <div id="app">
    <SyncButton/>
    <div class="container">
        <div class="section">
            <UserSearch/>
            <UsersList/>
        </div>
        <div class="section">
            <UserDetail/>
        </div>
    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import UsersList from './components/UsersList.vue'
import UserDetail from './components/UserDetail.vue'
import UserSearch from './components/UserSearch.vue'
import SyncButton from './components/SyncButton.vue'

export default {
  name: 'App',
  components: {
//    HelloWorld,
    UsersList,
    UserDetail, 
    UserSearch, 
    SyncButton 
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
.container{
    display:flex;
}
.section{
    width:600px;
}
</style>
