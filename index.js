var postcss = require('postcss');

module.exports = postcss.plugin('postcss-remify', function (opts) {
    opts = opts || {};

    return function (css) {
        css.walkDecls( function (decl) {
            var base = 16;

            if (!decl.value || decl.value.indexOf('rem(') === -1) {
                return;
            }

            var index = decl.value.indexOf('(');
            var last = decl.value.indexOf(')');
            var value = decl.value.slice(++index, last);

            decl.value = value / base + 'rem';
        });
    };
});
