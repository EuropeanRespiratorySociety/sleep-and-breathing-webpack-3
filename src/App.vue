<template>
  <v-app>
    <parallax-header></parallax-header>
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
    <site-footer></site-footer>
  </v-app>
</template>

<script>
  import SiteFooter from './components/layout/SiteFooter'
  import SiteNavigation from './components/layout/SiteNavigation'
  import ParallaxHeader from './components/base/ParallaxHeader'
  import {
    mapActions
  } from 'vuex'
  
  export default {
    name: 'App',
    data () {
      return {
        offsetTop: 0,
        height: 300,
        rightDrawer: false
      }
    },
    methods: {
      ...mapActions([
        'toggleDrawer'
      ]),
  
      toggle () {
        this.toggleDrawer()
      }
  
    },
    components: {
      SiteFooter,
      SiteNavigation,
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
