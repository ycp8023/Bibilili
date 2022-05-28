<template>
    <div class="showbar">
        <h1>VideoShow page</h1>
        <div class="card" v-for="video in videoShowlist" :key="video.vid">
            <h1>{{video.vtitle}}</h1>
            <!-- <video>
                <source :href="video.vsrc" :type="video.vtype">
            </video> -->
            <a :href="video.vsrc" target="_blank">
                <img :src="video.vcoverurl" style="width: 100px"/>
            </a>
        </div>
    </div>

  
</template>

<script>
export default {
    name:'VideoShow',
    data(){
        return {
            videoShowlist:[]
        }
    },
    mounted(){
        this.$bus.$on('getVideos',(videosrc)=>{
            this.videoShowlist=videosrc
        })
        console.log('收到了',videosrc)
        console.log(this.videoShowlist)
    }

}
</script>

<style>

</style>