<template>
  <div class="mt-[30px] mb-[30px] md:px-8">
    <!-- name course -->
    <h2 class="text-4xl font-bold text-center text-[#d2bfa0] mb-[10px]">{{ courseList.name }}</h2>

    <!-- content course -->
    <div class="text-[18px] font-medium text-center text-[#474c5c]">{{ `(${courseList.content})` }}</div>

    <!-- show text -->
    <div class="pt-[50px] pb-[20px] flex flex-col justify-center items-center">
      <img class="w-[500px]" :src="courseList.url" :alt="courseList.name" />
      <h1 class="text-center text-[18px] mt-[20px] text-gray-600">{{ status }}</h1>
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
  async asyncData(context) {
    return await context.app.$axios
    .$get(`https://courses-nuxtjs-default-rtdb.firebaseio.com/courses/${context.params.id}.json`)
    .then(res=>{
      return {
        courseList: res
      }
    })
    .catch(e=>{
      context.error(e)
    })
  },
  methods: {
    openModal(name) {
      if(name === 'createRoad'){
        this.$modal.open({ name: 'modalRoad' })
      }
      else if (name === 'editCourse'){
        this.$modal.open({ name: 'modalCourse', payload: {...this.courseList, id: this.$route.params.id} })
      }
      else if (name === 'deleteCourse'){
        this.$modal.open({ name: 'modalConfirm', payload: {...this.courseList, id: this.$route.params.id}})
      }
    },
  },
  head(){
    return{
      title: `Education - Learning ${this.courseList.name}`
    }
  }
}
</script>

<style>

</style>