/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 */

// @lc code=start

const has_repate = (str) => {
    const codeMap = new Array(26);
    const startCode = "a".charCodeAt();

    for (let i = 0; i < str.length; i++) {
        const idx = str[i].charCodeAt() - startCode;
        if (codeMap[idx]) {
            codeMap[idx] += 1;
        } else {
            codeMap[idx] = 1;
        }

        if (codeMap[idx] >= 2) return true;
    }
    return false;
};
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
    if (s.length !== goal.length) return false;
    if (s === goal) return has_repate(s);
    let i = 0,
        j;
    while (s[i] === goal[i]) ++i;
    j = i + 1;
    // "acccccb"
    // "bccccca"
    while (j < s.length && s[j] === goal[j]) ++j;
    if (j === s.length) return false;
    if (s[i] !== goal[j] || goal[i] !== s[j]) return false;
    j += 1;
    while (j < s.length) {
        if (s[j] !== goal[j]) return false;
        j += 1;
    }

    return true;
};
// @lc code=end
