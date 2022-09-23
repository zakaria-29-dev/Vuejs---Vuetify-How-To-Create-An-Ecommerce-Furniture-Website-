<template>
  <v-app>
<NavBar />
<v-container fluid>
  <v-card
        color="#F7F7F7"
        height="180px"
        tile
        flat
        class="d-flex align-center justify-center mt-12"
        dark
      >
        <v-row>
          <v-col cols="12" sm="12">
            <v-item-group mandatory class="mt-n1">
              <v-container>
                <v-row justify="center" class="space">
                  <v-col
                    cols="12"
                    xs="12"
                    sm="4"
                    md="2"
                    v-for="(cetegory, i) in categories"
                    :key="i"
                  >
                    <v-item v-slot="{ active, toggle }">
                      <v-card
                        :color="active ? '#D5F0DB' : 'white'"
                        :class="active ? 'borderme' : 'borderout'"
                        class="d-flex align-center rounded-lg mx-2"
                        dark
                        height="170"
                        @click="toggle"
                        flat
                      >
                        <v-row>
                          <v-col cols="12" sm="12">
                            <v-list-item three-line class="text-center">
                              <v-list-item-content>
                                <div align="center" justify="center">
                                  <v-img
                                    :src="cetegory.img"
                                    max-height="80"
                                    max-width="80"
                                    contain
                                  ></v-img>
                                </div>
                                <v-list-item-subtitle
                                  :class="
                                    active ? 'green--text' : 'black--text'
                                  "
                                  class="caption mt-4"
                                  >{{ cetegory.title }}</v-list-item-subtitle
                                >
                              </v-list-item-content>
                            </v-list-item>
                          </v-col>
                        </v-row>
                      </v-card>
                    </v-item>
                  </v-col>
                </v-row>
              </v-container>
            </v-item-group>
          </v-col>
        </v-row>
      </v-card>
      <v-toolbar color="transparent" dark class="mt-3">
        <v-checkbox v-model="chair" label="Chairs" class="check mt-4"></v-checkbox>
        <v-checkbox v-model="other" label="Othermass" class="check mt-4"></v-checkbox>
        <v-divider vertical></v-divider>
        <v-btn variant="text">Leather Colors
          <v-icon right class="ml-2 mt-n1">fas fa-caret-right</v-icon>
        </v-btn>
        <v-divider vertical></v-divider>
        <v-btn variant="text">Choose Design
          <v-icon right class="ml-2 mt-n1">fas fa-caret-right</v-icon>
        </v-btn>
        <v-divider vertical></v-divider>
       <span class="text-caption mx-2">Price till</span>
       <v-slider v-model="slider2" label="track-color" class="mt-5"></v-slider>
       <span class="text-caption mx-2">$9,700</span>
      </v-toolbar>
      <v-divider class=mt-2></v-divider>
      <v-toolbar color="transparent">
        <v-toolbar-title>LOUNGE CHAIRS</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn variant="text" color="grey">Sort by :</v-btn>
        <v-btn variant="text" color="">Name</v-btn>
        <v-btn variant="text" color="grey">Popularity</v-btn>
        <v-btn variant="text" color="grey">Price</v-btn>
      </v-toolbar>
      <v-row>
          <v-col cols="12" sm="3" v-for="(chair,i) in chairs" :key="i" >
              <v-card height="300" align="center" flat outlined tile>
                <v-img :src="chair.image" width="200" height="200" contain></v-img>
                <v-card-text class="mt-n1">
                  <strong>{{chair.title}}</strong>
                </v-card-text>
                <v-card-text class="mt-n4">
                  <strong>{{chair.price}}</strong>
                </v-card-text>
              </v-card>
          </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-toolbar color="transparent">
        <v-toolbar-title class="text-caption">Show more chairs</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-icon color="grey" left class="mr-4 mt-n1">fas fa-long-arrow-alt-left</v-icon>
        <span class="text-caption">3</span>
        <v-icon color="grey" left class="ml-4 mt-n1 mr-2">fas fa-long-arrow-alt-right</v-icon>
      </v-toolbar>
</v-container>
<FooterView />
  </v-app>
  
</template>

<script>
import { defineComponent } from 'vue';

// Components
import NavBar from '@/components/NavBar.vue';
import FooterView from '@/components/FooterView.vue';

export default defineComponent({
  name: 'HomeView',
setup(){
  return {
    chair: true,
    other: false,
    slider2: 50,
    categories: [
    { img: "9.png", title: "SLEEPING BEDS" },
        { img: "2.png", title: "LOUNGE CHAIRS" },
        { img: "1.png", title: "CHAIRS" },
        { img: "4.png", title: "OFFICE CHAIRS" },
        { img: "8.jpg", title: "TABLES NIGHTSTANDS" },
        { img: "6.png", title: "KITCHEN FURNITURE" },
    ],
    chairs:[
    {
          class: "pa-0",
          image: "c1.jpg",
          title: "Lounge Chair",
          price: "$ 145.00",
        },
        {
          class: "pa-0",
          image: "c2.jpg",
          title: "Repos",
          price: "$ 145.00",
        },
        {
          class: "pa-0",
          image: "c3.png",
          title: "Modern Lounge",
          price: "$ 145.00",
        },
        {
          class: "pa-0",
          image: "c4.png",
          title: "Loby Chair",
          price: "$ 145.00",
        },
        {
          class: "pa-0",
          image: "c5.png",
          title: "Modern Lounge",
          price: "$ 145.00",
        },
        {
          class: "pa-0",
          image: "c6.png",
          title: "Modern Lounge",
          price: "$ 145.00",
        },
        {
          class: "pa-0",
          image: "c7.png",
          title: "Modern Lounge",
          price: "$ 145.00",
        },
        {
          class: "pa-0",
          image: "c8.png",
          title: "Modern Lounge",
          price: "$ 145.00",
        },
        {
          class: "pa-0",
          image: "c9.png",
          title: "Modern Lounge",
          price: "$ 145.00",
        },
        {
          class: "pa-0",
          image: "c10.png",
          title: "Modern Lounge",
          price: "$ 145.00",
        },
        {
          class: "pa-0",
          image: "c11.png",
          title: "Modern Lounge",
          price: "$ 145.00",
        },
        {
          class: "pa-0",
          image: "c12.png",
          title: "Modern Lounge",
          price: "$ 145.00",
        },
        {
          class: "pa-0",
          image: "c13.png",
          title: "Modern Lounge",
          price: "$ 145.00",
        },
        {
          class: "pa-0",
          image: "c14.png",
          title: "Modern Lounge",
          price: "$ 145.00",
        },
        {
          class: "pa-0",
          image: "c15.png",
          title: "Modern Lounge",
          price: "$ 145.00",
        },
        {
          class: "pa-0",
          image: "c16.png",
          title: "Modern Lounge",
          price: "$ 145.00",
        },
    ]
  }
}, 
  components: {
    NavBar,
    FooterView
},
});
</script>
<style scoped>
  .v-container{
    width: 100%;
    padding: 16px 0px !important;
    margin-right: auto;
    margin-left: auto;
  }
  .v-card.borderme {
    border: 2px solid black !important;
  }
  .v-card.borderout {
    border: 1px solid #d5f0db !important;
  }
</style>