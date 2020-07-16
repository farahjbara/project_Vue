<template>
<section >
      <title-bar style="margin:2rem;">
         Mes Demandes
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
                    { 'id': 1, 'date': '2019-10-07 10:23:27', 'date': '2019-10-05 ', 'date': '2019-10-15 ', 'type': 'Maladie', 'Status': 'Valide' },
                    { 'id': 2, 'date': '2019-11-18 08:09:27', 'date': '2019-11-20 ', 'date': '2019-12-05 ', 'type': 'congé annuel', 'Status': 'Valide' },
                    { 'id': 3, 'date': '2020-01-05 13:55:27', 'date': '2020-01-15 ', 'date ': '2020-01-17 ',  'type': 'congé non payé','Status': 'Valide'},
                    { 'id': 4, 'date': '2020-06-15 15:35:27', 'date': '2020-06-17', 'date': '2020-06-19 ',  'type': 'Maladie','Status': 'Valide' },
                    { 'id': 5, 'date': '2020-07-04 09:40:27', 'date': '2020-07-06', 'date': '2020-07-15 ',  'type': 'Congé payé','Status': 'Invalide' }
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
                        field: 'date',
                        label: 'Date Demande',
                        searchable: true,
                        centered: true
                    },
                    {
                        field: 'date',
                        label: 'Date Début',
                        searchable: true,
                        centered: true
                    },
                    {
                       field: 'date',
                        label: 'Date Fin',
                        searchable: true,
                        centered: true
                    },
                    {
                        field: 'type',
                        label: 'Type absence',
                        searchable: true
                    },
                    {
                        field: 'Status',
                        label: 'Status',
                        searchable: true
                    }
                ]
            }
        }
    }
</script>
