# linelip

![](https://img.shields.io/github/license/JasonSubMara/linelip)
![](https://img.shields.io/github/stars/JasonSubMara/linelip)
![](https://img.shields.io/github/repo-size/JasonSubMara/linelip)

Multiline text overflow ellipsis


### Date 2020-01-02
> 更新说明：
>
> 原计算方式为：`行数 * 字体大小 = 总容纳字数`
> 
> 当 `总容纳字数 < 原文本总字数` 时，以省略号显示在文本末
> 
> 会出现一个问题，即英文或标点单位等出现时，计算的结果和可容纳的总字数存在偏差，导致其在不该出现省略号时出现了省略号。
> 现计算方式根据 `unicode` 编码来计算总数量，使其更为准确。融合了中英文出现的情况，让省略的位置相对显示得更适宜。

### Date 2020-01-16
> 更新说明：
>  
> 通过将内容文本进行转化，现可兼容中文及中英文混合文本内容的多行文本省略及显示省略号~