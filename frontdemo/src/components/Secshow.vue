<template>
    <div class="showbar">
        <el-row>
            <el-col :span="6" v-for="(el) in SecshowList" :key="el.vid" :offset="2">
                <!-- <el-card :body-style="{ padding: '0px' }" class="card">
                    <img :src="el.vcoverurl" class="image">
                    api：http://api.btstu.cn/sjbz/?lx=dongman 随机封面api
                    <div class="demo">
                        <span>{{el.vtitle}}</span>
                        <div class="bottom clearfix">
                            <time class="time">{{ currentDate }}</time>
                            <el-button type="text" class="button">操作按钮</el-button>
                        </div>
                    </div>
                </el-card> -->
                <div class="showcard">
                   <img :src="el.vcoverurl" class="image">
                   <div class="showinfo">
                     <span><i class="el-icon-view" style="margin-left:10px"></i>{{el.vviews}}<i class="el-icon-thumb" style="margin-left:10px"></i>{{el.vlikes}}<i class="el-icon-star-off" style="margin-left:10px"></i>{{el.vshares}}</span>  
                  </div>
                      
                       <span class="title"> {{el.vtitle}} </span>
                          <!-- <time class="time">{{ currentDate }}</time> -->
                        
                        <el-button class="button" icon="el-icon-video-play"></el-button>
                  
                </div>

            </el-col>
        </el-row>
        <!-- <h1>VideoShow page</h1>
        <div class="card" v-for="video in videoShowlist" :key="video.vid">
            <h1>{{video.vtitle}}</h1>
            <video>
                <source :href="video.vsrc" :type="video.vtype">
            </video>
            <a :href="video.vsrc" target="_blank">
                <img :src="video.vcoverurl" style="width: 100px"/>
            </a>
        </div> -->
    </div>

  
</template>

<script>
export default {
    name:'Secshow',
    data(){
        return {
            currentDate: new Date(),
            SecshowList:[

            {
              vid:'01',
              vauthor:'ycp',
              vtitle:'异度侵入',
              vcoverurl:'https://tva1.sinaimg.cn/large/9bd9b167gy1fwrtfonwg1j21hc0u0try.jpg',
              vsrc:'https://www.runoob.com/try/demo_source/movie.mp4',
              vtype:'video/mp4',
              vlikes:'100',
              vviews:'1000',
              vshares:'80'
            },
            {
              vid:'02',
              vauthor:'ycp1',
              vtitle:'DARKER THAN BLACK',
              vcoverurl:'https://tva2.sinaimg.cn/large/9bd9b167gy1fwrtg3tnm7j21hc0u0qmi.jpg',
              vsrc:'https://www.runoob.com/try/demo_source/movie.mp4',
              vtype:'video/mp4',
              vlikes:'200',
              vviews:'2000',
              vshares:'90'
            },
            {
              vid:'03',
              vauthor:'ycp2',
              vtitle:'CLANNAD',
              vcoverurl:'https://tva4.sinaimg.cn/large/9bd9b167gy1fwsi4ecagvj21hc0u07wi.jpg',
              vsrc:'https://www.runoob.com/try/demo_source/movie.mp4',
              vtype:'video/mp4',
              vlikes:'800',
              vviews:'4000',
              vshares:'70'
            },
            {
                vid:'04',
              vauthor:'ycp3',
              vtitle:'致不灭的你',
              vcoverurl:'https://tva1.sinaimg.cn/large/9bd9b167gy1g4c8tjkcrjj21hc0u0b29.jpg',
              vsrc:'https://www.runoob.com/try/demo_source/movie.mp4',
              vtype:'video/mp4',
              vlikes:'800',
              vviews:'4000',
              vshares:'70'
            },
             {
                vid:'05',
              vauthor:'ycp5',
              vtitle:'野良神 ARAGOTO',
              vcoverurl:'https://tva4.sinaimg.cn/large/9bd9b167ly1fwsifg08gzj21hc0u0kjm.jpg',
              vsrc:'https://www.runoob.com/try/demo_source/movie.mp4',
              vtype:'video/mp4',
              vlikes:'800',
              vviews:'4000',
              vshares:'70'
            },
             {
                vid:'06',
              vauthor:'ycp3',
              vtitle:'Fate',
              vcoverurl:'https://tva3.sinaimg.cn/large/9bd9b167gy1g4li6k6wl8j21hc0xc7wh.jpg',
              vsrc:'https://www.runoob.com/try/demo_source/movie.mp4',
              vtype:'video/mp4',
              vlikes:'800',
              vviews:'4000',
              vshares:'70'
            },
             {
                vid:'07',
              vauthor:'ycp3',
              vtitle:'紫罗兰永恒花园',
              vcoverurl:'https://tva3.sinaimg.cn/large/9bd9b167gy1g4lhrip8ipj21hc0xcnnj.jpg',
              vsrc:'https://www.runoob.com/try/demo_source/movie.mp4',
              vtype:'video/mp4',
              vlikes:'800',
              vviews:'4000',
              vshares:'70'
            },
             {
                vid:'08',
              vauthor:'ycp3',
              vtitle:'瓦尼塔斯的手记',
              vcoverurl:'https://tva3.sinaimg.cn/large/9bd9b167gy1fwrsv51k9tj21hc0u0418.jpg',
              vsrc:'https://www.runoob.com/try/demo_source/movie.mp4',
              vtype:'video/mp4',
              vlikes:'800',
              vviews:'4000',
              vshares:'70'
            },
          ],
        }
    },
    // https://tva3.sinaimg.cn/large/9bd9b167gy1fwrtni3di3j21hc0u0axp.jpg
    // https://tva1.sinaimg.cn/large/9bd9b167gy1g2qkh4v9waj21hc0u0h9y.jpg
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
.showcard{
  position: relative;
    padding: 0px; 
    background-color: white;
    margin-bottom: 40px;
    border-radius: 5px;
    border-width: 2px;
    border-style: none;
}
.showcard:hover{
  border-width: 2px;
  border-style: solid;
  border-color: black;
}
.showinfo{
  position: absolute;
  bottom: 18%;
  right: 16px;
  font-size: 18px;
}
.demo {
    background-color: white;
    position: relative;
    padding: 0px; 
    display:block;
}
/* .card {
    margin-bottom: 20px;
    border-radius: 30px;
} */
  .title{
    height:30px;
    /* position: absolute;
    top: 100%; */
    text-align: center;
  }

 .button {
    padding: 0;
    display: inline-block;
  }

  .image {
    width: 100%;
    display: block;
    padding: 0%;
  }

  /* .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  } */
</style>