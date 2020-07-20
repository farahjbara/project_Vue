<template>
  <div>
    <h4 class="ui header"><i class="ui user icon black"></i>Mon Profile</h4>

    <div class="segment ui message">
      <h3 class="ui header"> welcome </h3>
      <p v-if="user">{{ user.prenom }} | <strong>status</strong> {{roles}} </p>
    </div>
       <div class="ui grid stackable padded">
         <div
           class="four wide computer eight wide tablet sixteen wide mobile column"
         >
           <div class="ui fluid card">
             <div class="content">
               <div class="ui right floated header red">
                 <i class="icon users memeber"></i>
               </div>
               <div class="header">
                 <div class="ui red header">
                   {{users.length}}
                 </div>
               </div>
               <div class="meta">
                USERS
               </div>
               <div class="description">

               </div>
             </div>
             <div class="extra content">
               <div class="ui two buttons">
                 <div class="ui red button">PLUS</div>
               </div>
             </div>
           </div>
         </div>
         <div
           class="four wide computer eight wide tablet sixteen wide mobile column"
         >
           <div class="ui fluid card">
             <div class="content">
               <div class="ui right floated header green">
                 <i class="icon bed"></i>
               </div>
               <div class="header">
                 <div class="ui header green">{{demandes.length}}</div>
               </div>
               <div class="meta">
                 CONGES
               </div>
               <div class="description">

               </div>
             </div>
             <div class="extra content">
               <div class="ui two buttons">
                 <div class="ui green button">PLUS</div>
               </div>
             </div>
           </div>
         </div>
         <div
           class="four wide computer eight wide tablet sixteen wide mobile column"
         >
           <div class="ui fluid card">
             <div class="content">
               <div class="ui right floated header teal">
                 <i class="icon stopwatch"></i>
               </div>
               <div class="header">
                 <div class="ui teal header">{{permissions.length}}</div>
               </div>
               <div class="meta">
                 PERMESSIONS
               </div>
             </div>
             <div class="extra content">
               <div class="ui two buttons">
                 <div class="ui teal button">PLUS</div>
               </div>
             </div>
           </div>
         </div>
         <div
           class="four wide computer eight wide tablet sixteen wide mobile column"
         >
           <div class="ui fluid card">
             <div class="content">
               <div class="ui right floated header purple">
                 <i class="icon calculator"></i>
               </div>
               <div class="header">
                 <h4 class="ui purple header"><i class="icon tiny dollar"></i></h4>
               </div>
               <div class="meta">
                 SOLDE
               </div>
               <div class="description">
               </div>
             </div>
             <div class="extra content">
               <div class="ui two buttons">
                 <div class="ui purple button">PLUS</div>
               </div>
             </div>
           </div>
         </div>
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
      roles:'',
      error: '',
      demandes:[],
      permissions:[]
    }
  },
  methods: {
    getUser(){
     this.$axios.setHeader('Authorization', 'Bearer ' + this.$cookies.get('_token'))
    this.$axios.get('/users').then(response => {
      this.users = response.data ;
      }).catch(error => {

        this.error = error.response.data
        console.log(this.error);
      });
    },
    getDemande() {
      this.islod = true;
      this.$axios.setHeader('Authorization', 'Bearer ' + this.$cookies.get('_token'))
      this.$axios.get('/demandes').then(response => {
        this.demandes = response.data;
        }).catch(error => {
          this.error = error.response.data
            console.log(this.error);
        });
    },
    getPermission() {
        this.islod = true;
      this.$axios.setHeader('Authorization', 'Bearer ' + this.$cookies.get('_token'))
      this.$axios.get('/permissions').then(response => {
        this.permissions = response.data;
          this.islod = false;
        }).catch(error => {
          this.error = error.response.data
        });
    }

  },
  mounted() {
    this.roles = this.$cookies.get('_role')
    this.getUser();
    this.getDemande();
    this.getPermission();

  },
  computed: {
      user () {
        return this.users.find(user => user.email === this.$cookies.get('_email'))
      }
    }
}
</script>
