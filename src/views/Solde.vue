<template>
<section >
      <title-bar style="margin:2rem;">
           Compteurs Équipe
      <router-link to="/" class="button is-primary" slot="button">
        Dashboard
       </router-link>
      </title-bar>
      <hr />
        <b-table
            :data="data" style="margin-left:2rem;margin-right:2rem;"  >
            <template slot-scope="props" >
                <template v-for="column in columns">
                    <b-table-column :key="column.id" v-bind="column" >
                        <template
                            v-if="column.searchable && !column.numeric"
                            slot="searchable"
                            slot-scope="props">
                            <b-input
                                v-model="props.filters[props.column.field]"
                                placeholder="Search..."
                                icon="magnify"
                                size="is-small" />
                        </template>
                        {{ props.row[column.field] }}
                    </b-table-column>
                </template>
            </template>
        </b-table>
    </section>
</template>

<script>

import TitleBar from '@/components/TitleBar'

export default {
  name: 'Calendar',
  components: {
     TitleBar
  },
   data () {
        return {
                data: [
                    { 'id': 1, 'Nom': 'Farah jbara',  'Solde_Actuel': 17, 'nbr_jrs_pris': 5, 'date': '2019-10-15 ', 'solde_annuel': 22 },
                    { 'id': 2, 'Nom': 'Assma benasser',  'Solde_Actuel': 10, 'nbr_jrs_pris': 12, 'date': '2019-10-15 ', 'solde_annuel': 22}
              ],

                columns: [
                    {
                        field: 'id',
                        label: 'ID',
                        width: '100',
                        numeric: true,
                        searchable: true
                    },
                    {
                        field: 'Nom',
                        label: 'Nom de Salarié',
                        searchable: true,
                        centered: true
                    },
                    {
                      field: 'Solde_Actuel',
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
                    }
                ]
            }
        }
    }
</script>
