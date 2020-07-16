<template>
    <div>
      <title-bar style="margin:1rem;">
        Liste des projets
      <router-link to="/" class="button is-primary" slot="button">
        Dashboard
       </router-link>
      </title-bar>

<div class="card" style="margin-left:9rem; margin-right:9rem; margin:5rem " >
  <header class="card-header">
    <p class="card-header-title">
      <img src="https://img.icons8.com/ios-glyphs/30/000000/group-of-projects.png"/>
      Projet 1
    </p>
    <a href="#" class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </a>
  </header>
  <div class="card-content">
    <div class="content">
   <h3 style="font-weight: bolder;" > Application de gestion des pièces de rechanges   </h3>
    <br>
    <h4>
    <img src="https://img.icons8.com/ios-glyphs/30/000000/services.png"/>
    Outils :
    </h4>
      <a href="#">#Power BI </a> <br>
      <a href="#">#C++</a> <br>
      <a href="#">#SharePoint</a>
      <br>
      <br>
      <p style="color:red; font-weight: bolder;" >
      <img src="https://img.icons8.com/ios-glyphs/30/000000/hourglass-sand-bottom.png"/>
      Date limite : </p>
      <time datetime="2020-1-1"> 11:09 PM - 1 aout 2020</time>
    </div>
  </div>
  <footer class="card-footer">
   <button style =" float: left;" class="button" @click="confirmCustom">
    Détails
   </button>
  </footer>
</div>
    </div>
</template>
<script>
import TitleBar from '@/components/TitleBar'

export default {
   name: 'Projet',
      components: {
      TitleBar
    },
  data () {
     return {

     }
    },
   methods: {
 confirmCustom () {
                this.$buefy.dialog.confirm({
                    title: 'Description :',
                    message: `Mettre en place d’un process de lister toutes les pièces de rechange du chaque modèle de voiture,
une fois le model est sélectionné, l’application fournit une liste des pièces recommandés et permet
aux ouvriers de sélectionner celui qui leur convient le mieux.`,
                    confirmText: 'Bien',
                    type: 'is-success',
                    onConfirm: () => this.$buefy.toast.open('User agreed')
                })
            }
   }

}
</script>
