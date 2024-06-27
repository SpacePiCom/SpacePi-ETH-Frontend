import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'

const env = import.meta.env
const config: AxiosRequestConfig = {
  baseURL: env.MODE === 'development' ? `/mid` : "",
  timeout: 30000,
  withCredentials: true
}
class httpRequest {
  service: AxiosInstance

  public constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config)

    this.service.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        return config
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      }
    )
    this.service.interceptors.response.use((config: AxiosResponse) => {
      if (config.status !== 200) return Promise.reject(config)
      return Promise.resolve(config.data)
    }),
      (error: AxiosError) => {
        return Promise.reject(error)
      }
  }
  get<T>(url: string, params?: T): Promise<any> {
    return this.service({
      method: 'get',
      url,
      params
    })
  }
  post<T>(url: string, data?: T): Promise<any> {
    return this.service({
      method: 'post',
      url,
      data
    })
  }
}

export default new httpRequest(config)
