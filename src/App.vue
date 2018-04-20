<template>
  <v-app>
    <parallax-header></parallax-header>
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
  import ParallaxHeader from './components/base/ParallaxHeader'
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
      }
  
    },
    components: {
      SleepFooter,
      SleepNavigation,
      ParallaxHeader
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
