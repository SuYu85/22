import axios from 'axios'


class Phone {
    instance: any
    constructor(config: any) {
        this.instance = axios.create(config)
        this.instance.interceptors.request.use((config: any) => {
            let token = localStorage.getItem('token')
            if(token){
                config.headers.Authorization = "Bearer" + token
            }
            return config;
        });

        this.instance.interceptors.response.use((res: any) => {
            return res;
        });
    }
    get(url: string, params?: any) {
        return this.instance.get(url, { params })
    }
    post(url: string, params?: any) {
        return this.instance.post(url, params)
    }
    put(url: string, params?: any) {
        return this.instance.put(url, params)
    }
    delete(url: string, params?: any) {
        return this.instance.delete(url, params)
    }
}

export default new Phone({
    baseURL: 'https://api.it120.cc/xiaochengxu/',
    // timeout: 1000,
});

