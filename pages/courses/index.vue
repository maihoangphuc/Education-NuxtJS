<template>
  <div class="px-8 mt-[30px]">
    <!-- title -->
    <h2 class="text-4xl font-bold text-center text-[#d2bfa0] mb-8">Courses</h2>

    <div class="flex justify-center">
      <!-- button create course -->
      <button
        class="outline-none py-[6px] px-[16px] rounded-[20px] bg-[#d2bfa0] hover:bg-[#e4d2b3] text-[#ffffff]"
        @click="openModal('createCourse')"
      >
        Create course
      </button>
    </div>

    <!-- show text -->
    <div v-if="status" class="pb-[100px] pt-[100px] flex flex-col justify-center items-center">
      <img class="w-[200px]" src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png" alt="" />
      <h1 class="text-center text-[18px] mt-[20px] text-gray-600">{{ status }}</h1>
    </div>

    <!-- show courses -->
    <div v-else>
      <!-- courses -->
      <div
        class="w-[100%] h-auto grid gap-x-[25px] items-center justify-center mt-[70px] pb-[70px] gap-y-[20px] sm:grid-cols-2 md:grid-cols-3 md: lg:grid-cols-3 xl:grid-cols-4 xl:content-center"
      >
        <Course
          v-for="(course, index) in courses"
          :key="index"
          :id="course.id"
          :name="course.name"
          :content="course.content"
          :url="course.url"
        />
      </div>
    </div>

  </div>
</template>

<script>
import Course from '../../components/Course/Course.vue'

export default {
  components: {
    Course,
  },
  methods: {
    openModal(name) {
      if(name === 'createCourse'){
        this.$modal.open({ name: 'modalCourse' })
      }
    }
  },
  created(){
    this.$store.dispatch('courses/getAPICourses')
  },
  computed: {
    courses() {
      return this.$store.getters['courses/getCourses']
    },
    status() {
      return this.$store.getters['courses/getStatus']
    }
  },
  head(){
    return{
      title: `Education - Courses`
    }
  }

}
</script>
