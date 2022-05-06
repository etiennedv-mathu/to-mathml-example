// a simple TeX-input example
var mjAPI = require("mathjax-node");
mjAPI.config({
  MathJax: {
      showMathMenu: false,
      tex2jax: {
          inlineMath: [['$', '$'], ["\\(", "\\)"], ['$$', '$$'], ],
          processEscapes: true,
          ignoreClass: "tex2jax_ignore"
      },
      jax: ["input/MathML", "input/TeX", "output/SVG"],

      extensions: ["MathEvents.js", "toMathML.js", "mml2jax.js"],

      TeX: {
          extensions: ["mhchem.js", "noErrors.js", "noUndefined.js", "autoload-all.js"],
          noErrors: { disabled: true },
          Macros: {
              RR: "{\\bf R}",
              bold: ["{\\bf #1}", 1]
          }
      },
      MathMl: {
          extensions: ["Mathcontent-mathml.js", "mml3.js"],
          noErrors: { disabled: true }
      },
      MathMenu: {
          showRenderer: false
      },
      messageStyle: "none",
      SVG: {
          blacker: 0,
          font: "Gyre-Pagella",
          linebreaks: {
              automatic: true,
              width: "container"
          },
          scale: 90,
          useFontCache: true,
          useGlobalCache: true,
          matchFontHeight: true
      }
    }
});
mjAPI.start();

var yourMath = '\\frac{xy^{-3}}{x^{4}y} = \\frac{1}{x^{3}y^{4}}';

// var yourMath = 'In the sketch: <br>\r(f(x)=-x^2+2 x+8\r) and \r(g(x)=x-4\r)';

mjAPI.typeset({
  math: yourMath,
  format: "TeX", // or "inline-TeX", "MathML"
  mml:true,      // or svg:true, or html:true
}, function (data) {
  if (!data.errors) {console.log(data.mml)}
});