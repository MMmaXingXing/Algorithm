/*
 * @lc app=leetcode.cn id=1249 lang=javascript
 *
 * [1249] 移除无效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    let num = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            num += 1;
        }
        if (s[i] === ")") {
            num -= 1;
        }

        if (num < 0 && (s[i] === "(" || s[i] === ")")) {
            num = 0;

            if (i === 0) {
                s = s.substring(1, s.length);
                i--;
                continue;
            }

            if (i === s.length - 1) {
                s = s.substring(0, i);
                continue;
            }

            s = s.substring(0, i) + s.substring(i + 1, s.length);
            i--;
        }
    }

    let len = s.length;
    let rightNum = 0;
    for (let j = len - 1; j >= 0; j--) {
        if (s[j] === ")") {
            rightNum += 1;
        }
        if (s[j] === "(") {
            rightNum -= 1;
        }

        if (rightNum < 0 && (s[j] === "(" || s[j] === ")")) {
            rightNum = 0;
            if (j === 0) {
                s = s.substring(1, s.length);
                continue;
            }
            if (j === s.length - 1) {
                s = s.substring(0, j);
                continue;
            }

            s = s.substring(0, j) + s.substring(j + 1, s.length);
        }
    }

    return s;
};
// @lc code=end
