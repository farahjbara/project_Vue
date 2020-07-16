<template>
   <div>
    <b-table
      :data="data"
      :columns="columns"
      draggable
      @dragstart="dragstart"
      @drop="drop"
      @dragover="dragover"
      @dragleave="dragleave">
    </b-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
         data: [
                  {'année': 2019, 'Solde_Actuel': 17, 'nbr_jrs_pris': 5, 'date': '2019-10-15 13:43:27', 'solde_annuel': 22 },
                  {'année': 2020, 'Solde_Actuel': 32, 'nbr_jrs_pris': 7, 'date': '2020-10-15 13:43:27', 'solde_annuel': 22 },
                  {'année': 2021, 'Solde_Actuel':54 , 'nbr_jrs_pris': 0, 'date': '', 'solde_annuel': 22 },
              ],
         columns: [
                  {
                      field: 'année',
                      label: 'Annnée',
                      width: '80',
                      numeric: true
                  },
                  {
                      field: 'solde_Actuel',
                      label: 'Solde actuel',
                      numeric: true
                  },
                  {
                      field: 'nbr_jrs_pris',
                      label: 'Nomber des jours pris',
                      numeric: true
                  },
                  {
                      field: 'solde_annuel',
                      label: 'Solde Annuel',
                      numeric: true
                  },
                  {
                      field: 'date',
                      label: 'Date demande',
                      centered: true
                  }

              ],
              draggingRow: null,
              draggingRowIndex: null
          }
      },
      methods: {
        dragstart (payload) {
          this.draggingRow = payload.row
          this.draggingRowIndex = payload.index
          payload.event.dataTransfer.effectAllowed = 'copy'
        },
        dragover(payload) {
          payload.event.dataTransfer.dropEffect = 'copy'
          payload.event.target.closest('tr').classList.add('is-selected')
          payload.event.preventDefault()
        },
        dragleave(payload) {
          payload.event.target.closest('tr').classList.remove('is-selected')
          payload.event.preventDefault()
        },
        drop(payload) {
          payload.event.target.closest('tr').classList.remove('is-selected')
          const droppedOnRowIndex = payload.index
          this.$buefy.toast.open(`Moved ${this.draggingRow.first_name} from row ${this.draggingRowIndex + 1} to ${droppedOnRowIndex + 1}`)
        }
      }
  }

</script>
