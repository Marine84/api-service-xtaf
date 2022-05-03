import axios from 'axios'

const PublicReportingAPI = require('@reportportal/agent-js-mocha/lib/publicReportingAPI')
const log4js = require('log4js')
const logger = log4js.getLogger()
logger.level = 'debug'

const baseUrl: string = 'https://datausa.io/api/data?drilldowns=Nation&measures='

axios.defaults.baseURL = baseUrl

export function report(target: {} | any, property: PropertyKey, descriptor: PropertyDescriptor) {
  const originalFunction = descriptor.value
  descriptor.value = async function (...args: any[]) {
    PublicReportingAPI.log(
      'INFO',
      `${axios.defaults.baseURL + args[0].url}\n ${JSON.stringify(args[0], null, 2)}`
    )
    logger.debug(axios.defaults.baseURL + args[0].url, args)

    let result = await originalFunction.apply(this, args)
    console.log('args==', ...args)
    console.log('The return value is: ' + result)
    return result
  }
  return descriptor
}
