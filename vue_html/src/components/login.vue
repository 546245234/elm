<template lang="html">
  <div class="login" style="font-size:16px;">
    <div class="logo"></div>
    <ul class="nav nav-tabs">
      <li role="presentation" v-for="json in types" :key="json.type" :class="type==json.type?'active':''" @click="gotoTab(json.type)"><a href="javascript:;">{{json.title}}</a></li>
    </ul>
    <LoginReg v-if="type=='reg'"></LoginReg>
    <LoginDenglu v-if="type=='login'"></LoginDenglu>
  </div>
</template>
<script>
import LoginReg from '@/components/login-reg'
import LoginDenglu from '@/components/login-denglu'

export default {
    data(){
        return{
            types:[
                {title:'注册',type:'reg'},
                {title: '登录', type: 'login'}
            ],
            type: this.$route.params['type']
        }
    },
    methods:{
        gotoTab(type){
            this.$router.replace(`/login/${type}`);
            this.type=type;
        }
    },
    components: {
        LoginReg,
        LoginDenglu
    }
}
</script>

<style lang="css">
html {background:white}
.login .logo {width:136px; height:55px; background:url(/static/img2/ele_login_logo.png) no-repeat; margin: 40px auto 45px;}
</style>
