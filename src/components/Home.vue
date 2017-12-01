<template>

  <v-flex xs12 sm12 md8 lg8 offset-md2 offset-lg2>
    <v-container grid-list-md style="margin-top: -145px;">
      <v-layout v-if="articles" row wrap>
        <v-flex xs12 sm6>
          <v-card id="test">
            <v-toolbar card color="white">
              <v-toolbar-title v-if="category" class="headline grey--text">{{category.title}}</v-toolbar-title>
            <v-spacer></v-spacer>
            </v-toolbar>
            <v-divider></v-divider>
            <v-card-text v-if="category" v-html="categoryContent"></v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 sm6>
          <v-card id="test">
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Important Dates</h3>
              </div>
            </v-card-title>
            <v-list three-line>
              <v-list-tile>
                  <v-list-tile-action>
                    <v-icon color="primary">event</v-icon>
                  </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>25 January 2018</v-list-tile-title>
                  <v-list-tile-sub-title>Call for topics deadline</v-list-tile-sub-title>
                </v-list-tile-content>
                </v-list-tile>
                <v-divider inset></v-divider>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon color="primary">event</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title class="mt-1">August 2018</v-list-tile-title>
                    <v-list-tile-sub-title class="mb-1">Registration and<br />Abstract submission opening</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-card id="test">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Organising Committee</h3>
            <!--<span><v-icon class="published">query_builder</v-icon>{{post.createdOn}}</span>-->
          </div>
        </v-card-title>


        <v-container>
                <v-layout row wrap>
                  <v-flex xs12 sm12 md4 class="pb-3">
                    <v-list>
                      <h6 class="subheading pb-2">CHAIRS</h6>
                      <v-list-tile avatar>
                        <v-list-tile-avatar>
                          <img src="../assets/people/Maria_R_Bonsignore.jpg" />
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                          <v-list-tile-title>Maria Bonsignore</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-divider inset></v-divider>
                      <v-list-tile>
                        <v-list-tile-action>
                          <v-icon color="indigo">account_circle</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>Walter McNicholas</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-divider inset></v-divider>
                    </v-list>
                  </v-flex>

                  <v-flex xs12 sm12 md4 class="pb-3">
                    <v-list>
                      <h6 class="subheading pb-2">VICE CHAIRS</h6>
                      <v-list-tile>
                        <v-list-tile-action>
                          <v-icon color="indigo">account_circle</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>Lino Nobili</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-divider inset></v-divider>
                      <v-list-tile>
                      <v-list-tile-action>
                        <v-icon color="indigo">account_circle</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title>Anita Simonds</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-divider inset></v-divider>
                    </v-list>
                  </v-flex>

                  <v-flex xs12 sm12 md4 class="pb-3">
                    <v-list>
                      <h6 class="subheading pb-2">COMMITTEE MEMBERS</h6>
                      <v-list-tile>
                        <v-list-tile-action>
                          <v-icon color="indigo">account_circle</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>Tiina Paunio</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-divider inset></v-divider>
                      <v-list-tile>
                        <v-list-tile-action>
                          <v-icon color="indigo">account_circle</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>Jean-Louis Pépin</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-divider inset></v-divider>
                      <v-list-tile>
                        <v-list-tile-action>
                          <v-icon color="indigo">account_circle</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>Winfried Randerath</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider inset></v-divider>
                      <v-list-tile>
                        <v-list-tile-action>
                          <v-icon color="indigo">account_circle</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>Sophia E. Schiza</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider inset></v-divider>
                      <v-list-tile>
                        <v-list-tile-action>
                          <v-icon color="indigo">account_circle</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>Johan Verbraecken</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    </v-list>
                  </v-flex>
                </v-layout>

                </v-container>

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
                <!--<span><v-icon class="published">query_builder</v-icon>{{post.createdOn}}</span>-->
              </div>
            </v-card-title>
            <v-card-text v-html="post.shortLead">
            </v-card-text>
            <v-card-actions>
              <v-btn :to="`articles/${post.slug}`" flat>More...</v-btn>
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
  // import * as config from '../../config'

  export default {
    name: 'Home',
    data () {
      return {
        fixed: false
      }
    },

    created () {
      this.fetchData()
    },

    computed: {
      slug () {
        return this.$store.getters.slug
      },

      path () {
        return this.$store.state.route.path
      },

      articles () {
        return this.$store.state.pages[this.path].items
      },

      category () {
        return this.$store.state.pages[this.path].category
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
          request: this.slug,
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
