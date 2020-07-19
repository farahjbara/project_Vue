<template>
  <div class="">
    <h4 class="ui header"><i class="ui user icon black"></i>Mon Profile</h4>
  <div class="ui doubling stackable two column grid"  v-if="user">
    <div class="column">
  <div class="ui  very padded  container segment">
    <div class="container">
      <h5 class="title">My Profile</h5>

      <div class="content">
        <p >
          <strong>Username:</strong>
             {{user.nom}}
        </p>
        <p>
          <strong>Email:</strong>
          {{ user.email }}
        </p>
          </div>
    </div>
  </div>
</div>
 <div class="column">
  <div class="ui  very padded  container segment">
    <div class="container">
      <h2 class="title">My Profile</h2>
      <div class="content">
        <p >
          <strong>Username:</strong>
             {{user.nom}}
        </p>
        <p>
          <strong>Email:</strong>
          {{ user.email }}
        </p>
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
  fetch ({store}) {
    store.dispatch('getUsers')
  },
  computed: {
    user () {
      return this.$store.state.users
    }
  }
}
</script>
