<template >
  <div class="">
     <Nbvar/>
      <nuxt />
      <Dfooter/>
  </div>
</template>

<script>
import Nbvar from '~/components/navbar.vue'
import Dfooter from '~/components/footer.vue'
export default {
  components : {
    Nbvar,Dfooter
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
