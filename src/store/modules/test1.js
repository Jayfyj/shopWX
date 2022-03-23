// import { testUrl } from '../api/test'
export default {
  namespaced:true,
  state: {
    a:1
  },
  mutations: {
    ADD(state,v){
      state.a +=v 
    },

    SUB(state,v){
      state.a = v
    }
  },
  actions: {
    // requestGetTest({commit},option){
    //   return new Promise((resolve, reject) =>{
    //     testUrl(option).then(res =>{
    //       resolve(res)
    //       // console.log(res,465465)
    //       commit('SUB',res.data.data.name)
    //     })
    //   })
    // }
  },
}


