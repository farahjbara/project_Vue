<template >
<div dir="ltr" class="">
  <div :class="isOn ? '' : 'left overlay visible an'" class="ui colorrr sidebar on inverted vertical big menu sidebar-menu " style="margin-top: 50px !important;" id="sidebar">
    <div class="logo">
       <div class="image">
         <img class="ui mini circular image" src="/dit.png" alt="">
       </div>
    </div>
    <div class="ui divider hidden">

    </div>
    <div class="ui divider hidden">

    </div>
    <br>
      <div  class="ui secondary p2 massive vertical fluid menu" v-if="this.roles=='Salarié'">
          <nuxt-link to="/salarie/welcome" class="item">
              <i class="ui icon home"></i>
              Home
          </nuxt-link >
          <nuxt-link to="/salarie/profile" class="item" >
              <i class="ui icon user"></i>
              Profile
          </nuxt-link>
          <nuxt-link to="/salarie/historie" class="item">
              <i class="ui icon history"></i>
              Historique
          </nuxt-link >
          <nuxt-link to="/salarie/calendar" class="item">
              <i class="ui icon calendar"></i>
              Calendrier
          </nuxt-link >
           <div class="item balck">
               <i class="ui icon circle"></i>
            <div class="header balck">
              Demande :
            </div>
            <div class="menu">
            <nuxt-link to="/salarie/setdemande" class="item">
                <i class="ui icon bed"></i>
                Conges
            </nuxt-link>
            <nuxt-link to="/salarie/setpermi" class="item">
                <i class="ui icon stopwatch"></i>
                Permissions
            </nuxt-link>
          </div>
          </div>

      </div>
      <div  class="ui secondary p2 massive vertical fluid menu" v-if="this.roles=='RH'">
          <nuxt-link to="/admin#" class="item">
              <i class="ui icon home"></i>
              Home
          </nuxt-link >
          <nuxt-link to="/admin/profile" class="item" >
              <i class="ui icon user"></i>
              Profile
          </nuxt-link>
          <nuxt-link to="/admin/demandes" class="item">
              <i class="ui icon clipboard list add"></i>
              Liste des demandes
          </nuxt-link >
          <nuxt-link to="/admin/calendar" class="item">
              <i class="ui icon calendar"></i>
              Calendrier
          </nuxt-link >
           <div class="item balck">
               <i class="ui icon circle"></i>
            <div class="header balck">
              Demande :
            </div>
            <div class="menu">
            <nuxt-link to="/admin/setdemande" class="item">
                <i class="ui icon bed"></i>
                Conges
            </nuxt-link>
            <nuxt-link to="/admin/setpermi" class="item">
                <i class="ui icon stopwatch"></i>
                Permissions
            </nuxt-link>
          </div>
          </div>

      </div>
     </div>

     <!-- sidebar -->
     <!-- top nav -->

     <nav class="ui top fixed  big menu">
       <div  @click="isOn = !isOn" class="left menu">
         <a href="#" class="item" data-target="#sidebar">
           <i class="sidebar icon"></i>
         </a>
         <a href="#" class="header item">
          Gestion des conges
         </a>
       </div>

       <div class="right menu">
         <a   href="" class="item title">
           <p>{{username}} : <strong>{{roles}}</strong> </p>
         </a>
         <div class="ui dropdown item">
           <i class="user cirlce icon"></i>
           <div class="menu">
             <h5  class="item">
               <i class="user icon"></i>
               {{users.email}}
               </h5>
             <a href="" class="item">
               <i class="info circle icon"></i>
               Profile</a>
             <a href="" class="item" @click="logout">
               <i class="sign-out icon"></i>
               Déconnexion
             </a>
           </div>
         </div>
       </div>
     </nav>
     <!-- top nav -->
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
      isOn:true,
      users: [],
      username:'',
      roles :'',
      error: ''

    }
  },
  mounted() {
    this.$axios.get('/init').then(response => {
      this.users = response.data.find(user => user.email === this.$cookies.get('_email'));
      this.roles = this.$cookies.get('_role') ;
        this.username = this.users.email.slice(0, this.users.username.indexOf('@'))
      }).catch(error => {
        console.log(error);
        this.error = error.response.data.message
      });
      this.roles = this.$cookies.get('_role') ;


  $('.dropdown')
  .dropdown({
    action: 'hide'
  });
  },
    methods: {
      logout() {
          this.$cookies.remove('_token')
          this.$cookies.remove('_email')
          this.$cookies.remove('_role')
          this.$cookies.remove('_id')
          this.$router.push('/login')
    }
  }

}
</script>
<style lang="scss">
.colorrr{
  background: #051d38 !important;
  background-image: linear-gradient(90deg,#051d38,#1e344c) !important;
}
.an{
  transition: 0.4s;
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
}
.on{
  transition: 0.4s;
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
}
:root {
 --tablet: 768px;
 --smallMonitor: 992px;
 --largeMonitor: 1200px;
 --font-family: 'Open Sans', sans-serif;
}
body {
 font-family: var(--font-family) !important;
}
body ::-webkit-scrollbar {
 width: 6px;
}
.ui.vertical.menu.sidebar-menu {
 margin-top: 40px !important;
 max-height: calc(100% - 40px) !important;
 height: calc(100% - 40px) !important;
}
.ui.vertical.menu.sidebar-menu .item i.icon {
 float: left;
 margin: 0em 0.5em 0em 0em;
}
.main-content {
 margin-top: 40px;
}
@media (min-width: 768px) {
 .ui.vertical.menu.sidebar-menu {
   visibility: visible;
   transform: translate3d(0, 0, 0);
   width: 15rem !important;
 }
 .main-content {
   margin-left: 15rem;
 }
 .sidebar-menu-toggler {
   display: none !important;
 }
}
.logo{
  .image{
    margin: auto;
    top: 11px;
    img{
      width: 50px !important;
    }
  }
}

#sideBar {


    &.active {

    }
    .profile {
        content: ' ';
        height: 150px;
        background: grey;
        display: flex;
        flex-wrap: wrap;
        // .content {
        //     position: relative;
        //     margin: auto;
        //     justify-content: center;
        //     text-align: center;
        //     h3{
        //       margin-top: 5px;
        //     }
        // }

    }
    .p2 {
        margin-bottom: 100px !important;
        .active{
          background-color: #04172c !important;
           color: #fff !important;
           .icon{
             color: #fff !important;
           }
        }
        .item{
            color: hsla(0,0%,100%,.3);
            line-height: 1.25 !important;
          .icon {
            float: left !important ;
            color: hsla(0,0%,100%,.3);
            padding-right: 25px;


          }
        }
    }
}

</style>
