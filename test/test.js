const assert = require('assert');
const nock = require('nock');
const mockedProducts = require('./mockedProducts');
const RESOWebApiClient = require('../reso_web_api_client');
const client = new RESOWebApiClient('http://services.odata.org/V4/OData/OData.svc', auth = {})

describe('GET methods', () => {
  describe('#get()', () => {
    it('should returns list of all Products', async () => {
      nock('https://services.odata.org/V4/OData/OData.svc')
        .get('/Products')
        .reply(200, {
          value: [
            {
              ID: 0,
              Name: 'Bread',
              Description: 'Whole grain bread',
              ReleaseDate: '1992-01-01T00:00:00Z',
              DiscontinuedDate: null,
              Rating: 4,
              Price: 2.5 
            },
            {
              ID: 1,
              Name: 'Milk',
              Description: 'Low fat milk',
              ReleaseDate: '1995-10-01T00:00:00Z',
              DiscontinuedDate: null,
              Rating: 3,
              Price: 3.5
            },
            {
              ID: 2,
              Name: 'Vint soda',
              Description: 'Americana Variety - Mix of 6 flavors',
              ReleaseDate: '2000-10-01T00:00:00Z',
              DiscontinuedDate: null,
              Rating: 3,
              Price: 20.9
            }
          ]
        });

      const response = await client.get('Products');
      assert.equal(response.status, 200);
      assert.deepEqual(response.data.value, mockedProducts.products);
    });
  });

  describe('#find_by()', () => {
    it('should returns a Coffee item', async () => {
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
  });
});
