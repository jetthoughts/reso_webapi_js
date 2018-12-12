# reso_webapi_js


## Setup

Import a client:
```javascript
const RESOWebApiClient = require('./reso_web_api_client');
```
Initialize a client:
```javascript
const client = new RESOWebApiClient('http://services.odata.org/V4/OData/OData.svc', auth = {});
```
## API

To get items list of some entity use `get` method:
```javascript
client.get('Products')
  .then(response => console.log(response.data.value))
  .catch(err => console.log(`Error: ${err.message}`))
```
To find some item by attribute from entity list, use `find_by`:
```javascript
client.find_by('Products', { Name: 'Coffee' })
  .then(response => console.log(response.data.value))
  .catch(err => console.log(`Error: ${err.message}`))
```
OR if you are using `async/await`:
```javascript
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
```
## Basic Authentication

To secure an oData Web API calls using basic authentication over HTTPS you need to pass the second parameter in your client instance:
```javascript
  const client = new RESOWebApiClient(
    'http://services.odata.org/V4/OData/OData.svc',
    {
      username: 'xxxxxxxxxxxxx',
      password: 'xxxxxxxxxxxxx'
    }
  );
```

## Development

Service for testing requests: [https://services.odata.org/V4/OData/OData.svc/Products](https://services.odata.org/V4/OData/OData.svc/Products)
