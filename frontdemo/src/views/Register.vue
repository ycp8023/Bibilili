<template>
<div id="register">
  <div class ="registerform">
      <h1>注册</h1>
<el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="用户名">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="密码">
       <el-input v-model="form.password"></el-input>
       </el-form-item>
       <el-form-item label="再次输入密码">
       <el-input v-model="form.password"></el-input>
       </el-form-item>
       <el-form-item label="性别">
    <el-select v-model="form.region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="出生日期">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 50%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="即时配送">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="推荐分区">
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="Sec1" name="type"></el-checkbox>
      <el-checkbox label="Sec2" name="type"></el-checkbox>
      <el-checkbox label="Sec3" name="type"></el-checkbox>
      <el-checkbox label="Sec4" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="性别">
    <el-radio-group v-model="form.resource">
      <el-radio label="男"></el-radio>
      <el-radio label="女"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="个人简介">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即注册</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
  </div>
</div>
</template>

<script>
  export default {
      name:"Register",
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style>
.registerform {
    position:absolute;
    left:20%;
    top:20%;
    width:30%;
    background-color: rgab(255, 255, 255,0.9);
    border-radius: 30px;
    height:600px;
}
</style>