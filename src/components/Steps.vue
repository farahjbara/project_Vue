<template>
 <section>
    <b-steps>
        <b-step-item label="Demande" icon="clipboard">
          <form style="margin-left:20rem; margin-right:20rem; margin:2rem; width: 350px; height: 150px;" >
        <label class="label"> Salarié </label>
       <div class="control">
       <input class="input" type="text" placeholder="Text input">
       </div>

       <label class="label" > Date début </label>
       <input class="input" type="date" >

       <label class="label"> Date fin </label>
       <input class="input" type="date" >

       <label class="label"> Durée </label>
       <input class="input" type="text" >

       <label class="label"> Type de congé </label>
       <input class="input" type="text">
          </form>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
        </b-step-item>

        <b-step-item label="Verifier solde" icon="calculator">
            <tab-solde>
           </tab-solde>
          <br>

        </b-step-item>
        <b-step-item label="Validation" icon="send">
          <br>
          <br>
           <form style="margin-left:35rem; background-color:white;">
          <h3 style="font-weight: bold;">
            voulez vous valider la demande ou le réfuser ?
                </h3>
                <br>
                <br>
               <div class="buttons">
                  <b-button tag="router-link"
                     to="/documentation"
                     type="is-danger">
                     Réfuser
                   </b-button>
                  <b-button tag="router-link"
                    to="/expo"
                    type="is-success">
                Accepter
                 </b-button>
               </div>
            </form>

        </b-step-item>
    </b-steps>

</section>
</template>
<script>
import TabSolde from '@/components/TabSolde'
export default {
   name: 'Steps',
   components: {
     TabSolde
  },
  data () {
    return {

    }
  }
}
</script>
