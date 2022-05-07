<template>
    <div class="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700">
        <!-- Component Start -->
        <h1 class="font-bold text-2xl text-[#6a6973]">Login</h1>
        <form class="flex flex-col bg-white rounded shadow-lg p-12 mt-12" action="">

            <label class="text-sm font-semibold text-gray-600">Username or Email</label>
            <input class="mb-4 mt-[10px] p-3 border border-grey-light rounded text-sm font-semibold text-grey-dark w-full focus:border-[#d2bfa0] outline-none trans-all-linear" name="username" type="text" placeholder="Enter your username or email">

            <label class="text-sm font-semibold text-gray-600">Password</label>
            <input class="mb-4 mt-[10px] p-3 border border-grey-light rounded text-sm font-semibold text-grey-dark w-full focus:border-[#d2bfa0] outline-none trans-all-linear" name="password" type="password" placeholder="Enter your password">

            <button class="flex items-center justify-center h-12 px-6 w-64 bg-[#d2bfa0] mt-2 rounded font-semibold text-sm text-[#fff] hover:bg-[#e4d2b3]">Login</button>

            <div class="flex mt-6 justify-center text-xs">
                <a class="text-blue-400 hover:text-blue-500" href="#">Forgot Password</a>
                <span class="mx-2 text-gray-300">/</span>
                <a class="text-blue-400 hover:text-blue-500" href="#">Sign Up</a>
            </div>
        </form>
        <!-- Component End  -->
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>