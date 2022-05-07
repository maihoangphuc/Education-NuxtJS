<template>
  <div>
    <!-- header -->
    <Header/>

    <!-- nuxt -->
    <Nuxt/>

    <!-- modal courses -->
    <v-modal v-slot="payload" name="modalCourse">
      <CourseForm
        :course="payload.payload"
        @emitSubmitFormCourse="submitFormCourses"
      />
    </v-modal>

    <!-- modal confirm -->
    <v-modal v-slot="payload" name="modalConfirm">
      <ConfirmForm
        :course="payload.payload"
        @emitSubmitFormConfirm="submitFormConfirm"
      />
    </v-modal>

    <!-- footer -->
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header/Header.vue'
import CourseForm from '../components/Form/CourseForm.vue'
import Footer from '../components/Footer/Footer.vue'
import ConfirmForm from '../components/Form/ConfirmForm.vue'

export default {
  components: { Header, Footer, CourseForm, ConfirmForm },
  methods: {

    //submit form courses
    submitFormCourses(data){
      //post course
      if(data && !data.id){
        this.$store.dispatch('courses/postAPICourses', data)
        .then(() => {
          //close modal courses
          this.$modal.close({ name: 'modalCourse' })
        })
      }
      //put course
      else{
        this.$store.dispatch('courses/putAPICourses', data)
        .then(() => {
          //close modal courses
          this.$modal.close({ name: 'modalCourse' })
          //redirect
          this.$router.push('/courses')
        })
      }
    },

    //submit form confirm
    submitFormConfirm(data){
      //delete course
       this.$store.dispatch('courses/deleteAPICourses', data)
        .then(() => {
          //close modal confirm
          this.$modal.close({ name: 'modalConfirm' })
          //redirect
          this.$router.push('/courses')
        })
    }
  },
}
</script>

<style>

</style>