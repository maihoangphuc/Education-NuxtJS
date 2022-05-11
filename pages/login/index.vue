<template>
  <div>
    <Login
      @emitDataLogin="giveDataLogin"
    />
  </div>
</template>

<script>
import Login from '../../components/Login/Login.vue'

export default {
  components: { Login },
  data(){
    return {
      email: '',
      password: '',
      isLogin: true
    }
  },
  methods: {
    giveDataLogin(data){
      this.email = data[0]
      this.password = data[1]

      //dispatch action vuex (auth)
      this.$store
      .dispatch('auth/authenticationUser', {
        email: this.email,
        password: this.password,
        isLogin: this.isLogin
      })
      .then((res)=>{
        if(res.success){
          this.$router.push('/')
        }
      })
    }
  }
}
</script>

<style>
</style>