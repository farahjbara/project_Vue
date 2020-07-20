<template>
  <div class="">
    <h4 class="ui header"><i class="ui user icon black"></i>Mon Profile</h4>

    <div class="segment ui message">
      <h3 class="ui header"> welcome </h3>
      <p>{{ users }} | <strong>status</strong> {{roles}} </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  layout: 'default',
  middleware: 'auth',
  data() {
    return {
      users: '',
      roles: ''
    }
  },
  async fetch ({ store }) {
        await store.dispatch('getuser')
    },
  mounted() {
     this.users = this.$cookies.get('_email').slice(0, this.$cookies.get('_email').indexOf('@'));
     this.roles = this.$cookies.get('_role');
  },
}
</script>
