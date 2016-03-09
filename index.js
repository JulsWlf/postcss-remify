var postcss = require('postcss');

module.exports = postcss.plugin('postcss-remify', function (opts) {
    opts = opts || { base : 16, fallback : false };

    var convertToRem = function( expression ) {
      var base = opts.base;
      var exp = /rem\(([^)]+)\)/;

      var match = exp.exec( expression );
      var fallback = match[1] + 'px';
      var value = match[1] / base + 'rem';

      return { rem : value, fallback : fallback };
    };

    return function (css) {
      css.walkDecls( function (decl) {
        var exp = /rem\(([^)]+)\)/g;
        var matches = decl.value.match( exp );
        var fallback = decl.value;

        if (! matches) {
          return;
        }

        matches.forEach( function( match, index ) {
          var values = convertToRem( match );

          if (opts.fallback) {
            fallback = fallback.replace( match, values.fallback );
          }

          decl.value = decl.value.replace( match, values.rem );
        });

        if (opts.fallback) {
          decl.cloneBefore({
            prop  : decl.prop,
            value : fallback
          });
        }
      });
    };
});
