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
      <div class="segment ui success message" v-else-if="tmp" >
        <div class="ui headers">
          La demande est envoyée
        </div>
    </div>
    <div class="ui headers">
    <i class="ui icon user"></i>  Mon Profile
    </div>
    <div class="ui segment padded">
      <form disabled class="ui form segment" method="POST" >
  <div class="two fields">
    <div class="field">
      <label>NOM</label>
      <input v-model="user.nom"   type="text">
    </div>
    <div class="field">
      <label>PRENOM</label>
      <input  v-model="user.prenom" value="" type="text">
    </div>
  </div>
  <div class="two fields">
    <div class="field">
      <label>CIN</label>
      <input v-model="user.cin" name="cin" type="text">
    </div>
    <div class="field">
      <label>TELEPHONE</label>
      <input v-model="user.numTel"  type="text">
    </div>
  </div>
  <div class="field">
    <label>EMAIL</label>
    <input name="email" value="" type="email" v-model="user.email">
  </div>
  <button disabled type="submit" class="ui primary submit button">Submit</button>

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
      roles:'',
      email:"",
      plainPasswor :"",
      confirmPasswor :"",
      cin:"",
      nom	:"",
      prenom:"",
      numTel:"",
      errors:'',
      tmp:''


    }
  },
  methods:{
    editUser(){
    this.$axios.setHeader('Authorization', 'Bearer ' + this.$cookies.get('_token'))
      this.$axios.put('users/' + this.$cookies.get('_id'),{
        cin: this.user.cin,
        email: this.user.email,
        nom:this.user.cin,
        prenom:this.user.prenom,
        numTel:this.user.numTel
      }).then(response => {
        this.user = response.data
        this.tmp = response.data;
          this.errors='';
        this.$cookies.remove('_email')
        this.$cookies.set('_email',this.user.email, {
          path: '/',
        });
      }).catch(error => {
        this.errors = error.response.data.message
        console.log(this.errors);
      });

    },

    getUser(){
      this.$axios.get('/init').then(response => {
        this.user = response.data.find(user => user.email === this.$cookies.get('_email'));
        this.roles = this.$cookies.get('_role') ;
        }).catch(error => {
          console.log(error);
          this.error = error.response.data
        })
    }
  },

  mounted() {
     this.getUser()
  }
}
</script>
