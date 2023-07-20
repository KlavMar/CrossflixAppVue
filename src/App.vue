<template>
    <router-link :to="{ name: 'home' }" class="flex flex-col items-center justify-center">
    <h1 class="title-home xl:h-64  font-bold text-gray-100 flex justify-center flex-col text-3xl lg:text6xl xl:text-9xl 
    bg-gradient-to-l from-red-500 to-red-900 text-transparent bg-clip-text text-shadow-lg">
      Crossflix</h1>
    </router-link> 
  <searchBar/>
  <router-view/>

</template>
<script>
import SearchBar from './components/searchBar.vue';

export default {
  name: 'AppView',
  components: {
    SearchBar
  }
}

</script>
<style>

</style>
