<template >
  <div class="">
    <div class="ui divider hidden">

    </div>
    <h4 class="ui header">Désposer votre demande de permission</h4>
    <div class="segment ui error message" v-if="errors">
      <div class="ui headers">
        {{ errors.title}}
      </div>
      <div class="item">
        {{errors.detail}}
      </div>
    </div>
      <div class="segment ui success message" v-else-if="tmp" >
        <div class="ui headers">
          La Permission est envoyée
        </div>
    </div>
    <form :class="islod ? 'loading' : ''" method="POST" @submit.prevent="setPermission" class="ui segment form" style="max-width:850px!important">
      <div class="field ">
        <label>Date de permission</label>
        <input name="datepermission" v-model="datepermission"  type="date">
      </div>
   <div class="two fields">
    <div class="field ">
      <label>Heure de début</label>
      <input name="heuredebut" v-model="heuredebut"  type="datetime-local">
    </div>
    <div class="field">
      <label>Jusqu'à</label>
      <input name="heurefin" v-model="heurefin"  type="datetime-local">
    </div>
  </div>

  <button  class="ui button black " style="color:white" type="submit">Envoyer</button>


</form>
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
          tmp : [],
          datepermission: '',
          permissions:[],
          heurefin: '',
          heuredebut:'',
          errors:'',
           islod : false

      }
    },
    methods: {
      setPermission() {
       this.islod = true;
        this.$axios.setHeader('Authorization', 'Bearer ' + this.$cookies.get('_token'))
        this.$axios.post('/permissions',{
          datePermission: this.datepermission ,
          heureDebut:  this.heuredebut  ,
          heureFin: this.heurefin
        }).then(response => {
          this.tmp = '';
            this.errors='';
          this.tmp = response.data;
          this.getPermission();
          console.log(this.tmp);
          this.islod = false;
        }).catch(error => {
          this.errors='';
          this.islod = false;

          this.errors = error.response.data
          console.log(this.errors);
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
      }
    },
    mounted() {
      this.tmp = '';
      this.errors='';
      this.getPermission();

    }
  }
</script>

<style lang="css" scoped>
</style>
