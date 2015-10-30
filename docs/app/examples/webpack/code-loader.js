var highlightjs = require('highlight.js');

module.exports = function (input) {
  var code = input.replace(/\/\* real((.|[\n])*?)\*\/\n/g, '');
  code = code.replace(/\/\* example\n((.|[\n])*?)\*\/\n/g, function (match, code) {
    return code;
  });
  return 'module.exports = ' + JSON.stringify('<pre><code class="hljs">' + highlightjs.highlightAuto(code, ['javascript']).value + '</code></pre>');
}