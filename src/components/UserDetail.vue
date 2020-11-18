<template>
    <div class="detail">
        <h2>{{ getUser.login }}</h2>
        <img :src="getUser.avatar_url" :alt="getUser.avatar_url">
    </div>
</template>
<script>
export default{
    name: 'UserDetail',
    computed: {
        getUser(){
            return this.$store.state.currentUser;
        }
    }
}
</script>
<style>
.detail{

}
</style>
