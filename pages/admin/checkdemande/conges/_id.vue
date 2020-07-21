<template lang="html">
  <div class="">
    <h2 class="ui header"> validation des demandes</h2>
<form  method="post" class="ui form segment" :class="islod ? 'loading' : ''">
  <h4 class="ui header">Demande</h4>

<div v-show="step === 1">
<div class="ui segment">
  <div v-if="user" class="ui header">
    <strong>Salarié </strong> : {{user.prenom + ' '+ user.nom}}
  </div>
  <div class="two fields">
   <div class="field ">
     <label>Date début</label>
     <input name="datedebut" v-model="demandes.dateDebut"  type="text" disabled>
   </div>
   <div class="field">
     <label>Date fin</label>
     <input name="datefin" v-model="demandes.dateFin"  type="text" disabled>
   </div>
 </div>
   <div class="two fields">
 <div class="field ">
   <label>type de conges</label>
   <input name="typeconge" v-model="demandes.typeConge"  type="text" disabled>
 </div>
 <div class="field ">
   <label>status</label>
   <input name="typeconge" v-model="demandes.etat"  type="text" disabled>
 </div>
 </div>
</div>


  <nuxt-link v-if="demandes.etat != 'en cours'" to='/admin/demandes' class="ui button">Cancel</nuxt-link>
    <button v-else  class="ui button" @click.prevent="next()">Next</button>

</div>

<div v-show="step === 2">
    <h4 class="ui header">Verfier solde</h4>
  <div class="ui segment">
    <client-only>
    <table class="ui celled table loading">
    <thead>
    <tr>
      <th>Date Demandé</th>
      <th>Année</th>
      <th>Solde actuel</th>
      <th>Nmbr des jours pris</th>
      <th>solde annuel</th>
    </tr>
  </thead>
    <tbody>
      <tr>
        <td >{{nodata}}</td>
        <td >{{nodata}}</td>
        <td >{{nodata}}</td>
        <td >{{nodata}}</td>
        <td >{{nodata}}</td>
      </tr>
    </tbody>
  </table>
</client-only>
  </div>

  <button class="ui button" @click.prevent="prev()">Previous</button>
  <button class="ui button" @click.prevent="next()">Next</button>

</div>

<div v-show="step === 3">
<h4 class="ui header">Validation</h4>

<div class="segment ui message">
  voulez vous validier la demande ou la réfuser

</div>
<div class="ui buttons">
  <button @click='Refuse' class="ui negative button">Réfuser</button>
  <div class="OU"></div>
  <button @click='Valide' class="ui positive button">Validé</button>
</div>



<button class="ui button" @click.prevent="prev()">Previous</button>


</div>
</form>
  </div>
</template>

<script>
export default {
  layout: 'default',
    middleware: 'auth',
    data(){
      return {
          nodata : 'no data',
          tmp : [],
          datedebut: '',
          user:[],
          demandes:[],
          datefin: '',
          typeconge:'',
          errors:'',
           islod : false,
           step:1,
           id :this.$route.params.id,
           id_user:''
         }
    },
    methods: {
        Refuse() {
       this.islod = true;
        this.$axios.setHeader('Authorization', 'Bearer ' + this.$cookies.get('_token'))
        this.$axios.put('/demandes/'+ this.id,{
          etat: 'Réfuser',
        }).then(response => {
          this.tmp = response.data;
          console.log(this.tmp);
          this.islod = false;
        }).catch(error => {
          this.islod = false;
          this.errors = error.response.data
          console.log(this.errors);
        });
      },
      Valide() {
     this.islod = true;
      this.$axios.setHeader('Authorization', 'Bearer ' + this.$cookies.get('_token'))
      this.$axios.put('/demandes/'+ this.id,{
        etat: 'Validé',
      }).then(response => {
        this.tmp = response.data;
        console.log(this.tmp);
        this.islod = false;
      }).catch(error => {
        this.islod = false;
        this.errors = error.response.data
        console.log(this.errors);
      });
    },
      getUser(){
        this.$axios.get('/users/'+ this.id_user).then(response => {
          this.user = response.data.find(user => user.email === this.$cookies.get('_email'));
          console.log(this.user);
          }).catch(error => {
            console.log(error);
            this.error = error.response.data
          })
      },
      getDemande() {
        this.islod = true;
        this.$axios.setHeader('Authorization', 'Bearer ' + this.$cookies.get('_token'))
        this.$axios.get('/demandes/'+ this.id).then(response => {
          this.demandes = response.data;
          this.id_user = this.demandes.user.substr(-1);
          console.log(this.id_user)
            this.islod = false;
          }).catch(error => {
            this.errors = error.response.data
          });
      },
      prev() {
         this.step--;
   },
   next() {
      this.step++;
     }

    },
    mounted() {
      this.getDemande();
      this.getUser();

    }
  }
</script>

<style lang="css" scoped>
</style>
