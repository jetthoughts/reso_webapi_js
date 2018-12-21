const assert = require('assert');
const nock = require('nock');
const RESOWebApiClient = require('../../../reso_web_api_client');
const client = new RESOWebApiClient('http://services.odata.org/V4/OData/OData.svc')

module.exports = function TestPostMethod() {
  describe('#post()', () => {
    it('should return success status code', async () => {
      nock('https://services.odata.org/V4/OData/OData.svc')
        .persist()
        .post(/.*/)
        .reply(200)
        .get(/.*/)
        .reply(200)

      const response = await client.send('Products', { '@odata.type': '#ODataDemo.FeaturedProduct', name: 'Example 1' })
      assert.equal(response.status, 200);
    });
  });
}
