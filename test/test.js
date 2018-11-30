const specs = require('./specs');

describe('GET methods', () => {
  for(const spec in specs) {
    specs[spec]();
  }
});
