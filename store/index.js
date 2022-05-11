export const actions = {
    async nuxtServerInit(vuexContext, context) {
      return Promise.all([
        // await vuexContext.dispatch('courses/getAPICourses', context),
        // await vuexContext.dispatch('courses/getAPICoursesID', context),
        // await vuexContext.dispatch('courses/postAPICourses', context),
        // await vuexContext.dispatch('courses/putAPICourses', context),
        // await vuexContext.dispatch('courses/deleteAPICourses', context),
        // await vuexContext.dispatch('auth/authenticationUser', context),
      ]);
    },
}