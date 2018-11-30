/* Example of GET requests */

(async function() {
  const RESOWebApiClient = require('./reso_web_api_client');
  const client = new RESOWebApiClient('http://services.odata.org/V4/OData/OData.svc', auth = {});

  try {
    const products_response = await client.get('Products');
    console.log(products_response.data.value);
    const product_response = await client.find_by('Products', { Name: 'Coffee' });
    console.log(product_response.data.value);
  } catch(error) {
    console.log(`Error: ${error.message}`)
  }

})();
