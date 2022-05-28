<template>
  <div class="loginwrapper">
      <form class="form-box">
          <h1>Login</h1>

          <label v-if="!this.$store.state.isLogin"><input v-model="username" type="text" placeholder="Username" class="username"></label>
          <label v-if="!this.$store.state.isLogin"><input v-model="password" type="password" placeholder="Password" class="password"></label>
          <span @click="click2register" class="cli2reg">click and join us!</span>
          <el-button  v-if="this.$store.state.isLogin" type="info" plain @click="click_logout">退出登录</el-button>
          <el-button  v-else type="primary" round  @click="click_login">登录</el-button>
          <!-- <button type="submit" @click="click_login" class="login">Login</button> -->
      </form>
  </div>

</template>

<script>
export default {
    name:"Login",
    data() {
        return {
            username:'',
            password:'',
        }
    },
    methods: {
        click_login(){
            this.$store.commit('login')
            // window.alert("HELLO" + this.username);
            this.$axios({
                method: 'post',
                url: '/user/login',
                data: qs.stringify({
                    username: this.username,
                    password: this.password
                })
            })
            .then(res =>{
                switch (res.data.status_code) {
                    case 200:
                        window.alert('登录成功');
                        this.$store.dispatch('saveUserInfo',{
                            user: {
                                'username': res.data.username,
                                'token': res.data.token,
                                'userId': res.data.user_id
                            }
                        });
                        break;
                    case 401:
                        window.alert("用户名不存在");
                        break;
                    case 402:
                        window.alert('密码错误');
                        break;
                }   
            })
            .catch(err => {
                console.log(err);
            })

            // 登录成功后返回原路由的逻辑
            const history_pth = localStorage.getItem('preRoute');
            setTimeout(() => {
                if(history_pth == null || history_pth === '/register') {
                    this.$router.push('/');
                }else{
                    this.$router.push({path: history_pth});
                }
            }, 1000);

        },
        click_logout(){
            this.$store.commit('logout')
        },
        click2register(){
            this.$router.push('/register')
        }
    },
}
</script>

<style scoped>
.loginwrapper{
    background-image: url('https://tva4.sinaimg.cn/large/9bd9b167gy1g4lj2pwrifj21hc0xcx6p.jpg');
    background-repeat: no-repeat;
}
.form-box {
    background-image: url('https://tva4.sinaimg.cn/large/9bd9b167gy1g4lj2pwrifj21hc0xcx6p.jpg');
    background-color: rgba(255, 255, 255,0.8);
    border-radius: 15px;
    width:300px;
    padding:20px;
    position: absolute;
    top: 50%;
    left: 50%;
    /* transform: translate(-50%,-50%); 往上往左移动自身长宽的50%，使表单位于正中间*/
    transform: translate(-50%,-50%);

}

.form-box h1 {
    text-transform: uppercase;
    color: darkslateblue;

}

.form-box .username, .form-box .password {
    margin: auto;
    margin-bottom: 20px;
    width: 300px;
    height: 40px;
    border-radius: 20px;
    background-color: rgba(135, 206, 250,0.6);
    border: 5px solid slateblue;
    display: block;

    /* 文本 */
    text-align: center;
    color: black;
    font-size: 20px;
    /* 设置元素过渡效果 */
    transition: 0.5s;  
}

.form-box .username:hover ,.form-box .password:hover{
    border-color: rgba(106, 90, 205 ,0.8);
    background-color: rgba(135, 206, 250,0.8);
    color: black;
    width: 300px;
    height: 50px;
}
.form-box .login{
    border-radius: 15px;
    border: 2px solid mediumpurple;
    display: block;
    height: 30px;
    width: 90px;
    margin: auto;
    transition: 0.5s;
    /* 设置光标样式 */
    cursor: pointer;
    background-color: rgba(135, 206, 250,0.6);
    font-size: 15px;
    color: black;
}
.form-box .login:hover{
    height: 40px;
    width: 120px;
    background-color: rgba(135, 206, 250,0.8);
    font-size: 20px;
    
}
.cli2reg{
    display: block;
    /* position: absolute;
    right: 10%; */
    margin-left: 150px;
    margin-bottom: 20px;
}
.cli2reg:hover{
    color: slateblue;

}
</style>