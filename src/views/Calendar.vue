<template>
    <span>
      <title-bar>
        Calendrier
      <router-link to="/" class="button is-primary" slot="button">
        Dashboard
       </router-link>
      </title-bar>

        <b-field >
            <b-switch v-model="bars">Bars</b-switch>
        </b-field>
        <b-datepicker style="position: absolute; top: 3s0%; flex: 1;  left: 50%;margin-right: -50%; width: 5rem;height: 5rem;margin-left: auto; transform: translate(-50%, -50%);"

            inline
            v-model="date"
            :events="events"
            :indicators="indicators"
            >
        </b-datepicker>
    </span>
</template>

<script>
import TitleBar from '@/components/TitleBar'

    const thisMonth = new Date().getMonth()

    export default {
       name: 'Calendar',
      components: {
      TitleBar
          },
        computed: {
            indicators () {
                return this.bars ? 'bars' : 'dots'
            }
        },
        data () {
            return {
                lang: 'fr',
                date: new Date(2020, thisMonth, 1),
                events: [
                    new Date(2020, thisMonth, 2),
                    new Date(2020, thisMonth, 6),
                    {
                        date: new Date(2020, thisMonth, 6),
                        type: 'is-info'
                    },
                    {
                        date: new Date(2020, thisMonth, 8),
                        type: 'is-danger'
                    },
                    {
                        date: new Date(2020, thisMonth, 10),
                        type: 'is-success'
                    },
                    {
                        date: new Date(2020, thisMonth, 10),
                        type: 'is-link'
                    },
                    new Date(2017, thisMonth, 12),
                    {
                        date: new Date(2020, thisMonth, 12),
                        type: 'is-warning'
                    },
                    {
                        date: new Date(2020, thisMonth, 16),
                        type: 'is-danger'
                    },
                    new Date(2020, thisMonth, 20),
                    {
                        date: new Date(2020, thisMonth, 29),
                        type: 'is-success'
                    },
                    {
                        date: new Date(2020, thisMonth, 29),
                        type: 'is-warning'
                    },
                    {
                        date: new Date(2020, thisMonth, 29),
                        type: 'is-info'
                    }
                ],
                bars: false
            }
        }
    }
</script>
