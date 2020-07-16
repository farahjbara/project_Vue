<template>
<div>

 <title-bar style="margin:2rem;"> Déposer votre demande de congé </title-bar>
 <form style="margin-left:2rem;margin-right:2rem;">
   <b-field label="sélectionner une date">
        <b-datepicker
            placeholder="De ... à ..."
            icon="calendar-today"
            v-model="dates"
            range>
        </b-datepicker>
    </b-field>
<div class="field">
  <label class="label">Type de congé </label>
  <div class="control">
    <div class="select">
      <select  v-model="selected" >
       <option disabled value="Congé"> </option>
       <option>Congé Annuel</option>
       <option>Maladie</option>
       <option>Maternité</option>
       <option>Mariage</option>
       <option>Naissance</option>
       <option>décès</option>
      </select>
    </div>
  </div>
</div>
<div class="field">
  <label class="label">Commentaire</label>
  <div class="control">
    <textarea class="textarea" placeholder="..."></textarea>
  </div>
</div>
<div class="field is-grouped">
  <div class="control">
    <button class="button is-link" @click="success" > Envoyer
    </button>
  </div>
  <div class="control">
    <button class="button is-text">Cancel</button>
  </div>
</div>
   </form>
   <br>
  <strong style="color:red;margin-left:2rem;margin-right:2rem;"> Soldes des congés </strong>
  <br>
  <br>
 <tab-solde>
 </tab-solde>
 <br>
</div>
</template>
<script>

import TitleBar from '@/components/TitleBar'
import TabSolde from '@/components/TabSolde'

export default {
  name: 'Conge',
  components: {
    TitleBar,
    TabSolde
  },
  data () {
      return {
        dates: []
      }
  },
   methods: {
    success () {
       this.$buefy.toast.open({
        message: 'Votre demande a été bien transmise ',
        type: 'is-success'
        })
     }
   }
}
</script>

