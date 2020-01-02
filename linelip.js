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
		/* 获取原文本 */
		var text = element.textContent;
		/* 获取原文本内容长度 */
		var totalTextLen = element.textContent.length;
		/* 获取文本容器宽度 */
		var baseWidth = window.getComputedStyle(element).width; 
		/* 获取文本字体大小 */
		var baseFontSize = window.getComputedStyle(element).fontSize;
		/* 获取单行文本宽度 >> 即文本容器宽度css属性值转换成数字 */
		var lineWidth = +baseWidth.slice(0,-2);
		/* 获取单行文本内容个数 */
		var strNum = Math.floor(lineWidth/ +baseFontSize.slice(0,-2));
		/* 定义最终输出内容 */
		var content = "";
		/* 定义最终文本容器可容纳文本长度 */
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
