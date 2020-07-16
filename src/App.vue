<template>
  <div id="app">
    <nav-bar/>
    <aside-menu :menu="menu" />
    <router-view/>
    <footer-bar/>
  </div>
</template>

<style lang="scss">

</style>
<script>
import NavBar from '@/components/NavBar'
import AsideMenu from '@/components/AsideMenu'
import FooterBar from '@/components/FooterBar'

export default {
  components: { FooterBar, AsideMenu, NavBar },
  computed: {
    menu () {
      return [
        {
          to: '/',
          icon: 'desktop-mac',
          label: 'Dashboard'
        },
        {
          to: '/profile',
          label: 'Profile',
          icon: 'account-circle'
        },
        {
          to: '/tables',
          label: 'Historique',
          icon: 'table',
          updateMark: true
        },
        {
          to: '/calendar',
          label: 'Calendrier',
          icon: 'calendar'
        },
        {
          to: '/projet',
          label: 'Projets',
          icon: 'briefcase'
        },
        {
          label: 'Demande',
          icon: 'square-edit-outline',
          subLabel: 'Submenus Example',
          menu: [

            {
              to: '/conge',
              href: '#void',
              label: 'Congé'
            },
            {
              to: '/permission',
              href: '#void',
              label: 'Permission'
            }
          ]
        },
        {
          to: '/projets',
          label: 'liste des projets ',
          icon: 'view-list',
          updateMark: true

        },
        {
          to: '/Solde',
          label: 'Compteurs solde',
          icon: 'calculator'
        },
        {
          to: '/Validation',
          label: 'Demandes à valider ',
          icon: 'clipboard',
          updateMark: true
        },
        {
          label: 'About',
          icon: 'help-circle'
        }
      ]
    }
  },
  created () {
    this.$store.commit('user', {
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://avatars.dicebear.com/v2/gridy/John-Doe.svg'
    })
  }
}
</script>
