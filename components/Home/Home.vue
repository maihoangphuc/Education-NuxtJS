<template>
    <div class="h-auto w-[100%]">

      <!-- Banner -->
      <div class="py-20 bg-[#feeed4]">
          <div class="container m-auto text-center opacity-100">
          <h2 class="text-4xl font-bold mb-2 text-[#6a6973]">Welcom to website!</h2>
          <h3 class="text-2xl mb-8 text-[#818475]">Do you want to learn languages?</h3>
          <button class="bg-white text-[#6a6973] font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:border-transparent hover:text-[#feeed4] hover:bg-[#6a6973]">
              <nuxt-link to='/courses'>Learn now</nuxt-link>
          </button>
          </div>
      </div>
      
      <!-- English -->
      <section class="container mx-auto px-6 p-10">
        <h2 class="text-4xl font-bold text-center text-[#d2bfa0] mb-8">Overview</h2>
        

        <div class="flex items-center justify-between flex-wrap m-20">
          <div class="w-full md:w-1/2">
            <img class="rounded-lg w-[100%]" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/80b592117059887.606e70f46ce2b.jpg" alt="use the force" />
          </div>
          <div class="w-full md:w-1/2 pl-10">
            <h4 class="text-3xl text-[#6a6973] font-bold mb-3">Learning Website</h4>
            <p class="text-[#acb879] mb-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam quia provident asperiores minima esse? Perspiciatis dolorum incidunt nihil? Aperiam porro debitis nesciunt natus quaerat ipsum labore iure saepe laudantium in!</p>
          </div>
        </div>

        <div class="flex items-center justify-between flex-wrap m-20">
          <div class="w-full md:w-1/2 pl-10">
            <h4 class="text-3xl text-[#6a6973] font-bold mb-3">Study Effectively</h4>
            <p class="text-[#acb879] mb-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam quia provident asperiores minima esse? Perspiciatis dolorum incidunt nihil? Aperiam porro debitis nesciunt natus quaerat ipsum labore iure saepe laudantium in!</p>
          </div>
          <div class="w-full md:w-1/2">
            <img class="rounded-lg w-[100%]" src="https://cdn.dribbble.com/users/508588/screenshots/15599820/tdv_m236_04_4x.jpg" alt="use the force" />
          </div>
        </div>

        <div class="flex items-center justify-between flex-wrap m-20">
          <div class="w-full md:w-1/2">
            <img class="rounded-lg w-[100%]" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/5353aa117059887.606e70f46c6a8.jpg" alt="use the force" />
          </div>
          <div class="w-full md:w-1/2 pl-10">
            <h4 class="text-3xl text-[#6a6973] font-bold mb-3">Study At Home</h4>
            <p class="text-[#acb879] mb-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam quia provident asperiores minima esse? Perspiciatis dolorum incidunt nihil? Aperiam porro debitis nesciunt natus quaerat ipsum labore iure saepe laudantium in!</p>
          </div>
        </div>
        
      </section>
      
      <!-- Germany -->
      <section class="bg-gray-100">
        <div class="container mx-auto px-6 py-20">
          <h2 class="text-4xl font-bold text-center text-[#d2bfa0] mb-8">Feature</h2>
          <div class="flex flex-wrap">
            
            <div class="w-full h-auto md:w-1/3 px-2 mb-4">
              <div class="flex flex-col justify-between h-full bg-white rounded shadow py-2">
                <p class="text-[#6a6973] text-base px-6 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consectetur. Ut obcaecati aut, voluptas, minus, cumque officiis nesciunt blanditiis quisquam perferendis temporibus vero unde pariatur adipisci quos minima atque. Recusandae.</p>
                <p class="text-gray-500 text-xs md:text-sm px-6">Test</p>
              </div>
            </div>
            
            <div class="w-full h-auto md:w-1/3 px-2 mb-4">
              <div class="flex flex-col justify-between h-full bg-white rounded shadow py-2">
                <p class="text-[#6a6973] text-base px-6 mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia repudiandae mollitia distinctio reprehenderit suscipit voluptates numquam molestiae corporis, velit architecto similique, deleniti aperiam debitis odio. Soluta quasi ipsam dignissimos ducimus?</p>
                <p class="text-gray-500 text-xs md:text-sm px-6">Test</p>
              </div>
            </div>
            
            <div class="w-full h-auto md:w-1/3 px-2 mb-4">
              <div class="flex flex-col justify-between h-full bg-white rounded shadow py-2">
                <p class="text-[#6a6973] text-base px-6 mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati suscipit animi consectetur, enim neque culpa corrupti placeat ea deleniti cupiditate similique cum excepturi fugiat ut dolore velit quos harum consequuntur.</p>
                <p class="text-gray-500 text-xs md:text-sm px-6">Test</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
</template>

<script>
export default {

}
</script>

<style>
</style>