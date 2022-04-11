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

var yourMath = 'Use trial and error to find the value of \( x \) correct to \( 2 \) decimal places \( 4^x=44 \) .';

mjAPI.typeset({
  math: yourMath,
  format: "TeX", // or "inline-TeX", "MathML"
  mml:true,      // or svg:true, or html:true
}, function (data) {
  if (!data.errors) {console.log(data.mml)}
});