<template >
  <div class="">
    <div class="ui divider hidden">

    </div>
    <h4 class="ui header">Désposer votre demande de congé</h4>
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
          La demande est envoyée
        </div>
    </div>
    <form :class="islod ? 'loading' : ''" method="POST" @submit.prevent="setDemande" class="ui segment form" style="max-width:850px!important">
   <div class="two fields">
    <div class="field ">
      <label>Date début</label>
      <input name="datedebut" v-model="datedebut"  type="date">
    </div>
    <div class="field">
      <label>Date fin</label>
      <input name="datefin" v-model="datefin"  type="date">
    </div>
  </div>
  <div class="field ">
    <label>type de conges</label>
    <input name="typeconge" v-model="typeconge"  type="text">
  </div>
  <button  class="ui button black " style="color:white" type="submit">Envoyer</button>


</form>
<div class="ui divider">

</div>
<div class="ui header">
   Mes demandes
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
  </div>
</template>

<script>
export default {
  layout: 'default',
    middleware: 'auth',
    data(){
      return {
          tmp : [],
          datedebut: '',
          demandes:[],
          datefin: '',
          typeconge:'',
          errors:'',
           islod : false

      }
    },
    methods: {
      setDemande() {
       this.islod = true;
        this.$axios.setHeader('Authorization', 'Bearer ' + this.$cookies.get('_token'))
        this.$axios.post('/demandes',{
          dateDebut: this.datedebut ,
          dateFin:  this.datefin  ,
          typeConge: this.typeconge
        }).then(response => {
          this.tmp = '';
            this.errors='';
          this.tmp = response.data;
          this.getDemande();
      
          this.islod = false;
        }).catch(error => {
          this.errors='';
          this.islod = false;

          this.errors = error.response.data
          console.log(this.errors);
        });
      },
      getDemande() {
          this.islod = true;
        this.$axios.setHeader('Authorization', 'Bearer ' + this.$cookies.get('_token'))
        this.$axios.get('/demandes').then(response => {
          this.demandes = response.data;
            this.islod = false;
          }).catch(error => {
            this.errors = error.response.data
          });
      }
    },
    mounted() {
      this.tmp = '';
      this.errors='';
      this.getDemande();

    }
  }
</script>

<style lang="css" scoped>
</style>
