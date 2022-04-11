// a simple TeX-input example
var mjAPI = require("mathjax-node");
mjAPI.config({
  MathJax: {
    tex: {
      inlineMath: [['\\(', '\\)']]
    },
    options: {
      enableMenu: false
    }
  }
});
mjAPI.start();

var yourMath = '\\frac{xy^{-3}}{x^{4}y} = \\frac{1}{x^{3}y^{4}}';

mjAPI.typeset({
  math: yourMath,
  format: "TeX", // or "inline-TeX", "MathML"
  mml:true,      // or svg:true, or html:true
}, function (data) {
  if (!data.errors) {console.log(data.mml)}
});