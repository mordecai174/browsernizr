var Modernizr = require('./../../lib/Modernizr');

/*!
{
  "name": "SVG filters",
  "property": "svgfilters",
  "caniuse": "svg-filters",
  "tags": ["svg"],
  "authors": ["Erik Dahlstrom"],
  "notes": [{
    "name": "W3C Spec",
    "href": "http://www.w3.org/TR/SVG11/filters.html"
  }]
}
!*/

  // Should fail in Safari: http://stackoverflow.com/questions/9739955/feature-detecting-support-for-svg-filters.
  Modernizr.addTest('svgfilters', function() {
    var result = false;
    try {
      result = typeof SVGFEColorMatrixElement !== undefined &&
        SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE == 2;
    }
    catch(e) {}
    return result;
  });

