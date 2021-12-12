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
    const stackS = [];
    const stackT = [];

    for (let i = 0; i < s.length; i++) {
        if (stackS.length > 0 && s[i] === "#") {
            stackS.pop();
        } else if (s[i] !== "#") {
            stackS.push(s[i]);
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (stackT.length > 0 && t[i] === "#") {
            stackT.pop();
        } else if (t[i] !== "#") {
            stackT.push(t[i]);
        }
    }

    return stackS.join("") === stackT.join("");
};
// @lc code=end
