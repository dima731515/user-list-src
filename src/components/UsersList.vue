<template>
    <div class="list">
        <ul>
            <li v-for="user in getUsers" v-bind:key="user.id" v-on:click="onClickItem(user.id)">{{ user.name}} - {{ user.name }} - {{ user.login }}</li>
        </ul>
    </div>
</template>
<script>
export default{
    name: 'UsersList',
    computed: {
        getUsers(){
            if(this.$store.state.searchString != ''){
                return this.$store.getters.getUsersByLogin(this.$store.state.searchString); 
            }
            return this.$store.state.users;
        }
    },
    methods: {
        onClickItem: function(id){
            this.$store.commit('setCurrentUser', id);
        }
    }
}
</script>

<style>
.list{

}
</style>
