<template >
  <div class="">
<div class="ui divider">

</div>
<div class="ui header">
  Listes des utilisateurs
</div>
<div class="ui segment">
  <table class="ui celled table loading">
  <thead>
    <tr><th>ID</th>
    <th>Prénom</th>
    <th>Nom</th>
    <th>Email</th>
    <th>Telephone</th>
    <th>Role</th>
  </tr></thead>
  <tbody>
    <tr v-for="user in users"  :key="user.id">
      <td  >{{user.id}}</td>
      <td >{{user.prenom}}</td>
      <td >{{user.nom}}</td>
      <td >{{user.email}}</td>
      <td >{{user.numTel}}</td>
      <td v-if="user.roles[0] =='ROLE_USER'" >Salarié </td>
      <td v-else >Admin : RH</td>

    </tr>
  </tbody>
</table>
</div>
  </div>
</template>

<script>
export default {
  layout: 'default',
    middleware: 'auth',
    data(){
      return {
          users:[],
      }
    },
    methods: {

    getUser() {
        this.islod = true;
      this.$axios.setHeader('Authorization', 'Bearer ' + this.$cookies.get('_token'))
      this.$axios.get('/users').then(response => {
        this.users = response.data;
          this.islod = false;
        }).catch(error => {
          this.errors = error.response.data
        });
    }

  },
    mounted() {
      this.getUser();

    }
  }
</script>

<style lang="css" scoped>
</style>
