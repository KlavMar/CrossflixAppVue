<template>
  <cardView :movies_see="movies_see" ></cardView>
  <CarViewPoster :recomovie="recomovie"></CarViewPoster>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import cardView from "../components/card.vue"
import CarViewPoster from "../components/recoCard.vue"
export default {
  name: 'movieView',
  components: {
    cardView,
    CarViewPoster,
  },
  data(){
    return {

    recomovie:[],
    movies_see:[],
    }
  },

  methods:{
    get_movie(tconst){
    
    axios.get(`https://api.kevinlamarque.fr/imdb/${tconst}/`)
    .then(response => { this.movies_see = response.data
  })
},
  get_reco_movie(tconst) {
  axios.get(`https://api.kevinlamarque.fr/imdb/reco/${tconst}/`)
    .then(response => { this.recomovie = response.data 
      
      // Traitez la réponse de la requête
     
    })

},

  },
  created() {
    const tconst = this.$route.params.tconst;
    this.get_movie(tconst);
    this.get_reco_movie(tconst);
  },
  watch: {
    '$route.params.tconst'(newTconst) {
      this.get_movie(newTconst);
      this.get_reco_movie(newTconst);
    },
  },
}
</script>
