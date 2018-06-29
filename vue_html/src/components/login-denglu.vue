<template lang="html">
  <div style="margin:20px auto 0; width:90%">
    <form class="form-horizontal" action="index.html" @submit.prevent="login" method="post">
      <div class="form-group">
        <label for="email" class="col-xs-3 control-label">邮箱</label>
        <div class="col-xs-9">
          <input type="email" class="form-control" name="username" v-model="username" id="email" placeholder="输入邮箱">
        </div>
      </div>
      <div class="form-group">
        <label for="pass" class="col-xs-3 control-label">密码</label>
        <div class="col-xs-9">
          <input type="password" class="form-control" name="password" v-model="password" id="pass" placeholder="输入密码">
        </div>
      </div>
      <div class="form-group">
        <div class="">
          <button type="submit" class="btn btn-default btn-block">登录</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      username: '',
      password: ''
    }
  },
  methods:{
    async login(){
      try{
        let headers = {};

        if(this.$store.state.token){
          headers['x-token'] = this.$store.state.token;
        }

        let json=(await this.axios.get(`/user/${this.username}/${this.password}/`, {headers})).data;

        if(json.OK){
          alert('登陆成功');
          this.$store.dispatch('updateUser', this.username);
          this.$router.replace('/');

        }else{
          alert('登录失败，'+json.msg);
        }

      }catch(e){
        console.log(e);
        alert('网络不通，请重试');
      }
    }
  }
}
</script>

<style lang="css">
</style>