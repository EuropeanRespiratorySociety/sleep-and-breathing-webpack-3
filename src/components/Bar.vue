<template>
<v-app>
<v-navigation-drawer 
        app
        enable-resize-watcher
        persistent
        clipped
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

  <v-card app class="grey lighten-5" flat>
    <v-parallax src="https://www.ersnet.org/assets/preview/node/o:383143a9427e5caae1bb?name=image1800&size=1800" >
      <v-card-media style="background:transparent" :height="height + 'px'">
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
      </v-card-media>
    </v-parallax>
  </v-card>

  <main>

    <v-container id="scroll-target">
    <v-layout row >
      <v-flex id="container" xs12 sm12 md10 lg10 offset-md1 offset-lg1>
        <v-card id="test" class="card--flex-toolbar">
          <v-toolbar id="white-bar" card class="white" v-scroll="onScroll2">
            <v-toolbar-title class="body-2 grey--text">Title</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>search</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>apps</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>more_vert</v-icon>
            </v-btn>
          </v-toolbar>

        <v-tabs dark fixed centered>
            <v-tabs-bar class="cyan">
              <v-tabs-slider color="yellow"></v-tabs-slider>
              <v-tabs-item
                v-for="i in 3"
                :key="i"
                :href="'#tab-' + i"
              >
                Item {{ i }}
              </v-tabs-item>
            </v-tabs-bar>
            <v-tabs-items>
              <v-tabs-content
                v-for="i in 3"
                :key="i"
                :id="'tab-' + i"
              >
                <v-card flat>
                  <v-card-text>{{ text }}</v-card-text>
                </v-card>
              </v-tabs-content>
            </v-tabs-items>
          </v-tabs> 

          <v-divider></v-divider>
          <v-card-text>text </v-card-text>
          <v-container grid-list-md text-xs-center>
            <v-layout row wrap>
              <v-flex xs12>
                <v-card dark color="primary">
                  <v-card-text class="px-0">12</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs6 v-for="i in 2" :key="i">
                <v-card dark color="secondary">
                  <v-card-text class="px-0">6</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs4 v-for="i in 3" :key="i">
                <v-card dark color="primary">
                  <v-card-text class="px-0">4</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs3 v-for="i in 4" :key="i">
                <v-card dark color="secondary">
                  <v-card-text class="px-0">3</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs2 v-for="i in 6" :key="i">
                <v-card dark color="primary">
                  <v-card-text class="px-0">2</v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs1 v-for="i in 12" :key="i">
                <v-card dark color="secondary">
                  <v-card-text class="px-0">1</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout> 
    </v-container>
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
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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
      },

      onScroll2 (e) {
        if (window.pageYOffset < 388 && document.getElementById('header-t').children.length > 1) {
          if (document.getElementById('header-t').children[1].id === 'white-bar') {
            let container = document.getElementById('white-bar')
            document.getElementsByClassName('parallax')[0].style['z-index'] = 0
            document.getElementById('test').style.top = 0
            document.getElementById('test').prepend(container)
          }
        }

        if (window.pageYOffset >= 388 && document.getElementById('test').children[0].id === 'white-bar') {
          let container = document.getElementById('white-bar')
          document.getElementsByClassName('parallax')[0].style['z-index'] = 2
          document.getElementById('header-t').appendChild(container)
          document.getElementById('test').style.top = '90px'
        }
      }
    }
  }
</script>

<style lang="stylus">
  @import '../stylus/main'
  .card--flex-toolbar {
    margin-top: -80px;
  }

  .transparent {
    background: transparent;
    background-size: cover;
  }

  .fixed {
    margin-top: 0px;
    position: fixed;
    top: 56px;
  }
</style>
