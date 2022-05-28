<template>
  <div class="search">
      This is search page
      <input v-model="searchmsg" type="text" placeholder="  inputtext" class="searchdemo">
      <el-button type="primary" icon="el-icon-search"  @click="click_search" class="searchbtn">搜索</el-button>
  </div>
</template>

<script>
export default {
    name:'Searchdemo',
    data(){
        return { 
          searchmsg: '',
          videoList:[
            {
              vid:'01',
              vauthor:'ycp',
              vtitle:'DARKER THAN BLACK',
              vcoverurl:'https://i.postimg.cc/Hk8yjptF/Screenshot-20220504-001256-tv-danmaku-bili.jpg',
              vsrc:'https://www.runoob.com/try/demo_source/movie.mp4',
              vtype:'video/mp4',
              vlikes:'100',
              vviews:'1000',
              vshares:'80'
            },
            {
              vid:'02',
              vauthor:'ycp1',
              vtitle:'CLANNAD',
              vcoverurl:'https://i.postimg.cc/qR6sxkPr/4.png',
              vsrc:'https://www.runoob.com/try/demo_source/movie.mp4',
              vtype:'video/mp4',
              vlikes:'200',
              vviews:'2000',
              vshares:'90'
            },
            {
              vid:'03',
              vauthor:'ycp2',
              vtitle:'野良神',
              vcoverurl:'https://i.postimg.cc/Pqgph17G/Screenshot-20220504-001219-tv-danmaku-bili.jpg',
              vsrc:'https://www.runoob.com/try/demo_source/movie.mp4',
              vtype:'video/mp4',
              vlikes:'800',
              vviews:'4000',
              vshares:'70'
            }
          ],
          videoListRst: []  //搜索结果列表
        }
    },
    methods: {
        click_search(){
            for(let i=0; i<this.videoList.length; i++){
              let tmp= this.videoList[i].vtitle; //按照名字匹配
              if(this.searchmsg==tmp) {// 将匹配的数据放入结果列表中
                this.videoListRst.push(this.videoList[i]);
              }
            }
          // http://bt2.zjlonline.cn/#/video/contents
          // axios.get('http://bt2.zjlonline.cn/#/video/contents')
          // this.videoListRst=this.videoList
          this.$bus.$emit('getVideos',this.videoListRst)
          console.log('发出啦',this.videoListRst)
          // this.$router.push({ path: 'videoshow' })
        }
    }
}
</script>

<style>
    .searchdemo{
      position: absolute;
      top: 35%;
      left:30%;
      width:40%;
      height: 40px;
      border-radius: 30px;
      background-color:rgba(123, 104, 238,0.6);
      border-style: solid;
      border-color: gold;
      border-width: 5px;
      margin-right: 20px;
       transition: 0.5s;
    }
    .searchdemo:hover{
      background-color:rgba(123, 104, 238,0.8);
    }
</style>