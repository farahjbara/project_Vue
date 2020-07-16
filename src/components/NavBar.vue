<template>
  <nav v-show="isNavBarVisible" id="navbar-main" class="navbar is-fixed-top">
    <div class="navbar-brand">
      <a class="navbar-item is-hidden-desktop" @click.prevent="menuToggleMobile">
        <b-icon :icon="menuToggleMobileIcon"/>
      </a>
      <div class="navbar-item has-control">
        <div class="control">
          <input class="input" placeholder="Search everywhere...">
        </div>
      </div>
    </div>
    <div class="navbar-brand is-right">
      <div class="navbar-item navbar-item-menu-toggle is-hidden-desktop">
        <a @click.prevent="menuNavBarToggle">
          <b-icon :icon="menuNavBarToggleIcon" custom-size="default"/>
        </a>
      </div>
    </div>
    <div class="navbar-menu fadeIn animated faster" :class="{'is-active':isMenuNavBarActive}">
      <div class="navbar-end">
        <nav-bar-menu class="has-user-avatar">
          <div class="is-user-avatar">
            <img :src="userAvatar" :alt="userName">
          </div>
          <div class="is-user-name">
            <span>{{ userName }}</span>
          </div>

          <div slot="dropdown" class="navbar-dropdown">
            <a class="navbar-item">
              <b-icon icon="account" custom-size="default"></b-icon>
              <span>My Profile</span>
            </a>
            <a class="navbar-item">
              <b-icon icon="settings" custom-size="default"></b-icon>
              <span>Settings</span>
            </a>
            <a class="navbar-item">
              <b-icon icon="email" custom-size="default"></b-icon>
              <span>Messages</span>
            </a>
            <hr class="navbar-divider">
           <router-link :to="{name:'Login'}" class="navbar-item">
              <b-icon icon="logout" custom-size="default"></b-icon>
              <span>Log Out</span>
            </router-link>
          </div>
         </nav-bar-menu>
         <router-link :to="{name:'Login'}" class="navbar-item" title="Log out" @click="logout">
          <b-icon icon="logout" custom-size="default"/>
          <span>Log out</span>
        </router-link>
      </div>
    </div>
    <aside  v-show="isAsideVisible" />
  </nav>
</template>

<script>
import NavBarMenu from '@/components/NavBarMenu'
import { mapState } from 'vuex'

export default {
  name: 'NavBar',
  components: {
    NavBarMenu
  },
  data () {
    return {
      isMenuNavBarActive: false,
      isAsideVisible: true
    }
  },
  computed: {
    menuNavBarToggleIcon () {
      return (this.isMenuNavBarActive) ? 'close' : 'dots-vertical'
    },
    menuToggleMobileIcon () {
      return this.isAsideMobileExpanded ? 'backburger' : 'forwardburger'
    },
    ...mapState([
      'userName',
      'userAvatar',
      'isNavBarVisible',
      'isAsideInVisible',
      'isAsideMobileExpanded'
    ])
  },
  methods: {
    menuToggleMobile () {
      this.$store.commit('asideMobileStateToggle')
    },
    menuNavBarToggle () {
      this.isMenuNavBarActive = (!this.isMenuNavBarActive)
    }
  }
}
</script>
