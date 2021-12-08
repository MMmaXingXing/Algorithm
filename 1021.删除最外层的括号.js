/*
 * @lc app=leetcode.cn id=1021 lang=javascript
 *
 * [1021] 删除最外层的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let str = "";
    for (let i = 0, pre = 0, end = 0; i < s.length; i++) {
        if (s[i] === "(") end += 1;
        if (s[i] === ")") end -= 1;
        if (end === 0) {
            str += s.slice(pre + 1, i);
            pre = i + 1;
        }
    }
    return str;
};
// @lc code=end
