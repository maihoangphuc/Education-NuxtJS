import axios from 'axios'

export const state = () => ({
  courses: [],
  status: ''
})

export const mutations = {
  //get api courses (firebase)
  GET_COURSES: (state, payload) => {
    state.courses = payload
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
  //set status courses
  SET_STATUS: (state, payload) => {
    state.status = payload
  }
}

export const actions = {

  //get api courses (firebase)
  async getAPICourses({ commit }) {
    // Call api to get init data from server
    const { data } = await this.$axios.get("https://courses-nuxtjs-default-rtdb.firebaseio.com/courses.json");
    const newCourses = []
    for(const key in data){
      newCourses.push({...data[key], id: key})
    }
    commit('GET_COURSES', newCourses);
    commit('REVERSE_COURSES')

    if(data === null){
      commit('SET_STATUS', 'Course not found !!!');
    }
    else{
      commit('SET_STATUS', '');
    }
  },

  //post api courses (firebase)
  postAPICourses(vuexContext, data){
    return axios.post('https://courses-nuxtjs-default-rtdb.firebaseio.com/courses.json', data)
      .then(res => {
        // console.log('post', res)
        vuexContext.commit('POST_COURSES', {...data, id: res.data.name})
      })
      .catch(e => console.log(e))
  },

  //put api courses (firebase)
  putAPICourses(vuexContext, data){
    return axios.put(`https://courses-nuxtjs-default-rtdb.firebaseio.com/courses/${data.id}.json`, data)
      .then(res => {
        // console.log('post', res)
        vuexContext.commit('PUT_COURSES', {...data, id: res.data.name})
        // vuexContext.commit('REVERSE_COURSES')
      })
      .catch(e => console.log(e))
  },

  //delete api courses (firebase)
  deleteAPICourses(vuexContext, data){
    return axios.delete(`https://courses-nuxtjs-default-rtdb.firebaseio.com/courses/${data.id}.json`, data)
      .then(res => {
        // console.log('post', res)
        vuexContext.commit('DELETE_COURSES', {...data, id: res.data.name})
      })
      .catch(e => console.log(e))
  },
}


export const getters = {
  getCourses(state){
    return state.courses
  },
  getStatus(state){
    return state.status
  }
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