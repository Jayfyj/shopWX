//接口配置

/*
1. 引入接口
    instance:'封装化的接口方法
    baseURL:请求接口的基本路径
import {instance, baseURL} from '@utils/request'

2.封装自己的接口
    urlParams:接口url需要拼接的参数，是一个对象
    body:传入的参数，是一个对象
    geturl，posturl：请求路径

export const getUrl = (body,urlParams) =>instance.get(`geturl/${urlParams.id}`,{ params: body })
export const postUrl = (body,urlParams) =>instance.post(`posturl/${urlParams.id}`,body})

*/
