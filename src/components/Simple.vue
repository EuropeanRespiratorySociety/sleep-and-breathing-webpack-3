<template>
<v-container>
    <v-layout row >
      <v-flex xs12 sm12 md10 lg10 offset-md1 offset-lg1>
        <v-card id="test" class="card--flex-toolbar">
          <v-toolbar card class="white">
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

            <v-flex xs12 sm6>
                <v-card>
                  <v-card-media src="https://cdn.pixabay.com/photo/2017/09/22/23/57/fire-2777580_960_720.jpg" height="200px">
                  </v-card-media>
                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                      <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat color="orange">Share</v-btn>
                    <v-btn flat color="orange">Explore</v-btn>
                  </v-card-actions>
                </v-card>
            </v-flex>

            <v-flex xs12 sm6>
              <v-card>
                <v-card-media src="https://cdn.pixabay.com/photo/2017/09/22/23/57/fire-2777580_960_720.jpg" height="200px">
                </v-card-media>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                    <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat color="orange">Share</v-btn>
                  <v-btn flat color="orange">Explore</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
        </v-card>

        <v-container grid-list-md>
          <v-layout row wrap>
            <v-flex xs12 sm6>
              <v-card>
                <v-card-media src="https://cdn.pixabay.com/photo/2017/09/22/23/57/fire-2777580_960_720.jpg" height="200px">
                </v-card-media>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                    <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat color="orange">Share</v-btn>
                  <v-btn flat color="orange">Explore</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
            <v-flex xs12 sm6>
              <v-card>
                <v-card-media src="https://cdn.pixabay.com/photo/2017/09/22/23/57/fire-2777580_960_720.jpg" height="200px">
                </v-card-media>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                    <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat color="orange">Share</v-btn>
                  <v-btn flat color="orange">Explore</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>

      </v-flex>
    </v-layout> 
  </v-container>
</template>

<script>
  export default {
    name: 'Simple',
    data () {
      return {
        fixed: false,
        title: 'Vuetify.js',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    }
  }
</script>

<style lang="stylus">

</style>
