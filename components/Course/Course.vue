<template>
  <!-- card with image -->
  <div class="w-full md:w-1/2">
    <div class="bg-white md:h-[400px] md:w-[200%] rounded-lg shadow-lg">

      <div class="w-[100%] h-[200px]">
        <nuxt-link :to="`/courses/${id}`">
          <img class="h-[100%] w-[100%]" :src="url" :alt="name">
        </nuxt-link>
      </div>

      <div class="p-6">
        <nuxt-link :to="`/courses/${id}`">
          <h2 class="font-bold mb-2 text-2xl text-gray-600 hover:text-[#8d8989]">{{ name }}</h2>
        </nuxt-link>

        <p class="text-gray-600 mb-2">{{ content }}</p>

        <nuxt-link :to="`/courses/${id}`">
          <button class="outline-none rounded-[20px] py-[6px] px-[16px] bg-[#d2bfa0] hover:bg-[#e4d2b3] text-[#ffffff]">Learn</button>
        </nuxt-link>
      </div>

    </div>
  </div>
</template>


<script>
export default {
  name: 'Course',
  props: {
    id: {
      type: String,
      require: true
    },
    name: {
      type: String,
      require: true
    },
    content: {
      type: String,
      require: true
    },
    url: {
      type: String,
      require: true
    },
  },
}
</script>


