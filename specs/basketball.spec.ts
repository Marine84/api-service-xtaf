import { assert } from 'chai';
// @ts-ignore
import { logger } from "../configs/winston";
const PublicReportingAPI = require('@reportportal/agent-js-mocha/lib/publicReportingAPI');
import axios from 'axios';
import * as AxiosLogger from 'axios-logger';

const instance = axios.create();



describe('Array', () => {
    it('double done', async () => {
        // logger.info("marine test");
        PublicReportingAPI.log('INFO', "start");

        const instance = axios.create({
            headers: { 'X-Custom-Header': 'foobar' },
        });
        PublicReportingAPI.log('INFO', instance.interceptors.request.use(AxiosLogger.requestLogger));
        PublicReportingAPI.log('INFO', instance.interceptors.response.use(AxiosLogger.responseLogger));

        const response = await instance.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population', {
            headers: {
                'Content-Type': 'application/json'
            }
        });


        // console.log(response);
        assert.equal(response.status, 200);
    });
});