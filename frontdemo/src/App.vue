<template>
  <div id="app">
    <nav>
      <el-container class="head">
        <div class="avatar-style">
        <el-avatar src="https://i.postimg.cc/qq1VyHp3/IMG-20220508-103718.jpg" :size="60" shape="square"></el-avatar>
        <span>VIDEOSITE</span>
        </div>
        <!-- Menu 还提供了background-color、text-color和active-text-color -->
      <el-menu
        :default-active="'1'"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#000000"
        text-color="#ffffff"
        active-text-color="#ffd04b"
        >
        <el-menu-item index='1'>
          <router-link to="/">Home</router-link>
          <i class="el-icon-menu"></i>
        </el-menu-item>
        <el-menu-item index='2'>
          <router-link to="/search">Search</router-link>
          <i class="el-icon-search"></i>
        </el-menu-item>
        <el-menu-item index='3'>
          <router-link to="/center">Center</router-link>
          <i class="el-icon-s-custom"></i>
        </el-menu-item>
        <el-menu-item index='4'>
          <a href="https://www.ele.me" target="_blank">About</a>
          <i class="el-icon-position"></i>
        </el-menu-item>
      </el-menu>
      <button class="loginbtn" @click="click_jump">Login</button>
      </el-container>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-image:  url('https://tva4.sinaimg.cn/large/9bd9b167gy1g4lj2pwrifj21hc0xcx6p.jpg');
  
}
nav .el-menu-demo {
  position: absolute;
  right: 10%;
  top:2.5%;
  font-size:30px;
  font-weight: 700;
}
.loginbtn {
  position: absolute;
  right: 3%;
  top:3.5%;
  font-weight: 700;
  background-color: black;
  border-radius: 30px;
  border-style: none;
  color: lemonchiffon;
  width: 100px;
  height: 40px;
  transition: 0.5s;
}
nav .avatar-style {
  margin-right: 10px;
}
nav {
  padding: 15px;
  background-color: #ffffff;
}

nav a {
  font-weight: bold;
  color:lemonchiffon;
}

nav a.router-link-exact-active {
  color: #ffd04b;
}
.head{
  background-color:#000000;
  border-width: 0;
}
.loginbtn:hover {
  background-color: #ffd04b;
  color: #000000;
}
</style>

<script>
export default {
   data() {
      return {
        
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      click_jump(){
        this.$router.push({
          path:"/login"
        })

      }
    }
}
</script>