<template>
<v-container>
    <v-layout row >
      <v-flex xs12 sm12 md10 lg10 offset-md1 offset-lg1>
        <v-card id="test" class="card--flex-toolbar">
          <v-toolbar card class="white">
            <v-toolbar-title class="body-2 grey--text">{{category.title}}</v-toolbar-title>
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

          <v-divider></v-divider>
          <v-card-text v-html="category.body"></v-card-text>
        </v-card>

        <v-container grid-list-md>
          <v-layout v-if="posts && posts.length" row wrap>
            <v-flex v-for="post of posts" xs12 sm6>
              <v-card>
                <v-card-media :src="post.image" height="200px">
                </v-card-media>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{post.title}}</h3>
                    <div v-html="post.leadParagraph"></div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn :href="`/${post.slug}`" flat color="orange">More...</v-btn>
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
  import axios from 'axios'

  export default {
    name: 'Simple',
    data () {
      return {
        fixed: false,
        category: {},
        posts: [],
        errors: []
      }
    },
    // Fire a request when the component is created.
    created () {
      axios.get(`https://api.ersnet.org/news`)
      .then(response => {
        this.posts = response.data.data
        this.category = response.data.category[0]
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
</script>

<style lang="stylus">

</style>
