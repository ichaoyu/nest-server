const moduleGenerator = require('./plop/module/prompt.cjs');
const entityGenerator = require('./plop/entity/prompt.cjs');

module.exports = function (plop) {
  plop.setGenerator('module', moduleGenerator);
  plop.setGenerator('entity', entityGenerator);
};
