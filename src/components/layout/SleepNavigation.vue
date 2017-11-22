<template>
    <v-navigation-drawer 
        app
        fixed
        :value="drawer" 
        :mini-variant="mini" 
        light
        @input="checkToggleState"
        >
        <div class="ml-5 mt-3">
          <img src="../../assets/logo-top.png" width="200" height="112" />
        </div>
    <!--  <v-list class="pa-1">
        <v-list-tile v-if="mini" @click.stop="mini = !mini">
              <v-list-tile-action>
                <v-icon>chevron_right</v-icon>
              </v-list-tile-action>
          </v-list-tile>
            <v-list-tile avatar tag="div">
              <v-list-tile-avatar>
                <img src="https://randomuser.me/api/portraits/men/85.jpg" />
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>Sleep and Breathing</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn icon @click.stop="mini = !mini">
                  <v-icon>chevron_left</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>-->

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
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'sleep-navigation',
    data () {
      return {
        mini: false,
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
        'toggleDrawer'
      ]),
      checkToggleState (e) {
        if (!e) this.toggleDrawer()
      }
    },
    computed:
      mapState([
        'drawer'
      ])
  }
</script>

<style lang="stylus">
  .logo-title {
    height: 112px !important;
  }

  @import '../../stylus/main'
</style>
