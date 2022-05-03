import axios from 'axios'
import { report } from './reporting'

export class HTTP {
  constructor() {}

  @report
  getReq(configs: any) {
    return axios(configs)
  }
}
