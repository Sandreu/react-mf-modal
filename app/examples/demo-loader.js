module.exports = function (input) {
  var code = input.replace(/\/\* example((.|[\n])*?)\*\/\n/g, '');
  code = code.replace(/\/\* real\n((.|[\n])*?)\*\/\n/g, function (match, code) {
    return code;
  });
  return code;
}