import { boot } from 'quasar/wrappers'
import axios from 'axios'

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ baseURL: 'https://api.example.com' })

export default boot(({ app, router, store }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API

  router.beforeEach((to, from, next) => {

    const needRedirect = () => {
<<<<<<< HEAD
      return (to.name !== 'login' && to.path.startsWith('/dash') && !store.state.user)
    }

    const path = '/login'    

    if(needRedirect()){      

      store.commit('setRedirectTo', to.fullPath)
      next({path})

    } else{
      next()
    }
=======
      return (to.name !== 'login' && to.path.startsWith('/dash'))
    }    

    if(needRedirect()){
      if(! store.state.user ){
        next({path: '/login'})
        return
      }
    }
    next()
>>>>>>> dev
  })
})

export { api }
