import { getLogger } from 'log4js'

const logger = getLogger()

class Logger {
  debug(message: any, ...args: any[]) {
    logger.level = 'debug'
    logger.debug(message, ...args)
  }

  info(message: string, ...args: any[]) {
    logger.level = 'info'
    logger.info(message, ...args)
  }
}

export default new Logger()
