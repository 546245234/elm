<template lang="html">
  <div style="margin:20px auto 0; width:90%">
    <form class="form-horizontal" action="index.html" @submit.prevent="reg" method="post">
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
        <label for="code" class="col-xs-3 control-label">验证码</label>
        <div class="col-xs-9">
          <input type="text" class="form-control" name="code" v-model="code" id="code" placeholder="输入验证码">
          <img :src="src" alt="" @click="refresh_code">
        </div>
      </div>
      <div class="form-group">
        <div class="">
          <button type="submit" class="btn btn-default btn-block" :disabled="btn_disable">{{btn_txt}}</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      btn_disable:false,
      btn_txt: '注册',
      username: '',
      password: '',
      src:`http://localhost:8090/api/verfi_code?w=100&h=40&token=${this.$store.state.token}`,
      code:''
    }
  },
  methods:{
    refresh_code(){
      this.src=`http://localhost:8090/api/verfi_code?w=100&h=40&token=${this.$store.state.token}&t=${Math.random()}`
    },
    async reg(){
      this.btn_disable = true;
      this.btn_txt = '注册中...';

      try{
        let headers = {};
        if(this.$store.state.token){
          headers['x-token']=this.$store.state.token;
        }

        let json = (await this.axios.post('user/',{
          username: this.username,
          password: this.password,
          code: this.code
        },{
          headers
        })).data;

        if(json.OK){
          alert('注册成功，请登录');
        }else{
          alert('注册失败，'+json.msg);
        }

      }catch(e){
        alert('网络不稳定，请稍后重试');
      }

      this.btn_disable=false;
      this.btn_txt='注册';
    }
  }
}
</script>

<style lang="css">
</style>
