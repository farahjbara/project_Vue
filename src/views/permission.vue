<template>
<div>
 <title-bar style="margin:2rem;" > Permission d'absence</title-bar>
 <form style="margin-left:2rem;margin-right:2rem;">
<b-field >
     <b-datepicker
       ref="datepicker"
        expanded
        placeholder=" Le : JJ/MM/AAAA ">
        </b-datepicker>
         <b-button
         @click="$refs.datepicker.toggle()"
        icon-left="calendar-today"
    type="is-primary" />
   </b-field>
  <b-field label="à">
        <b-timepicker
            placeholder=".. : .."
            icon="clock"
            :incrementMinutes="minutesGranularity"
            :incrementHours="hoursGranularity"
            >
        </b-timepicker>
    </b-field>
    <b-field label="Jusqu'à">
        <b-timepicker
            placeholder=".. : .."
            icon="clock"
            :incrementMinutes="minutesGranularity"
            :incrementHours="hoursGranularity"
            >
        </b-timepicker>
    </b-field>
<div class="field">
  <label class="label">Raison d'absence</label>
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
    <button class="button is-text">Annuler</button>
  </div>
</div>
</form>
</div>
</template>
<script>

import TitleBar from '@/components/TitleBar'

export default {
  name: 'Conge',
  components: {
    TitleBar
  },
  data () {
      return {

            minutesGranularity: 15,
            hoursGranularity: 2
      }
    },
  methods: {
       success () {
       this.$buefy.toast.open({
        message: 'Votre demande a été bien transmise au service RH ',
        type: 'is-success'
        })
     }
   }
  }

</script>
