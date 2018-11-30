const fs = require('fs');
const path = require('path');
const normalizedPath = path.join(__dirname);

const getDirectories = srcpath =>
  fs.readdirSync(srcpath)
    .map(file => path.join(srcpath, file))
    .filter(path => fs.statSync(path).isDirectory())

getDirectories(normalizedPath).forEach(dir => {
  fs.readdirSync(dir).forEach(file => {
    const testFunction = require(`${dir}/${file}`);
    const testFunctionName = `${path.basename(dir)}/${file}`;

    exports[testFunctionName] = testFunction;
  });
});
