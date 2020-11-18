<template>
    <button v-on:click="onClickButton()">Синфронизировать</button>
</template>
<script>
export default{
    name: 'SyncButton',
    computed: {
    },
    methods: {
        onClickButton: function(){
            console.log('click');
            this.$store.dispatch('serverSync');
        }
    }
}
</script>

<style>
.list{

}
</style>
