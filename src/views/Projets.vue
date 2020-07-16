<template>
<section >
      <title-bar style="margin:2rem;">
         Liste des Demandes
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
  name: 'Projets',
  components: {
     TitleBar
  },
   data () {
        return {

                data: [
                    { 'id': 1, 'Nom': 'Farah jbara', 'Projet': 'Application de gestion des pièces de rechanges', 'date': '2019-10-15 ', 'Status': 'Encours' },
                    { 'id': 2, 'Nom': 'Assma benasser', 'Projet': 'Application de gestion de démission', 'date': '2019-10-15 ', 'Status': 'Encours' },
                     { 'id': 3, 'Nom': ' Sirine Khalfallah', 'Projet': 'Application mobile E-commerce', 'date': '2019-10-15 ', 'Status': 'Términer' }
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
                        label: 'Nom',
                        searchable: true,
                        centered: true
                    },
                    {
                        field: 'Projet',
                        label: 'Projet',
                        centered: true
                    },
                    {
                       field: 'date',
                        label: 'Date Limite',
                        searchable: true,
                        centered: true
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
