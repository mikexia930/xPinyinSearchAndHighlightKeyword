# x-pinyin-search-adn-highlight-keyword
>
>支持拼音搜索，关键词高亮显示。
>
>
[Demo](https://mikexia930.github.io/xPinyinSearchAndHighlightKeyword/)
## 版本
- v1.0.0

## 基于
- pinyin-match
- lodash

## 安装
```
npm install x-pinyin-search-and-highlight-keyword
```
或者
```
github下载源码
```

## 使用
**直接 script 引入**
```
<script src="lib/xpinyinsearchandhighlightkeyword.umd.js"></script>
```
#### Vue示例
**在 main.js 引入**
```
import XPinyinSearchAndHighlightKeyword from 'x-pinyin-search-and-highlight-keyword';
```

**获取实例**
```
const insConfig = {
  color: '#FFFF00',
  tag: 'font'
};

const PyHlk = new XPinyinSearchAndHighlightKeyword(insConfig);
```
| 参数  | 说明    |
|-----|-------|
| color   | 高亮的颜色 |
|  tag   |  高亮使用的标签     |


**数组场景**

用于搜索，保留符合条件的数据。例如下拉选择框或列表数据的快速匹配高亮，支持拼音搜索，只会匹配第一个合法的匹配。
```
PyHlk.getHighlightSearch(string, searchKeyword);
```

**文本场景**

用于文本里的关键词高亮，会全局匹配。不支持拼音。
```
PyHlk.hlkIns.highlight(string, searchKeyword);
```

| 参数  | 说明    |
|-----|-------|
| string   | 文本    |
|  searchKeyword   | 查询关键词 |
