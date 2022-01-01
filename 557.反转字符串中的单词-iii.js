/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const list = s.split(" ");
    for (let i = 0; i < list.length; i++) {
        let str = list[i].split("");
        for (let j = 0, q = str.length - 1; j < q; j++, q--) {
            const t = str[j];
            str[j] = str[q];
            str[q] = t;
        }
        list[i] = str.join("");
    }

    return list.join(" ");
};
// @lc code=end
