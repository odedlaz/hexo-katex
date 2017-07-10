var katex = require('katex');
var options = [
  {
    pattern : new RegExp(/\$\$[^$]+\$\$/, 'mg'),
    left : "$$",
    right : "$$",
    display : false
  },
];

function filter(data) {
  options.forEach(function(opt) {
    data.content = data.content.replace(opt["pattern"], function(s) {
      var formula = s.slice(opt["left"].length, -1 * opt["right"].length);
      return katex.renderToString(formula.trim(), opt);
    });
  });

  return data;
}

hexo.extend.filter.register('before_post_render', filter);
