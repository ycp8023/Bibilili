<template>
<div id="rankinglist">
  <div class="rankhead">
    <h1>排行榜</h1>
    <span class="showitem"><div class="number">1</div><span class="showinf">紫罗兰永恒花园</span></span>
    <span class="showitem"><div class="number">2</div><span class="showinf">鬼灭之刃</span></span>
    <span class="showitem"><div class="number">3</div><span class="showinf">测不准的阿波连同学</span></span>
</div>
</div>
      
        
</template>

<script>
export default {
  name: 'RankingList',
      data() {
      return {
        RankList: [
            {
                id:'1',
                url:'https://i.postimg.cc/K8j5fSD5/Screenshot-20220504-001730-tv-danmaku-bili.jpg',
            },
            {
                id:'2',
                url: 'https://i.postimg.cc/Hk8yjptF/Screenshot-20220504-001256-tv-danmaku-bili.jpg',
            },
            {
                id:'3',
                url:'https://i.postimg.cc/52zXbs4V/5.png'
            },
            {
                id:'4',
                url:'https://i.postimg.cc/q7XgCg6D/4.png'
            }
        ]
      };
    },
     methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style>
.rankhead{
  position: relative;
}
.number {
  display: inline-block;
  background-color: yellowgreen;
  color: white;
  width: 20px;
  margin-right: 20px;
  margin-bottom: 10px;
  position: absolute;
  left: 10%;
}
.showitem{
  display: block;
  margin-bottom: 10px;
}
.showinf{
  display: inline-block;
}
</style>