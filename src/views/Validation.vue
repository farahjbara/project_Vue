<template>
<section>
   <title-bar style="margin:2rem;">
         Validation des demandes
      <router-link to="/" class="button is-primary" slot="button">
        Dashboard
       </router-link>
        </title-bar>
        <br>
        <br>
        <Steps>
        </Steps>
  </section>
</template>

<script>
import TitleBar from '@/components/TitleBar'
import Steps from '@/components/Steps'
export default {
 name: 'Validation',
  components: {
     TitleBar,
     Steps
  }
}
</script>
