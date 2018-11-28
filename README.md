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
## Development

Service for testing requests: [https://services.odata.org/V4/OData/OData.svc/Products](https://services.odata.org/V4/OData/OData.svc/Products)
