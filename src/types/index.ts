export type Method = 'get' | 'GET' | 'delete' | 'Delete' | 'put' | 'PUT' | 'post' | 'POST'
export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
}
