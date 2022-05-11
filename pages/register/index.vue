<template>
  <div>
    <Register
      @emitDataRegister="giveDataRegister"
    />
  </div>
</template>

<script>
import Register from "../../components/Register/Register.vue"
export default {
  components: { Register },
  data(){
    return {
      email: '',
      password: '',
      rePassword: '',
    }
  },
  methods: {
    checkPassword(){
      return this.password === this.rePassword
    },
    giveDataRegister(data){
      this.email = data[0]
      this.password = data[1]
      this.rePassword = data[2]

      const validPassword = this.checkPassword()

      if(validPassword){
        //dispatch action vuex (auth)
        this.$store
        .dispatch('auth/authenticationUser', {
          email: this.email,
          password: this.password
        })
        .then((res)=>{
          if(res.success){
            this.$router.push('/login')
          }
        })
      }
      else{
        console.log('mật khẩu không khớp');
      }
    }

  }
}
</script>

<style>
</style>