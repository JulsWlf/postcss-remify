var postcss = require('postcss');

module.exports = postcss.plugin('postcss-remify', function (opts) {
    opts = opts || { base : 16, fallback : false };

    if (typeof opts.base === 'undefined') {
      opts.base = 16;
    }

    if (typeof opts.fallback === 'undefined') {
      opts.fallback = false;
    }

    return function (css) {
        css.walkDecls( function (decl) {
            var base = opts.base;

            if (!decl.value || decl.value.indexOf('rem(') === -1) {
                return;
            }

            var index = decl.value.indexOf('(');
            var last = decl.value.indexOf(')');
            var last  = decl.value.indexOf(')');
            var value = decl.value.slice(++index, last);
            value     = value.match(/\d+/)[0];

            decl.value = value / base + 'rem';
        });
    };
});
