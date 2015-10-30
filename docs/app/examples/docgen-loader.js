var docgen = require('react-docgen');

module.exports = function (input) {
  var doc = docgen.parse(input);
  return 'module.exports = ' + JSON.stringify(doc);
}