const RESOWebApiClient = require('./reso_web_api_client');

const client = new RESOWebApiClient('https://services.odata.org/V3/(S(fsb41nprwii3l3eo2dhgwecc))/OData/OData.svc', auth = {});

/* Example of GET requests */
(async function() {
  try {
    const products_response = await client.get('Products');
    console.log(products_response.data.value);
    const product_response = await client.find_by('Products', { Name: 'Coffee' });
    console.log(product_response.data.value);
  } catch(error) {
    console.log(`Error: ${error.message}`)
  }
})();

/* Example of POST requests */
(async function() {
  try {
    const products_response = await client.send('Products', { '@odata.type': '#ODataDemo.FeaturedProduct', name: 'Example 1' })
    console.log(products_response);
  } catch(error) {
    console.log(`Error: ${error.message}`)
  }
})();

/* Example of PUT requests */
(async function() {
  try {
    const products_response = await client.edit('Products', { id: 5, name: 'NewName' })
    console.log(products_response);
  } catch(error) {
    console.log(`Error: ${error.message}`)
  }
})();

/* Example of DELETE requests */
(async function() {
  try {
    const products_response = await client.remove('Products', { id: 5 })
    console.log(products_response);
  } catch(error) {
    console.log(`Error: ${error.message}`)
  }
})();
