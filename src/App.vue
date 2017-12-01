<template>
  <v-app>
    <v-toolbar 
      app
      fixed
      dark
      flat
      id="header-t"
      :class="setClass()" 
      v-scroll="onScroll"
      prominent
    >
      <v-toolbar-side-icon @click.stop="toggle"></v-toolbar-side-icon>
      <v-toolbar-title v-if="!drawer">Sleep and Breathing <span v-if="offline">currently offline</span></v-toolbar-title>  
    </v-toolbar>
    <v-parallax src='../static/img/background-image.png' class="backgroundimage"></v-parallax>
    <transition name="test" mode="out-in">
      <v-content>
        <v-container fluid>
          <v-layout row>
            <router-view></router-view>
          </v-layout>
        </v-container>
      </v-content>    
    </transition>
    <sleep-navigation></sleep-navigation>
    <sleep-footer></sleep-footer>
  </v-app>
</template>

<script>
  import SleepFooter from './components/layout/SleepFooter'
  import SleepNavigation from './components/layout/SleepNavigation'
  import { mapActions, mapState } from 'vuex'

  export default {
    name: 'App',
    data () {
      return {
        offsetTop: 0,
        height: 600,
        rightDrawer: false
      }
    },
    computed:
      mapState([
        'drawer',
        'offline'
      ]),

    methods: {

      setClass () {
        if (this.offline) {
          return 'error elevation-0'
        }
        return 'primary transparent elevation-0'
      },

      ...mapActions([
        'toggleDrawer'
      ]),

      toggle () {
        this.toggleDrawer()
      },

      onScroll (e) {
        let container = document.getElementById('header-t')
        this.offsetTop = window.pageYOffset || document.documentElement.scrollTop

        if (this.offsetTop > 100 && !this.offline) {
          container.classList.remove('transparent')
        }

        if (this.offsetTop < 100 && !this.offline) {
          container.classList.add('transparent')
        }
      }
    },
    components: { SleepFooter, SleepNavigation }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
  .card--flex-toolbar {
    margin-top: -145px;
  }

  .transparent {
    background: transparent!important;
    background-size: cover;
  }

  .test-enter-active, .test-leave-active {
      transition: opacity 1s
  }
  
  .test-enter, .test-leave-to {
      opacity: 0
  }

  .backgroundimage img{
    width: 2000px;
  }
</style>
