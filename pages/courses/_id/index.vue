<template>
  <div class="mt-[30px] mb-[30px] md:px-8">
    <!-- name course -->
    <h2 class="text-4xl font-bold text-center text-[#d2bfa0] mb-[10px]">{{ coursesID.name }}</h2>

    <!-- content course -->
    <div class="text-[18px] font-medium text-center text-[#474c5c]">{{ `(${coursesID.content})` }}</div>

    <!-- show text -->
    <div class="pt-[50px] pb-[20px] flex flex-col justify-center items-center">
      <img class="w-[500px]" :src="coursesID.url" :alt="coursesID.name" />
    </div>

    <div class="flex justify-center items-center gap-x-4">
      <!-- button edit course -->
      <button
        class="outline-none py-[6px] px-[16px] rounded-[20px] bg-[#d2bfa0] hover:bg-[#e4d2b3] text-[#ffffff]"
        @click="openModal('editCourse')"
      >
        Edit a course
      </button>
      
      <!-- button delete course -->
      <button
        class="outline-none py-[6px] px-[16px] rounded-[20px] bg-[#d2bfa0] hover:bg-[#e4d2b3] text-[#ffffff]"
        @click="openModal('deleteCourse')"
      >
        Delete a course
      </button>
    </div>

  </div>
</template>

<script>
export default {
  created(){
    this.$store.dispatch('courses/getAPICoursesID', this.$route.params.id)
  },
  computed: {
    coursesID() {
      return this.$store.getters['courses/getCoursesID']
    },
  },
  methods: {
    openModal(name) {
      if(name === 'createRoad'){
        this.$modal.open({ name: 'modalRoad' })
      }
      else if (name === 'editCourse'){
        this.$modal.open({ name: 'modalCourse', payload: {...this.coursesID, id: this.$route.params.id} })
      }
      else if (name === 'deleteCourse'){
        this.$modal.open({ name: 'modalConfirm', payload: {...this.coursesID, id: this.$route.params.id}})
      }
    },
  },
  head(){
    return{
      title: `Education - Learning ${this.coursesID.name}`
    }
  }
}
</script>

<style>

</style>