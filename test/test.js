const specs = require('./specs');

describe('GET methods', () => {
  for(const spec in specs) {
    if(spec.match('retrieveData'))
      specs[spec]();
  }
});

describe('POST, PUT, DELETE methods', () => {
  for(const spec in specs) {
    if(spec.match('changeData'))
      specs[spec]();
  }
});
