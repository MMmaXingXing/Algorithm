/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let stackS = [];
  let stackT = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#" && stackS.length > 0) {
      stackS.pop();
    }
    if (s[i] !== "#") {
      stackS.push(s[i]);
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (t[i] === "#" && stackT.length > 0) {
      stackT.pop();
    }
    if (t[i] !== "#") {
      stackT.push(t[i]);
    }
  }

  if (stackS.join("") === stackT.join("")) return true;
  return false;
};
// @lc code=end
