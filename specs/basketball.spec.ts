import { assert } from "chai";
// @ts-ignore
// import { logger } from "../configs/winston";
const PublicReportingAPI = require("@reportportal/agent-js-mocha/lib/publicReportingAPI");
// import axios from 'axios';
// import * as AxiosLogger from 'axios-logger';
import { HTTP } from "../helpers/http";

const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "debug";

const configs = {
  url: "Population",
  headers: {
    "Content-Type": "application/json",
  },
  method: "get",
};

describe("Array", () => {
  const http = new HTTP();

  it("double done", async () => {
    // logger.info("marine test");
    // PublicReportingAPI.log('INFO', "start");
    // PublicReportingAPI.debug('INFO', "start");
    // PublicReportingAPI.info('INFO', "start");

    const response = await http.getReq(configs);
    // console.log("resp===", response)
    logger.debug(response.status);

    // const instance = axios.create({
    //     headers: { 'X-Custom-Header': 'foobar' },
    // });

    // const response = await instance.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population', {
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // });

    // console.log(response);
    assert.equal(response.status, 200);
  });
});
