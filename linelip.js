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
		var textarr = text.split("");
		console.log(textarr.length)
		/* 临时存放数值 */
		var num1 = 0;
		for (var j = 0; j < textarr.length; j ++){
			var regzn = new RegExp("[\\u4E00-\\u9FFF]+$","g");
			if(!regzn.test(textarr[j])) {
				/* 非中文字符*/
			  num1 = num1 + 1;
			}else {
				num1 = num1 + 2;
			}
		}
		/* 获取原文本内容长度 */
		var totalTextLen = num1;
		
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
		/* 定义最终文本容器可容纳文本长度--->统一转成英文字符计算 */
		var totalStrNum = (Math.floor(strNum * lineNum))*2;
		var lastIndex = totalTextLen - totalStrNum;
		/* 定义最终文本截取位置 */
		var lastplace = 11 - lastIndex;
		console.log(text)
		console.log(lastplace)
		if (totalTextLen > totalStrNum) {
			content = text.slice(0, lastplace).concat("...");
		}else {
			content = text;
		}
		console.log(content)
		element.innerHTML = content;
	}

}
