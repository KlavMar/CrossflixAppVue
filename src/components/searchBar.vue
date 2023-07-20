<template>
      <div class="w-full flex flex-col justify-center items-center">
      <input class="w-full xl:w-1/2 px-4 py-2 bg-transparent rounded-lg focus:outline-none text-gray-100 text-3xl font-bold p-3 m-2 border-gray-100 border-2" 
         type="text"
         name="search"
         id="tag-search"
         v-model="movies"
         @input="filterTitle()"
         
         placeholder="Recherchez un film..."
  />
  <div v-show="active" class="relative w-full  xl:w-1/2 flex flex-col items-start">
    <ul class="absolute w-full inset-O z-10 bg-white py-1 mt-1 tags-search text-gray-800 text-3xl font-bold p-3 m-2">
    <li class="item p-3 m-2 font-semibold"
    @click="handleItemClick(movie)"

        v-for="(movie, index) in filteredMovies"
        :key="index"
    >
      {{ movie.primarytitle }} - ({{ movie.startyear }})
    </li>
    
  </ul>
  </div>


</div>
</template>
<script>
import axios from 'axios';
export default {
     name:"searchBar",
       data() {
    return {
      list_movies: [],
      movies: '',
      filteredMovies: [],
      recomovie:[],
      movies_see:[],
      selectedMovie:'',
      active:false
        };
  },
  async created() {
    this.list_movies = await this.get_title();
  },
  methods: {
    async get_title() {
      try {
        const response = await axios.get("https://api.kevinlamarque.fr/imdb/title/");
    
        return response.data;
      } catch (error) {
        console.error(error);
        return [];
      }
    },
    filterTitle() {
      this.active=true;
  this.filteredMovies = Object.values(this.list_movies)
    .filter(movie => {
      return movie.primarytitle.toLowerCase().includes(this.movies.toLowerCase());
    })
    .slice(0, 10); // Limite le résultat à 10 éléments
},
handleItemClick(movie) {
        this.active=false;
        this.movies = movie.primarytitle;
        this.filteredMovies = [];
        this.$router.push(`/movie/${movie.tconst}`);
        this.selectedMovie=movie;
  }
}
}
</script>