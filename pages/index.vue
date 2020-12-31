
<template>

</template>

<script>
   export default {
       name: "index",
       middleware : 'auth',
     mounted(){
         if (this.$cookies.get('_role')==="RH") {
         this.$router.push('/admin#')
       } else {
         this.$router.push('/salarie#')
       }
     }
   }
</script>

<style scoped>
</style>
