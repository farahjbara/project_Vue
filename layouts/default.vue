<template >
  <div class="">
     <Nbvar/>
     <div class="pusher" style="margin-top: 60px; ;margin-left:10px;">
        <div class="main-content">
       <nuxt />
     </div>
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
