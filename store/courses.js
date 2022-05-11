export const state = () => ({
  courses: [],
  coursesID: {},
})

export const mutations = {
  //get api courses (firebase)
  GET_COURSES: (state, payload) => {
    state.courses = payload
  },
  //get api coursesID (firebase)
  GET_COURSESID: (state, payload) => {
    state.coursesID = payload
  },
  //reverse array courses
  REVERSE_COURSES: (state) => {
    state.courses.reverse();
  },
  //post api courses (firebase)
  POST_COURSES: (state, payload) => {
    state.courses = [payload].concat(state.courses)
  },
  //put api courses (firebase)
  PUT_COURSES: (state, payload) => {
    const courseIndex = state.courses.findIndex((course) => {
      return course.id === payload.id
    })
    state.courses[courseIndex] = payload
  },
  //delete api courses (firebase)
  DELETE_COURSES: (state, payload) => {
    state.courses = payload
  },
}

export const actions = {

  //get api courses (firebase)
  async getAPICourses(vuexContext) {
    // Call api to get init data from server
    return await this.$axios.$get(`${process.env.baseApiUrl}/courses.json`)
    .then(data => {
      const newCourses = []
      for(const key in data){
        newCourses.push({...data[key], id: key})
      }
      vuexContext.commit('GET_COURSES', newCourses);
      vuexContext.commit('REVERSE_COURSES')
    })
    .catch(e => console.log(e))
  },

  //get api coursesID (firebase)
  getAPICoursesID(vuexContext, data) {
    return this.$axios.$get(`${process.env.baseApiUrl}/courses/${data}.json`)
    .then(data => {
      vuexContext.commit('GET_COURSESID', data)
    })
    .catch(e => console.log(e))
  },

  //post api courses (firebase)
  postAPICourses(vuexContext, payload){
    return this.$axios.$post(`${process.env.baseApiUrl}/courses.json?auth=${vuexContext.rootGetters['auth/getIdToken']}`, payload)
      .then(data => {
        // console.log('post', res)
        vuexContext.commit('POST_COURSES', {...payload, id: data.name})
      })
      .catch(e => console.log(e))
  },

  //put api courses (firebase)
  putAPICourses(vuexContext, payload){
    return this.$axios.$put(`${process.env.baseApiUrl}/courses/${payload.id}.json?auth=${vuexContext.rootGetters['auth/getIdToken']}`, payload)
      .then(data => {
        // console.log('post', res)
        vuexContext.commit('PUT_COURSES', {...payload, id: data.name})
        // vuexContext.commit('REVERSE_COURSES')
      })
      .catch(e => console.log(e))
  },

  //delete api courses (firebase)
  deleteAPICourses(vuexContext, payload){
    return this.$axios.$delete(`${process.env.baseApiUrl}/courses/${payload.id}.json?auth=${vuexContext.rootGetters['auth/getIdToken']}`, payload)
      .then(data => {
        // console.log('post', res)
        vuexContext.commit('DELETE_COURSES', {...payload, id: data.name})
      })
      .catch(e => console.log(e))
  },

}


export const getters = {
  getCourses(state){
    return state.courses
  },
  getCoursesID(state){
    return state.coursesID
  },
}

  

// [
//   {
//     "name": "English",
//     "url": "https://oneminuteenglish.org/wp-content/uploads/2020/02/bEST-oNLINE-eNGLISH-cOURSES.png",
//     "status": "Đang mở",
//     "id": "1"
//   },
//   {
//     "name": "Korean",
//     "url": "https://assets2.varsitytutors.com/vt-ecom-catalog-ui/images/products/Beginner_Korean_203-2x.jpg",
//     "status": "Đang mở",
//     "id": "2"
//   },
//   {
//     "name": "Germany",
//     "url": "https://www.britishschooloflanguages.com/public//home/assets/img/slide/german.webp",
//     "status": "Đang mở",
//     "id": "3"
//   },
//   {
//     "name": "Japanese",
//     "url": "https://s3.amazonaws.com/coursesity-blog/2021/04/Japanese_Language_Classes.png",
//     "status": "Đang mở",
//     "id": "4"
//   },
// ]