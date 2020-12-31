<template>
  <div>
    <div class="segment ui error message" v-if="errors">
      <div class="ui headers">
        {{ errors.title}}
      </div>
      <div class="item">
        {{errors.detail}}
      </div>
    </div>
    <div class="segment ui error message" v-if="tmp">

       <strong>Bravo!!</strong>l'utilisateur {{tmp.pernom}} est enregistré avec la role {{tmp.roles[0]}}

    </div>

        <h4 class="ui headers">
        <i class="ui icon add user"></i>  créer un  Salarié
      </h4>

    <div class="ui segment padded">
      <form  class="ui form" method="post" @submit.prevent="setUser" >
  <div class="two fields">
    <div class="field">
      <label>NOM</label>
      <input v-model="nom"   type="text" required >
    </div>
    <div class="field">
      <label>PRENOM</label>
      <input  v-model="prenom" value="" type="text" required >
    </div>
  </div>
  <div class="two fields">
    <div class="field">
      <label>CIN</label>
      <input v-model="cin" name="cin" type="number" maxlength="8" required >
    </div>
    <div class="field">
      <label>TELEPHONE</label>
      <input v-model="numTel"  type="number" maxlength="8" required >
    </div>
  </div>
  <div class="fields two">
    <div class="field">
      <label>fonction</label>
      <input  value="" type="text" v-model="fonction" required >
    </div>
    <div class="field">
      <label>EMAIL</label>
      <input name="email" value="" type="email" v-model="email" required >
    </div>
  </div>

  <div class="two fields">
    <div class="field">
      <label>mot de passe</label>
      <input v-model="plainPasswor"  type="password" required >
    </div>
    <div class="field">
      <label>confir. la mot de passe</label>
      <input v-model="confirmPasswor"  type="password" required >
    </div>
  </div>

  <button  :class="islod ? 'loading' : ''"  type="submit" class="ui primary fluid submit button">Envoyer</button>

</form>
    </div>

  </div>

</template>

<script>
import axios from 'axios'
export default {
  middleware: 'auth',
  data(){
    return{
      user:[],
      roles:['ROLE_USER'],
      role:'',
      email:"",
      plainPasswor :"",
      confirmPasswor :"",
      cin:"",
      nom	:"",
      prenom:"",
      numTel:"",
      fonction:"",
      errors:'',
      tmp:'',
      islod : false


    }
  },
  methods:{
    setUser(){
        this.islod = true;
      this.$axios.setHeader('Authorization', 'Bearer ' + this.$cookies.get('_token'))
      this.$axios.post('/users',{
        email:this.email,
        plainPasswor :this.plainPasswor,
        confirmPasswor :this.confirmPasswor,
        cin: this.cin,
        nom:this.nom,
        prenom:this.prenom,
        numTel:this.numTel,
        fonction:this.fonction,
        roles:this.roles,
      })
       .then(response => {
        this.tmp = response.data;
          this.islod = false;
          this.errors='';
      }).catch(error => {

        this.errors = error.response.data
        console.log(this.errors);
        this.islod = false;
      });
    }
  },

  mounted() {


  }
}
</script>
