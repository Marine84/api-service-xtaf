import axios, { AxiosRequestConfig } from 'axios'
import { report } from './reporting'

export class HTTP {
  @report()
  getReq(url: string, configs: AxiosRequestConfig) {
    return axios.get(url, configs)
  }
}
