// Import
const RESOWEbApiClient = require('../index');
// Create instance
const client = new RESOWEbApiClient('https://services.odata.org/V4/OData/OData.svc/');

async function Main() {
  const products_response = await client.get('Products');
  console.log(products_response.data.value);
}

Main();
