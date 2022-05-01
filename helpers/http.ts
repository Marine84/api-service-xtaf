import axios from "axios";
import * as repl from "repl";

const PublicReportingAPI = require("@reportportal/agent-js-mocha/lib/publicReportingAPI");
const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "debug";
const baseUrl: string =
  "https://datausa.io/api/data?drilldowns=Nation&measures=";

axios.defaults.baseURL = baseUrl;

export class HTTP {
  async getReq(configs: any) {
    const response = await axios(configs);
    PublicReportingAPI.log(
      "INFO",
      `${axios.defaults.baseURL + configs.url}\n ${JSON.stringify(
        configs,
        null,
        2
      )}`
    );
    PublicReportingAPI.log(
      "INFO",
      axios.defaults.baseURL + configs.url,
      configs
    );
    logger.debug(axios.defaults.baseURL + configs.url, configs);
    return response;
  }

  async getRe2q(
    configs: any,
    configs1: any,
    configs2: string,
    configs3: object,
    conf5igs: any,
    caonfigs: any,
    configas: any,
    coanfigs: any,
    cdonfigs: any
  ) {
    return;
  }
}
