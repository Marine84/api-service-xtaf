import axios, { AxiosRequestConfig } from 'axios'

const PublicReportingAPI = require('@reportportal/agent-js-mocha/lib/publicReportingAPI')
import logger from '../helpers/logger'

const baseUrl: string = 'https://datausa.io/api'
axios.defaults.baseURL = baseUrl

export function report(configs?: AxiosRequestConfig) {
  return function (target: {} | any, property: PropertyKey, descriptor: PropertyDescriptor) {
    const originalFunction = descriptor.value

    descriptor.value = async function (...args: any[]) {
      PublicReportingAPI.log(
        'INFO',
        `REQUEST: ${axios.defaults.baseURL + args[0]}\n OPTIONS: ${JSON.stringify(
          args[1],
          null,
          2
        )}`
      )

      logger.info(`REQUEST: ${axios.defaults.baseURL}${args[0]}`, args)

      const response = await originalFunction.apply(this, args)
      PublicReportingAPI.log(
        'INFO',
        `STATUS: ${response.status}\n RESPONSE: ${JSON.stringify(response.data)}`
      )

      logger.debug(`STATUS: ${response.status}`)
      logger.info(`RESPONSE: ${JSON.stringify(response.data)}`)

      return response
    }
    return descriptor
  }
}
