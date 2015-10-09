# PostCSS Remify [![Build Status][ci-img]][ci]

[PostCSS] plugin This plugin will transform all rem( px ); declarations into it's rem equivalent..

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/EduardoRT/postcss-remify.svg
[ci]:      https://travis-ci.org/EduardoRT/postcss-remify

```css
.foo {
  font-size: rem( 16 );
}
```

```css
.foo {
  font-size: 1rem;
}
```

## Usage

```js
postcss([ require('postcss-remify') ])
```

See [PostCSS] docs for examples for your environment.
