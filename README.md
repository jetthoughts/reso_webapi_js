# reso_webapi_js

The RESO Web API JS provides a basic API client that supports the [OData](https://www.odata.org/) protocol as specified by the [RESO standards group](https://www.reso.org/).

## Installing

```bash
$ yarn add reso_webapi_js
```
## Setup

Import a client:
```javascript
const RESOWebApiClient = require('reso_webapi_js');
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

To add new item use `send` method:
```javascript
client.send('Products', { name: 'Example 1' })
  .then(response => console.log(response))
  .catch(err => console.log(`Error: ${err.message}`))
```

To change item data use `edit` method:
```javascript
client.edit('Products', { id: 5, name: 'NewName' })
  .then(response => console.log(response))
  .catch(err => console.log(`Error: ${err.message}`))
```

To delete item use `remove` method:
```javascript
client.remove('Products', { id: 5 })
  .then(response => console.log(response))
  .catch(err => console.log(`Error: ${err.message}`))
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

## Examples

Examples of the SDK usage are provided in the [example](example/basic.js) folder.

To run the example:
```bash
$ cd example
$ node basic.js
```

## Contributing

Bug reports and pull requests are welcome on: https://github.com/jetthoughts/reso_webapi_js.

Service for testing requests: [https://services.odata.org/V3/(S(fsb41nprwii3l3eo2dhgwecc))/OData/OData.svc/](https://services.odata.org/V3/(S(fsb41nprwii3l3eo2dhgwecc))/OData/OData.svc/).

## Tests

You can check how we test requests in the `test/specs` folder which contains tests for our library API. In the `test/mocks` folder we hold fake data for testing our requests.

If you want to add tests for existing API you just need to add **test case/file** in one of the following folders inside `specs`.

But if you want to add new API you need to create folder with appropriate name, put your test files and add test endpoint inside `test/test.js` file to make tests work.

## License

MIT
