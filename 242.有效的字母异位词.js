/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    const mapper = new Map();
    for (let i in s) {
        if (mapper.get(s[i])) {
            mapper.set(s[i], mapper.get(s[i]) + 1);
        } else {
            mapper.set(s[i], 1);
        }
    }

    for (let j in t) {
        const tj = mapper.get(t[j]);
        if (!tj) return false;
        if (tj > 1) {
            mapper.set(t[j], tj - 1);
        }
        if (tj === 1) {
            mapper.delete(t[j]);
        }
    }
    if (mapper.size === 0) return true;
    return false;
};
// @lc code=end
