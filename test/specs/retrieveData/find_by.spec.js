const assert = require('assert');
const nock = require('nock');
const mockedProducts = require('../../mocks/mockedProducts');
const RESOWebApiClient = require('../../../lib/reso_web_api_client');
const client = new RESOWebApiClient('http://services.odata.org/V4/OData/OData.svc')

module.exports = function TestFindByMehtod() {
  describe('#find_by()', () => {
    it('should return a Coffee item', async () => {
      nock('https://services.odata.org/V4/OData/OData.svc')
        .get('/Products')
        .query({ $filter: "Name eq 'Coffee'" })
        .reply(200, {
          value: [
            {
              '@odata.type': '#ODataDemo.FeaturedProduct',
              ID: 10,
              Name: 'Coffee',
              Description: 'Bulk size can of instant coffee',
              ReleaseDate: '1982-12-31T00:00:00Z',
              DiscontinuedDate: null,
              Rating: 1,
              Price: 6.99
            }
          ]
        });

      const response = await client.find_by('Products', { Name: 'Coffee' });
      assert.equal(response.status, 200);
      assert.deepEqual(response.data.value, [mockedProducts.coffee]);
    });

    it('should create filter string for config', () => {
      const config = { Name: 'Coffee' };
      assert.equal(client._create_filter_string_for(config), "Name eq 'Coffee'")

      config.Price = 5.65;
      assert.equal(client._create_filter_string_for(config), "Name eq 'Coffee' and Price eq '5.65'")
    });
  });
}
