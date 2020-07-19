export const state = () => ({
  users: []
})

export const mutations = {
  SET_AUTH_DATA: (state, data) => {
    window.$nuxt.$cookies.set('_token', data.token, {
      path: '/',
    });
    window.$nuxt.$cookies.set('_email', data.email, {
      path: '/',
    })
  },

  REMOVE_AUTH_DATA: (state) => {
    window.$nuxt.$cookies.remove('_token');
     window.$nuxt.$cookies.remove('_email');
  },

  getusers: (state, users) => {
       state.users = getUsers
     },
}

export const actions = {
  async getUsers ({commit},store){
   this.$axios.setHeader('Authorization', 'Bearer ' +  window.$nuxt.$cookies.get('_token'));
   this.$axios.get('/users').then(resp => commit('getusers', resp.data))
   .catch(error => {
       console.log(error.message);
     });

  }

}
