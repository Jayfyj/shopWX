import {instance, baseURL} from '@utils/request'

//请求首页菜单
export const homeMenuUrl = (body) => instance.get(`/server/homeMenu`,{ params: body })


  

