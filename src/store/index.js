import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      currentUser: {},
      searchString: '',
      users: [
        {id: 1, url: 'name', login: 'login'},
        {id: 2, url: 'name1', login: 'login1'},
        {id: 3, url: 'name3', login: 'login3'}
      ]
    },
    mutations: {
        setSearchString(state, string){
            this.state.searchString = string;
        },
        setCurrentUser(state, id){
            let current = this.state.users.find( 
                item => {
                    return item.id == id;
                }
            );
            if(current){
                this.state.currentUser = current;
            }else{
                this.state.currentUser = this.state.users[0];
            }
        },
        setUsers(state, users){
            this.state.users = users;
        }
    },
    actions: {
        async serverSync(context) {
            try {
                const {data} = await Axios.get('https://api.github.com/users');
                context.commit('setUsers', data);
            } catch (e) {
                console.log(e);
            }
        }
    },
    modules: {
    },
    getters: {
        getUserById: state => id => {
            return state.users.find( user => user.id === id );
        },
        getUsersByLogin: state => login => {
            return  state.users.filter(user => (user.login.indexOf(login)) !== -1);
        }
    }
});
