// import { testUrl } from '../api/test'
export default {
  namespaced:true,
  state: {
    b:1
  },
  mutations: {
    ADD(state,v){
      state.b +=v 
    },

    GET(state,v){
      state.b = v
    }
  },
  actions: {
    // requestGetTest({commit},option){
    //   return new Promise((resolve, reject) =>{
    //     testUrl(option).then(res =>{
    //       resolve(res)
    //       // console.log(res,465465)
    //       // commit('SUB',res.data.data.name)
    //     })
    //   })
    // }
  },
}
