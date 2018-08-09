module.exports = `
html {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

*, *:before, *:after {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}

html, body, h1, h2, h3, h4, h5, h6, p, ul, ol, blockquote, figure {
  margin: 0;
  padding: 0;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: normal;
  text-rendering: optimizeLegibility;
}

a {
  color: inherit;
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.0);
}

img,
svg,
canvas,
video {
  max-width: 100%;
  height: auto;
  vertical-align: top;
}
`.trim();
