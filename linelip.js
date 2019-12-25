/** ! 
 * linelip.js V1.0.0 | MIT License | https://github.com/JasonSubMara/linelip
 * Copyright 2019, JasonSubMara <jie.yr127@gmail.com>
 * @description Multiline text overflow ellipsis
 * @param {Object} line.
 * @param {Object} element.
 */
function linelip(lineNum, tagele) {
	var eles = document.getElementsByClassName(tagele);
	var lineNum = lineNum || 2;	
	for (var i = 0; i<eles.length; i++) {
		var element = eles[i]
		var text = element.textContent;
		var totalTextLen = element.textContent.length;
		var baseWidth = window.getComputedStyle(element).width; 
		var baseFontSize = window.getComputedStyle(element).fontSize;
		var lineWidth = +baseWidth.slice(0,-2);
		var strNum = Math.floor(lineWidth/ +baseFontSize.slice(0,-2));
		var content = "";
		var totalStrNum = Math.floor(strNum * lineNum);
		var lastIndex = totalStrNum - totalTextLen;
		if (totalTextLen > totalStrNum) {
			content = text.slice(0, lastIndex - 1).concat("...");
		}else {
			content = text;
		}
		element.innerHTML = content;
	}
}