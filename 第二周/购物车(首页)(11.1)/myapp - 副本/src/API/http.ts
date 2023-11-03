import http from './request'

export const myApi = () => http.get('/user/detail')
export const bannApi = (params: any) => http.get('/banner/list', {params})
interface listI {
    page:1;
    pageSize:10
}

export const ListApi = (params: listI) => http.post('/shop/goods/list/v2',params)