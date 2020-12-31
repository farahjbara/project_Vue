<template >
  <div class="">
     <div class="q-mt-sm q-px-md">
      <nuxt />
    </div>
    <div class="ui divider hidden">

    </div>
      <Dfooter/>
  </div>
</template>

<script>
import Nbvar from '~/components/navbar.vue'
import Dfooter from '~/components/footer.vue'
export default {
  components : {
    Dfooter
  }
}
</script>

<style>
body {
  background: #f5f8fa !important
}
</style>


<style>
</style>
