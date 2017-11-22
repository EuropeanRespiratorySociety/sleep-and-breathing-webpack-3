<template>
    <v-navigation-drawer 
        app
        fixed
        v-model="drawer" 
        light
        >
        <div class="ml-5 mt-3">
          <img src="../../assets/logo-top.png" width="200" height="112" />
        </div>

      <v-list dense class="pt-3">
        <v-list-tile v-for="item in items" :key="item.title" @click="" :href="item.slug">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'sleep-navigation',
    data () {
      return {
        items: [
          { title: 'Home', icon: 'home', slug: '/' },
          { title: 'Venue', icon: 'event_seat', slug: '/articles/venue' },
          { title: 'Registration', icon: 'payment', slug: '/articles/registration' },
          { title: 'Programme', icon: 'date_range', slug: '/programme' }
        ],
        right: null
      }
    },

    methods: {
      ...mapActions([
        'setDrawer'
      ])
    },
    computed: {
      drawer: {
        get: function () {
          return this.$store.state.drawer
        },
        set: function (value) {
          this.setDrawer(value)
        }
      }
    }

  }
</script>

<style lang="stylus">
  @import '../../stylus/main'
  .logo-title {
    height: 112px !important;
  }
</style>
