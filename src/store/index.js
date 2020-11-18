import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      currentUser: {},
      searchString: '',
      users: [
        {id: 1, name: 'name', login: 'login'},
        {id: 2, name: 'name1', login: 'login1'},
        {id: 3, name: 'name3', login: 'login3'}
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
        }
    },
    actions: {
    },
    modules: {
    },
    getters: {
        getUserById: state => id => {
            return state.users.find( user => user.id === id );
        },
        getUsersByLogin: state => login => {
            return  state.users.filter(user => (user.login.indexOf(login)) !== -1);
//                function(user){
//                    if(user.login === login){
//                        return true;
//                    }
//                }
//            //    user => (user.login.indexOf( login ) !== -1)
 //           ); 
        }
    }
});
