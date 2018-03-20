<template>
  <v-app>
    <v-toolbar app fixed dark flat id="header-t" :class="setClass()" v-scroll="onScroll" prominent >
      <v-toolbar-side-icon @click.stop="toggle"></v-toolbar-side-icon>
      <a href="/"><img src="./assets/logo-title2.png" width="38" d-flex v-if="!drawer" /></a>
      <v-toolbar-title v-if="!drawer" class="mb-1">Sleep and Breathing <span v-if="offline">currently offline</span></v-toolbar-title>
    </v-toolbar>
    <v-parallax src='../static/img/background-image2.png' class="backgroundimage" height="300">
    </v-parallax>
    <transition name="test" mode="out-in">
      <v-content >
        <v-container fluid>
          <v-layout row>
            <router-view>
            </router-view>
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
  import {
    mapActions,
    mapState
  } from 'vuex'
  
  export default {
    name: 'App',
    data () {
      return {
        offsetTop: 0,
        height: 600,
        rightDrawer: false
      }
    },
    computed: mapState([
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
          container.classList.add('primary')
          container.classList.remove('transparent')
        }
  
        if (this.offsetTop < 100 && !this.offline) {
          container.classList.add('transparent')
          container.classList.remove('primary')
        }
      }
    },
    components: {
      SleepFooter,
      SleepNavigation
    }
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

  .toolbar__title {
  margin-left: 7px !important;
}
</style>
