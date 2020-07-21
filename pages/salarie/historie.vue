<template >
  <div class="">
<div class="ui divider">

</div>
<div class="ui header">
   mes demandes de congés
</div>
<div class="ui segment">
  <table class="ui celled table loading">
  <thead>
    <tr><th>ID</th>
    <th>Date Demandé</th>
    <th>Date Début</th>
    <th>Date fin</th>
    <th>type absence</th>
    <th>status</th>
  </tr></thead>
  <tbody>
    <tr v-for="demande in demandes"  :key="demande.id">
      <td  >{{demande.id}}</td>
      <td >{{demande.dateDemande.slice(0, demande.dateDemande.indexOf('T'))}}</td>
      <td >{{demande.dateDebut.slice(0, demande.dateDebut.indexOf('T'))}}</td>
      <td >{{demande.dateFin.slice(0, demande.dateFin.indexOf('T'))}}</td>
      <td >{{demande.typeConge}}</td>
      <td >{{demande.etat}} </td>
    </tr>
  </tbody>
</table>
</div>
<div class="ui divider">

</div>
<div class="ui header">
   Mes permissions
</div>
<div class="ui segment">
  <table class="ui celled table loading">
  <thead>
    <tr><th>ID</th>
    <th>Date de permi.</th>
    <th>Heure début</th>
    <th>Heure fin</th>
    <th>status</th>
  </tr></thead>
  <tbody>
    <tr v-for="permission in permissions"  :key="permission.id">
      <td  >{{permission.id}}</td>
      <td >{{permission.datePermission.slice(0, permission.datePermission.indexOf('T'))}}</td>
      <td >{{permission.heureDebut.slice(permission.heureDebut.indexOf('T')+1, permission.heureDebut.indexOf('+'))}}</td>
      <td >{{permission.heureFin.slice(permission.heureFin.indexOf('T')+1, permission.heureFin.indexOf('+'))}}</td>
      <td >{{permission.etatPermission}}</i></td>
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
          demandes:[],
          permissions:[],
          datefin: '',
          typeconge:'',
          errors:'',
           islod : false

      }
    },
    methods: {
      getDemande() {
          this.islod = true;
        this.$axios.setHeader('Authorization', 'Bearer ' + this.$cookies.get('_token'))
        this.$axios.get('/demandes').then(response => {
          this.demandes = response.data //.filter(dem => dem.user.substr(-1) == this.$cookies.get('_id'));
          console.log(this.demandes);
            this.islod = false;
          }).catch(error => {
            this.errors = error.response.data
          });
      },
    getPermission() {
        this.islod = true;
      this.$axios.setHeader('Authorization', 'Bearer ' + this.$cookies.get('_token'))
      this.$axios.get('/permissions').then(response => {
        this.permissions = response.data;
          this.islod = false;
        }).catch(error => {
          this.errors = error.response.data
        });
    },
    deletePermission(id) {
      his.$axios.setHeader('Authorization', 'Bearer ' + this.$cookies.get('_token'))
      this.$axios.delete('/permissions'+id).then(response => {
        this.getPermission();
        }).catch(error => {
          this.errors = error.response.data
        });
    },
    deletePermission(id) {
      his.$axios.setHeader('Authorization', 'Bearer ' + this.$cookies.get('_token'))
      this.$axios.delete('/permissions'+id).then(response => {
        this.getPermission();
        }).catch(error => {
          this.errors = error.response.data
        });
    },
  },
    mounted() {

      this.getDemande();
      this.getPermission();

    }
  }
</script>

<style lang="css" scoped>
</style>
