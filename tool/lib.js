/*
 * Uses svg.js (or other canned library);
 * implements function that returns result data.
 * Does not monkey with document/DOM if possible.
 */

// seems difficult to generate an SVG in javascript
// without a reference to a browser's document object
// I'd like to do so for cli nodejs mode, but might be tough.
function doit(id) {
	var draw = SVG(id).size(300, 300);
	var rect = draw.rect(100, 100).attr({ fill: '#f06' });
	return draw;
};

function makeSVG() {
	var text = '<svg xmlns:xlink="http://www.w3.org/1999/xlink" height="300" width="300" version="1.1" xmlns="http://www.w3.org/2000/svg" id="SvgjsSvg1000"><rect fill="#ff0066" height="100" width="100" id="SvgjsRect1006"></rect><defs id="SvgjsDefs1001"></defs></svg>';
	return text;
};
