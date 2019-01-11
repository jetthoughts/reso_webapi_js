const assert = require('assert');
const nock = require('nock');
const RESOWebApiClient = require('../../../lib/reso_web_api_client');
const client = new RESOWebApiClient('http://services.odata.org/V4/OData/OData.svc')

module.exports = function TestPostMethod() {
  describe('#delete()', () => {
    it('should return success status code', async () => {
      nock('https://services.odata.org/V4/OData/OData.svc')
        .persist()
        .delete(/.*/)
        .reply(200)
        .get(/.*/)
        .reply(200)

      const response = await client.remove('Products', { id: 1 })
      assert.equal(response.status, 200);
    });
  });
}
