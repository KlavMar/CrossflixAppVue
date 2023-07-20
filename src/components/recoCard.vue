<template>
   <div class="flex-col flex">
<h2 class="text-4xl font-bold p-3 m-2 text-gray-100">{{title}}</h2>
<div class="flex flex-col xl:flex-row">
    <article class="flex flex-col" v-for="(value,index) in recomovie" :key="index">

<router-link :to="{ name: 'movies', params: { tconst: value.imdbID } }">
<img :src="`${value.Poster}`" class="xl:w-full xl:h-full ">
</router-link>  </article>
</div>


</div>
</template>
<script>
export default {
    name: "CarViewPoster",
    props: {
        recomovie: {
        type: Array,
        required: true,
      },
      title:{
        type:String,
        required:false
      }
    },
  };
  </script>