<template>
  <v-flex xs12 sm12 md8 lg8 offset-md2 offset-lg2>
    <v-card id="test" class="card--flex-toolbar">
      <v-toolbar card color="white">
        <v-toolbar-title class="headline grey--text">{{category.title}}</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>

      <v-divider></v-divider>
      <v-card-text v-if="category.body" v-html="categoryContent"></v-card-text>
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
                <span><v-icon class="published">query_builder</v-icon>{{post.createdOn}}</span>
              </div>
            </v-card-title>
            <v-card-text v-html="post.shortLead">
            </v-card-text>
            <v-card-actions>
              <v-btn :href="`articles/${post.slug}`" flat>More...</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-layout row wrap>
      <v-flex xs12 sm6>
        <v-card color="yellow darken-3" class="white--text" href="http://www.ers-education.org/publications/handbook-series/ers-handbook-of-respiratory-sleep-medicine.aspx">
          <v-container fluid grid-list-lg>
            <v-layout row>
              <v-flex xs8>
                <div>
                  <div class="headline">Sleep Medicine Textbook</div>
                  <p class="grey--text text--darken-2">Endorsed by ERS</p>
                  <p class="grey--text text--darken-3">Based on the <a target="_blank" href="http://onlinelibrary.wiley.com/doi/10.1111/jsr.12095/abstract">
                    Catalogue of knowledge and skills for sleep medicine
                  </a></p>
                </div>
              </v-flex>
              <v-flex xs4>
                <v-card-media
                  src="../../static/img/ESRS-Sleep-Medicine-Textbook_150.jpg"
                  height="215px"
                  contain
                ></v-card-media>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6>
        <v-card color="yellow darken-3" class="white--text" href="http://www.ers-education.org/publications/handbook-series/ers-handbook-of-respiratory-sleep-medicine.aspx">
          <v-container fluid grid-list-lg>
            <v-layout row>
              <v-flex xs8>
                <div>
                  <div class="headline">ERS Handbook of respiratory sleep medicine</div>
                  <p class="grey--text text--darken-2">Endorsed by ESRS</p>
                  <p class="grey--text text--darken-3">Accredited by European Board for Accreditation in Pneumology (EBAP)</p>
                </div>
              </v-flex>
              <v-flex xs4>
                <v-card-media
                  src="../../static/img/sleep-handbook.jpg"
                  height="215px"
                  contain
                ></v-card-media>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
    </v-flex>
</template>

<script>
  import { mapActions } from 'vuex'
  import * as config from '../../config'
  console.log(config)
  console.log(process)
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
      },

      categoryContent () {
        return this.category.body + `<img 
            alt="Sleep and Breathing Sponsors" 
            src="../../static/img/sleep-and-breathing-sponsors.png"
            class="sponsors"
          >`
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

  .card__text {
    min-height: 140px;
  }

  .sponsors {
    height: 75px;
  }
</style>
