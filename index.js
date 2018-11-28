const RESOWebApiClient = require('./reso_web_api_client')

const client = new RESOWebApiClient('http://services.odata.org/V4/OData/OData.svc', auth = {})

/* Example of GET requests */

client.get('Products')
  .then(response => console.log(response.data.value))
  .catch(err => console.log(`Error: ${err.message}`))

client.find_by('Products', { Name: 'Coffee' })
  .then(response => console.log(response.data.value))
  .catch(err => console.log(`Error: ${err.message}`))
