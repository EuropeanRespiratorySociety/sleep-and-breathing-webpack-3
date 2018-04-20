<template>
    <v-toolbar app fixed dark flat id="header-t" :class="setClass()" v-scroll="onScroll" prominent >
      <v-toolbar-side-icon @click.stop="toggle"></v-toolbar-side-icon>
      <a href="/"><img src="../../assets/logo-title2.png" width="38" d-flex v-if="!drawer" /></a>
      <v-toolbar-title v-if="!drawer" class="mb-1">Sleep and Breathing <span v-if="offline">currently offline</span></v-toolbar-title>
    </v-toolbar>
</template>


<script>
  export default {
    name: 'parallax-header',
    data () {
      return {
        offsetTop: 0
      }
    },
    methods: {
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
    }

  }

</script>