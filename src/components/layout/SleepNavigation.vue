<template>
    <v-navigation-drawer 
        app
        fixed
        v-model="drawer"
        light
        :mini-variant="mini"
        disable-route-watcher
        >
        <div class="ml-5 mt-3">
          <img src="../../assets/logo-top.png" width="200" height="112" />
        </div>

        <!-- <v-list class="pa-1">
          <v-list-tile v-if="mini" @click.stop="mini = !mini">
            <v-list-tile-action>
              <v-icon>chevron_right</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list> -->

      <v-list dense class="pt-3">
        <v-list-tile v-for="item in items" :key="item.title" @click="" :href="item.path">
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
  import paths from '../../router/paths'
  // reminder this.$vuetify.breakpoint.mdAndUp -> let you know the size of screen (bool)

  export default {
    name: 'sleep-navigation',
    data () {
      return {
        mini: false,
        items: paths,
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
