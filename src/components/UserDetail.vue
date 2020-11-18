<template>
    <div class="detail">
        {{ getUser.name }}
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
