<template >
  <div class="">
     <Nbvar/>
     <div class="q-mt-xl q-px-md" style="margin-top:100px">
       <nuxt />
     </div>
      <Dfooter/>
  </div>
</template>

<script>
import Nbvar from '~/components/navbarv.vue'
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
