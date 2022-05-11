<template>
  <div class="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700">
    <!-- Component Start -->
    <h1 class="font-bold text-2xl text-[#6a6973]">Register</h1>
    <form class="flex flex-col bg-white rounded shadow-lg p-12 mt-12" @submit.prevent="onSubmitAuth">
      <label for="email" class="text-sm font-semibold text-gray-600">Username or Email</label>
      <input v-model="emailData" id="email" class="mb-4 mt-[10px] p-3 border border-grey-light rounded text-sm font-semibold text-grey-dark w-full focus:border-[#d2bfa0] outline-none trans-all-linear" name="username" type="text" placeholder="Enter your username or email">

      <label for="password" class="text-sm font-semibold text-gray-600">Password</label>
      <input v-model="passwordData" id="password" class="mb-4 mt-[10px] p-3 border border-grey-light rounded text-sm font-semibold text-grey-dark w-full focus:border-[#d2bfa0] outline-none trans-all-linear" name="password" type="password" placeholder="Enter your password">
      
      <label for="re-password" class="text-sm font-semibold text-gray-600">Re-password</label>
      <input v-model="rePasswordData" id="re-password" class="mb-4 mt-[10px] p-3 border border-grey-light rounded text-sm font-semibold text-grey-dark w-full focus:border-[#d2bfa0] outline-none trans-all-linear" name="re-password" type="password" placeholder="Enter your re-password">

      <button type="submit" class="flex items-center justify-center h-12 px-6 w-64 bg-[#d2bfa0] mt-2 rounded font-semibold text-sm text-[#fff] hover:bg-[#e4d2b3]">Register</button>

      <div class="flex mt-6 justify-center text-xs">
        <nuxt-link class="text-blue-400 hover:text-blue-500" to="/login">Login</nuxt-link>
      </div>
    </form>
    <!-- Component End  -->
  </div>
</template>

<script>
export default {
  data(){
    return {
      emailData: '',
      passwordData: '',
      rePasswordData: '',
    }
  },
  methods: {
    onSubmitAuth(){
      this.$emit('emitDataRegister', [
        this.emailData,
        this.passwordData,
        this.rePasswordData
      ])
    }
  }
}
</script>

<style>

</style>