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
    });
  },
  SET_ID_USER: (state, data) => {
    window.$nuxt.$cookies.set('_id', data.id, {
      path: '/',
    })
  },
  SET_ROLE_USER: (state, data) => {
    window.$nuxt.$cookies.set('_role', data.role, {
      path: '/',
    })
  },
  REMOVE_AUTH_DATA: (state) => {
    window.$nuxt.$cookies.remove('_token');
     window.$nuxt.$cookies.remove('_email');
  },

  GET_USER: (state, users) => {
       state.users = users
     },
}

export const actions = {
  async getuser ({commit}){
   this.$axios.get('/init').then(resp => commit('GET_USER', resp.data))
   .catch(error => {
       console.log(error.res.data);
     });

  }

}
