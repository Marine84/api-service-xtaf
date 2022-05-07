import { assert } from 'chai'
import { HTTP } from '../helpers/http'

//TODO
const url = '/data'
const configs = {
  params: {
    drilldowns: 'Nation',
    measures: 'Population',
  },
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'get',
}

describe('Array', () => {
  const http = new HTTP()

  it('double done', async () => {
    const response = await http.getReq(url, configs)

    assert.equal(response.status, 200)
  })
})
