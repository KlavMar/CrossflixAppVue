<template>
 
  <CarViewPoster :recomovie="recomovie" :title="'Best Movie'"></CarViewPoster>
  <CarViewPoster v-for="genre in genres" :key="genre.title" :recomovie="genre.movies" :title="genre.title"></CarViewPoster>


 
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import CarViewPoster from "../components/recoCard.vue"

export default {
  name: 'HomeView',
  components: {
    CarViewPoster
  },
  data(){
    return {
      recomovie:[],
      genres: [
        { title: 'Action', movies: [] },
        { title: 'Animation', movies: [] },
        { title: 'Comedy', movies: [] },
        { title: 'Crime', movies: [] },
        { title: 'Drama', movies: [] },
        { title: 'Family', movies: [] },
        { title: 'Sci-fi', movies: [] },
        { title: 'Thriller', movies: [] },

      ]

    }
  },
  methods:{
    get_movie(){
      axios.get("https://api.kevinlamarque.fr/imdb/best/")
      .then(response =>{this.recomovie = response.data})
    },
    async getMoviesByGenre(genre) {
      return await axios.get(`https://api.kevinlamarque.fr/imdb/best/${genre}/`)
        .then(response => response.data);
    },
    async fetchMovies() {
      const genrePromises = this.genres.map(genre => this.getMoviesByGenre(genre.title));
      const genreMovies = await Promise.all(genrePromises);
      
      this.genres.forEach((genre, index) => {
        genre.movies = genreMovies[index];
      });
    }
  },
  async created() {
    await this.fetchMovies();
    this.recomovie = this.get_movie();
  },
  mounted(){
    
  }
}
</script>
