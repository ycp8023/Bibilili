<template>
    <div id="home">
    <el-container>
        <el-header>
            Seaching
            <el-autocomplete 
            v-model="state" 
            :fetch-suggestions="querySearchAsync" 
            placeholder="请输入内容" 
            @select="handleSelect"
            size="medium"
            suffix-icon="el-icon-search"
            >
            </el-autocomplete>
            <button class="homesearchbtn">SEARCH</button>

        </el-header>
        <Canvaspart/>
    </el-container>
          
    <el-container>
            <el-aside width="300px" class="asidebar">
              <h1>Aside</h1>
            </el-aside>
      <el-main>
      <el-carousel height="420px" >
          <el-carousel-item class="showimages" :key="item.id" v-for="item in imageList">
              <el-image class="imagesty" :src=item.url :fit="fit"></el-image>
          </el-carousel-item>
      </el-carousel>
      </el-main>
      <el-aside width="300px" class="asidelist">
        List
 <RankingList/>
      </el-aside>
    </el-container> 
    <el-container>
        <el-header>
          <div class="Secstyle"> <h1>First Sec</h1></div>
        </el-header>
        <el-main>
            <Secshow/>
        </el-main>
    </el-container> 
    <el-container>
        <el-header>
          <div class="Secstyle"> <h1>Second Sec</h1> </div>
            
        </el-header>
        <el-main>
          Sec2
        </el-main>
        <el-footer>footer</el-footer>
    </el-container> 
    <!-- <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :bottom="100">
    <div
      style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
    >
      UP
    </div>
    </el-backtop> -->
    </div>
</template>

<style>
#home {
     font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif,Monospace;
     background-color: rgb(255, 255, 255);
}
  .asidebar,.asidelist{
    background-color:lemonchiffon;
    border-radius: 30px;
    margin: 15px;
  }
  .el-image {
    width: 100%;
    height: 100% ;
    border-radius: 30px;
  }
   .el-button{
       margin-left: 10px;
       font-family: Helvetica;
       font-weight: 700;
       background-color: black;

    }
    .el-button:hover {
        background-color: rgba(0,0,0, 60%);
    }
  .el-header {
    background-color:lemonchiffon;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-footer {
    background-color:rgb(0, 0, 0);
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-header:nth-child(1) .el-autocomplete{
      width:600px;
  }
  
  .el-main {
    background-color: lemonchiffon;
    color: #333;
    text-align: center;
    line-height: 160px;

  }
  
  body > .el-container {
    margin-bottom: 40px;
      background-color: lemonchiffon;
  }
  
   .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 50px;
    margin: 0;
  }
  .Secstyle {
    transition: width 2s;
    border-radius: 10px;
    background-color:black;
    width:100px;
    color: white;
  }
  .Secstyle:hover {
    width:90%;
    color:lemonchiffon;
    text-align:center;
  }
  .homesearchbtn {
    margin-left: 30px;
    font-weight: 700;
    background-color: black;
    border-radius: 30px;
    border-style: none;
    color: lemonchiffon;
    width: 100px;
    height: 40px;
    transition: 0.5s;
    
  }
  .homesearchbtn:hover{
    background-color: lemonchiffon;
    color: black;
    border-style: solid;
    border-width: 3px;
    border-color: black;
  }
  /* .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  } */
</style>

<script>
import Canvaspart from '../components/Canvaspart.vue'
import Secshow from '../components/Secshow.vue'
import RankingList from '../components/RankingList.vue'
export default {
  components: {
      Canvaspart,
      Secshow,
      RankingList
  },
  name: 'Home',
      data() {
      return {
        restaurants: [],
        state: '',
        timeout:  null,
        imageList: [
            {
                id:'1',
                url:'https://tva3.sinaimg.cn/large/9bd9b167gy1fwrtni3di3j21hc0u0axp.jpg',
            },
            {
                id:'2',
                url: 'https://tva1.sinaimg.cn/large/9bd9b167gy1g2qkh4v9waj21hc0u0h9y.jpg',
            },
            {
                id:'3',
                url:'https://tva1.sinaimg.cn/large/9bd9b167gy1g2qme6u3cbj21hc0u0npd.jpg'
            },
            {
                id:'4',
                url:'https://tva4.sinaimg.cn/large/9bd9b167gy1g2qk3vv0gvj21hc0u0nab.jpg'
            }
        ]
      };
    },
    methods: {
      loadAll() {
        return [
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
        ];
      },
      querySearchAsync(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
}
</script>
