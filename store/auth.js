import Cookies from 'js-cookie'

export const state = () => ({
  idToken: null
})

export const mutations = {
  //set status idToken
  SET_IDTOKEN: (state, payload) => {
    state.idToken = payload
  },
  DELELE_TOKEN: (state, payload) => {
    state.idToken = payload
  }
}

export const actions = {
  //authentication user (firebase)
  authenticationUser(vuexContext, payload) {
    return new Promise((resolve, reject) => {
      //check typeURL is login or register
      let typeUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.fbAPIKey}`

      if (!payload.isLogin) {
        typeUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbAPIKey}`
      }

      //post data
      this.$axios
        .$post(typeUrl, {
          email: payload.email,
          password: payload.password,
          returnSecureToken: true
        })
        .then(res => {
          //set id token
          vuexContext.commit('SET_IDTOKEN', res.idToken)

          //set localStorage (token)
          localStorage.setItem('token', res.idToken)

          //set localStorage (tokenExpiresIn)
          localStorage.setItem(
            'tokenExpiresIn',
            new Date().getTime() + res.expiresIn * 1000
          )

          //set cookies (token)
          Cookies.set('token', res.idToken)

          //set cookies (tokenExpiresIn)
          Cookies.set(
            'tokenExpiresIn',
            new Date().getTime() + res.expiresIn * 1000
          )

          //dispatch deleteToken
          vuexContext.dispatch('deleteToken', res.expiresIn * 1000)

          //resolve
          resolve({ success: true })
        })
        .catch(e => {
          console.log(e)
        })
    })
  },

  //set time delete token user (firebase)
  deleteToken(vuexContext, payload) {
    setTimeout(() => {
      vuexContext.commit('DELELE_TOKEN', null)
    }, payload)
  },

  //set token in cookie & localStorage
  initAuth(vuexContext, payload) {
    //define variable
    let token, tokenExpiresIn

    //check cookie request
    if (payload) {
      //check cookie in headers
      if (!payload.headers.cookie){
        vuexContext.dispatch('logout')
        return false
      }

      //get cookie (token)
      const tokenKey = payload.headers.cookie
        .split(';')
        .find(c => c.trim().startsWith('token='))

      //get cookie (tokenExpiresIn)
      const tokenExpiresInKey = payload.headers.cookie
        .split(';')
        .find(c => c.trim().startsWith('tokenExpiresIn='))

      //check tokenKey & tokenExpiresInKey
      if (!tokenKey || !tokenExpiresInKey){
        vuexContext.dispatch('logout')
        return false
      }

      //set token
      token = tokenKey.split('=')[1]

      //set tokenExpiresIn
      tokenExpiresIn = tokenExpiresInKey.split('=')[1]
    }
    //check localStorage
    else {
      //get localStorage (token)
      token = localStorage.getItem('token')

      //get localStorage (tokenExpiresIn)
      tokenExpiresIn = localStorage.getItem('tokenExpiresIn')

      //check token & tokenExpiresIn
      if (!token || new Date().getTime() > tokenExpiresIn){
        vuexContext.dispatch('logout')
        return false
      }
    }

    //dispatch deleteToken
    vuexContext.dispatch('deleteToken', tokenExpiresIn - new Date().getTime())

    //commit SET_IDTOKEN
    vuexContext.commit('SET_IDTOKEN', token)
  },

  //logout
  logout(vuexContext) {

    //remove state (token)
    vuexContext.commit('DELELE_TOKEN', null)

    //remove cookie (token)
    Cookies.remove('token')

    //remove cookie (tokenExpiresIn)
    Cookies.remove('tokenExpiresIn')

    //remove localStorage (token)
    localStorage.removeItem('token')

    //remove localStorage (tokenExpiresIn)
    localStorage.removeItem('tokenExpiresIn')
  }
}

export const getters = {
  getIdToken(state) {
    return state.idToken
  },
  getIsAuthentication(state) {
    return state.idToken != null
  }
}
