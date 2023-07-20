<template>
<section class="flex flew-row  justify-items-start justify-start m-2 p-2 text-gray-100">
  <article class="flex flex-col p-3 m-2" v-for="(value,index) in movies_see" :key="index">
    <div class="flex flex-col xl:flex-row m-2 p-2">
        <router-link :to="{ name: 'movies', params: { tconst: value.imdbID } }" class="p-3 m-2  hover:text-blue-500">
  <img :src="`${value.Poster}`" class="xl:w-full xl:min-h-full sm:w-max-sm">
</router-link>
      <div class="flex flex-col " >
        <h2 class="text-3xl p-3 m-2">{{ value.Title }}</h2>
        <div class="flex flex-col xl:flex-row">
        
            <p class="p-3 m-2">Sortie {{ value.Released }}</p>
            <p class="p-3 m-2"> {{  value.imdbRating }}</p>
            <p class="p-3 m-2">{{  value.imdbVotes }}</p>
        </div>
        <a type="submit" target="_blank" 
                 :href="`https://www.imdb.com/title/${value.imdbID}/`" 
                 value="play" 
                 class="shadow-sm  text-center hover:bg-red-500 shadow-red-900 p-3 m-2 bg-red-800 text-white font-semibold xl:w-1/5 sm:w-full md:w-1/3 lg:w-1/4 rounded-2xl">Bande d'annonce</a>

      
        <p class="bg-gray-700 text-gray-100 p-3 m-2 rounded-2xl xl:w-1/5 sm:w-full md:w-1/3 lg:w-1/4 text-center ">{{ value.Runtime }}</p>
    

        <div class="font-semibold p-3 m-2">
          <h4 class="text-xl" >Storyline</h4> 
          <p>{{  value.Plot }}</p></div>

        <div class="flex flex-col p-3 m-2" aria-label="describe movie">

        <p>Actors {{value.Actors }}</p>
        <p>Writer {{ value.Writer }}</p>
        <p> Director {{ value.Director }}</p>
    
  
 
      
        </div>

      </div>
    </div>
  </article>
</section>
</template>
<script>
export default {
    name: "CardView",
    props: {
      movies_see: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  