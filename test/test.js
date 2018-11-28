var assert = require('assert');
var axios = require('axios');
var nock = require('nock')

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

describe('Nock', function() {
  describe('#get()', function() {
    it('should returns a successful mocked response', function(done) {

      //specify the url to be intercepted
      nock('https://services.odata.org/V4/OData/OData.svc')
        //define the method to be intercepted
        .get('/Products')
        //respond with a OK and the specified JSON response
        .reply(200, {
          'message': 'This is a mocked response'
        });

      axios.get('https://services.odata.org/V4/OData/OData.svc/Products')
        .then(function (response) {
          assert.equal(response.status, 200);
          assert.equal(response.data.message, 'This is a mocked response');

          done();
        });
    });
  });
});
