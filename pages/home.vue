<template>
  <div class="">
    <h4 class="ui header"><i class="ui user icon black"></i>Mon Profile</h4>
  <div class="ui doubling stackable two column grid"  v-if="user">
    <div class="column">
  <div class="ui  very padded  container segment">
    <div class="container">
      <h5 class="title">My Profile</h5>

      <div class="content">
        <p >
          <strong>Username:</strong>
             {{user.nom}}
        </p>
        <p>
          <strong>Email:</strong>
          {{ user.email }}
        </p>
          </div>
    </div>
  </div>
</div>
 <div class="column">
  <div class="ui  very padded  container segment">
    <div class="container">
      <h2 class="title">My Profile</h2>
      <div class="content">
        <p >
          <strong>Username:</strong>
             {{user.nom}}
        </p>
        <p>
          <strong>Email:</strong>
          {{ user.email }}
        </p>
          </div>
    </div>
  </div>

</div>
    </div>
    <div class="segment ui error message" v-else>
      {{error}}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    layout: 'default',
  middleware: 'auth',
  props: ['email'],
  data() {
    return {
      users: [],
      error: ''
    }
  },
  mounted() {
    this.$axios.setHeader('Authorization', 'Bearer ' + this.$cookies.get('_token'))
    this.$axios.get('/users').then(response => {
      this.users = response.data ;
      }).catch(error => {
        console.log(error);
        this.error = error.response.data.message
      });
  },
  methods: {
    // logout() {
    //   axios.post('', {
    //     headers: {
    //       'Authorization': 'Bearer ' + this.$cookies.get('_token')
    //     }
    //   }).then(response => {
    //     this.$cookies.remove('_token')
    //     this.$cookies.remove('_email')
    //     this.$router.push('/login')
    //   })
    // },

  },
  computed: {
      user () {
        return this.users.find(user => user.email === this.$cookies.get('_email'))
      }
    }
}
</script>
