/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length == 0) return [];
  const res = [];
  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const dfs = (curStr, i) => {
    // curStr 是当前字符串，i 是扫描的指针
    if (i > digits.length - 1) {
      // 指针越界，递归的出口
      res.push(curStr); // 将解推入 res
      return; // 结束当前递归分支，进入另一个递归分支
    }
    const letters = map[digits[i]]; // 当前数字对应有哪些字母
    for (const l of letters) {
      // 不同的字母选择代表不同的递归分支
      dfs(curStr + l, i + 1); // 生成新字符串，i 指针右移，递归
    }
  };
  dfs("", 0); // 递归的入口，初始字符串为''，指针为 0
  return res;
};
// @lc code=end
