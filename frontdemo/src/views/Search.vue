<template>
  <div class="search">
      <Searchdemo/>
      <VideoShow/>
      
  </div>
</template>

<script>
import VideoShow from '../components/VideoShow.vue'
import Searchdemo from '../components/Searchdemo.vue'
export default {
    name:'Search',
    components: {
      VideoShow,
      Searchdemo
    },
    data(){
        return { 
        }
    },
    methods: {
    }
}
</script>

<style>
    
</style>