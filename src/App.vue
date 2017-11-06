<template>
<v-app class="Simple">
    <v-navigation-drawer 
        app
        enable-resize-watcher
        persistent
        v-model="drawer" 
        :mini-variant="mini" 
        light>
      <v-list class="pa-1">
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
                <v-list-tile-title>John Leider</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn icon @click.stop="mini = !mini">
                  <v-icon>chevron_left</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Application
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list dense class="pt-0">
        <v-list-tile v-for="item in items" :key="item.title" @click="">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

        <v-toolbar 
          app
          fixed
          id="header-t"
          light class="primary transparent elevation-0" 
          v-scroll="onScroll"
          prominent>
          <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
          <v-toolbar-title>Title</v-toolbar-title>  
        </v-toolbar>
  <v-card app class="grey lighten-5" flat>
    <v-parallax src="https://www.ersnet.org/assets/preview/node/o:383143a9427e5caae1bb?name=image1800&size=1800" >

    </v-parallax>
  </v-card>

  <main>
  <router-view></router-view>
   </main>
  <v-bottom-nav app :value="true" :active.sync="e1">
      <v-btn flat color="teal" value="recent">
        <span>Recent</span>
        <v-icon>history</v-icon>
      </v-btn>
      <v-btn flat color="teal" value="favorites">
        <span>Favorites</span>
        <v-icon>favorite</v-icon>
      </v-btn>
  
      <v-bottom-sheet v-model="sheet" inset>
      <v-btn slot="activator" flat color="teal" value="register">
        <span>Register</span>
        <v-icon>place</v-icon>
      </v-btn>
      <v-container grid-list-md text-xs-center white>
        <v-layout row  style="height:200px" justify-center>
          <v-flex xs3 v-for="i in 3" :key="i">
            <v-card dark color="primary">
              <v-card-text class="px-0">4</v-card-text>
            </v-card>
        </v-flex>
      </v-layout>
      </v-container>
    </v-bottom-sheet>
  </v-bottom-nav>
</v-app>
</template>
<script>
  export default {
    name: 'Simple',
    data () {
      return {
        clipped: false,
        fixed: false,
        rightDrawer: false,
        title: 'Vuetify.js',
        offsetTop: 0,
        sheet: false,
        height: 600,
        e1: 'recent',
        drawer: true,
        mini: false,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ],
        right: null
      }
    },
    methods: {
      onScroll (e) {
        let container = document.getElementById('header-t')
        this.offsetTop = window.pageYOffset || document.documentElement.scrollTop

        if (this.offsetTop > 100) {
          container.classList.remove('transparent')
        }

        if (this.offsetTop < 100) {
          container.classList.add('transparent')
        }
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
  .card--flex-toolbar {
    margin-top: -80px;
  }

  .transparent {
    background: transparent;
    background-size: cover;
  }
</style>
