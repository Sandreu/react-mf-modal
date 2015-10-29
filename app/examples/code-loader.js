var highlightjs = require('highlight.js');

module.exports = function (input) {
  var code = input.replace(/\/\* real(.|[\n])*\*\//mg, '');
  code = code.replace(/\/\* example(?:(.|[\n])*)\*\//mg, function (match) {
    console.log(arguments);
    console.log(match.replace(['\/* example', '*/'], ['', '']))
    return match.replace(['\/* example\n', '*/\n'], '');
  });
  return 'module.exports = ' + JSON.stringify('<pre><code class="hljs">' + highlightjs.highlightAuto(code, ['javascript']).value + '</code></pre>');
}