<template >
<div dir="ltr" class="">
  <div class="ui sidebar inverted vertical menu sidebar-menu" id="sidebar">
       <div class="item">
         <div class="header">General</div>
         <div class="menu">
           <a class="item">
             <div>
               <i class="icon tachometer alternate"></i>
               Dashboard
             </div>
           </a>
         </div>
       </div>
       <div class="item">
         <div class="header">
           Administration
         </div>
         <div class="menu">
           <a class="item">
             <div><i class="cogs icon"></i>Settings</div>
           </a>
           <a class="item">
             <div><i class="users icon"></i>Team</div>
           </a>
         </div>
       </div>

       <a href="#" class="item">
         <div>
           <i class="icon chart line"></i>
           Charts
         </div>
       </a>

       <a class="item">
         <div>
           <i class="icon lightbulb"></i>
           Apps
         </div>
       </a>
       <div class="item">
         <div class="header">Other</div>
         <div class="menu">
           <a href="#" class="item">
             <div>
               <i class="icon envelope"></i>
               Messages
             </div>
           </a>

           <a href="#" class="item">
             <div>
               <i class="icon calendar alternate"></i>
               Calendar
             </div>
           </a>
         </div>
       </div>

       <div class="item">
         <form action="#">
           <div class="ui mini action input">
             <input type="text" placeholder="Search..." />
             <button class="ui mini icon button">
               <i class=" search icon"></i>
             </button>
           </div>
         </form>
       </div>
       <div class="ui segment inverted">
         <div class="ui tiny olive inverted progress">
           <div class="bar" style="width: 54%"></div>
           <div class="label">Monthly Bandwidth</div>
         </div>

         <div class="ui tiny teal inverted progress">
           <div class="bar" style="width:78%"></div>
           <div class="label">Disk Usage</div>
         </div>
       </div>
     </div>

     <!-- sidebar -->
     <!-- top nav -->

     <nav class="ui top fixed inverted menu">
       <div class="left menu">
         <a href="#" class="sidebar-menu-toggler item" data-target="#sidebar">
           <i class="sidebar icon"></i>
         </a>
         <a href="#" class="header item">
           Semantic UI
         </a>
       </div>

       <div class="right menu">
         <a href="#" class="item">
           <i class="bell icon"></i>
         </a>
         <div class="ui dropdown item">
           <i class="user cirlce icon"></i>
           <div class="menu">
             <a href="#" class="item">
               <i class="info circle icon"></i> Profile</a
             >
             <a href="#" class="item">
               <i class="wrench icon"></i>
               Settings</a
             >
             <a href="#" class="item">
               <i class="sign-out icon"></i>
               Logout
             </a>
           </div>
         </div>
       </div>
     </nav>

     <!-- top nav -->
</div>
</template>

<script>
export default {
    methods: {

    },
    data() {
        return {
            isOn: false,
            isFULL: true,
            users:{}
        }
    },
    methods: {
      logout() {
          this.$cookies.remove('_token')
          this.$cookies.remove('_email')
          this.$router.push('/login')

    }
  }

}
</script>
<style lang="scss">

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

</style>
