<template>
<transition name="test" mode="out-in">
<v-container>
    <v-layout row >
      <v-flex xs12 sm12 md10 lg10 offset-md1 offset-lg1>
        <v-card id="test" class="card--flex-toolbar">
          <v-toolbar card class="white">
            <v-toolbar-title class="headline grey--text">{{category.title}}</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>

          <v-divider></v-divider>
          <v-card-text v-if="category.body" v-html="category.body"></v-card-text>
        </v-card>
        
        <v-container grid-list-md>
          <v-layout v-if="articles" row wrap>
            <v-flex v-for="post of articles" xs12 sm6 :key="post.slug">
              <v-card>
                <v-card-media v-if="post.image" :src="post.image" height="200px">
                </v-card-media>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{post.title}}</h3>
                    <p><v-icon class="published">query_builder</v-icon>{{post.createdOn}}</p>
                    <div v-html="post.shortLead"></div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn :href="`articles/${post.slug}`" flat>More...</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</transition>  
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'Category',
    data () {
      return {
        fixed: false
      }
    },

    created () {
      this.fetchData()
    },

    computed: {
      articles () {
        return this.$store.state.articles
      },
      category () {
        return this.$store.state.category
      }
    },

    methods: {
      ...mapActions([
        'getCategory',
        'pageNumber'
      ]),
      fetchData () {
        const payload = {
          pageNumber: parseInt(this.$route.params.id) || this.page,
          request: this.$route.path.split('/')[1],
          skip: this.$store.state.skip
        }
        this.getCategory(payload)
      }
    }

  }
</script>

<style lang="stylus">
  @import '../stylus/main'
  .published {
    font-size:18px!important;
    padding-right:5px;
  }

  .test-enter-active, .test-leave-active {
      transition: opacity 1s
  }
  .test-enter, .test-leave-to {
      opacity: 0
  }
</style>
