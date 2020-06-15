/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * 1. 要做判空处理，直接返回 ''
 * 2. 取最短字符串，最终结果长度肯定 <= 最短长度
 * 3. 取当前字符，和后几个字符串的当前位置字符比较，如果有不同，则匹配失败，直接返回结果
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";

  let minLength = Math.min(...strs.map((str) => str.length));
  let result = [];

  for (let i = 0; i < minLength; i++) {
    let char = strs[0][i]; // 取字符串

    for (let j = 0; j < strs.length; j++) {
      if (char !== strs[j][i]) {
        return result.join("");
      }
    }

    result.push(char);
  }

  return result.join("");
};
// @lc code=end
