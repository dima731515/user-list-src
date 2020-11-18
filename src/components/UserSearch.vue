<template>
    <div class="serach">
        <input type="text" v-model="search" placeholder="Поиск пользователя по логину"/>
    </div>
</template>
<script>
export default{
    name: 'UserSearch',
    computed: {
        search:{
            get() {
                return this.$store.state.searchString;
            },
            set(value) {
                this.$store.commit('setSearchString', value)
            }
        }
    },
    methods: {
    }
}
</script>

<style>
.serach{

}
</style>
