import PinyinMatch from 'pinyin-match';
import { escapeRegExp } from 'lodash-es';

class XPinyinSearchAndHighlightKeyword {
  config = {
    color: '#FFFF00',
    tag: 'font'
  };

  constructor(config) {
    this.config.color = config.color || this.config.color;
    this.config.tag = config.tag || this.config.tag;
  }

  _getPYMatch(str, keyword) {
    return PinyinMatch.match(str, keyword);
  }

  highlight(str, keyword) {
    return str.replace(
      new RegExp(escapeRegExp(keyword), 'gi'),
      v => `<${this.config.tag} style="background: ${this.config.color};">${v}</${this.config.tag}>`
    );
  }

  search(str, keyword) {
    const backStr = {
      isMatch: true,
      originStr: str,
      highlightStr: ''
    };
    if (keyword) {
      const matchResult = this._getPYMatch(str, keyword);
      if (matchResult) {
        for (let i = 0; i < str.length; i++) {
          if (i === matchResult[0]) {
            backStr.highlightStr += `<${this.config.tag} style="background:${this.config.color}">${str[i]}`;
            if (matchResult[0] === matchResult[1]) {
              backStr.highlightStr += `</${this.config.tag}>`;
            }
          } else if (i === matchResult[1]) {
            backStr.highlightStr += `${str[i]}</${this.config.tag}>`;
          }
          if (!matchResult.includes(i)) {
            backStr.highlightStr += str[i];
          }
        }
      } else {
        backStr.isMatch = false;
      }
    }
    return backStr;
  }
}

export default XPinyinSearchAndHighlightKeyword;
