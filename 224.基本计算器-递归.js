/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let str = s.replace(/[\s()]*/g, "");
    const len = str.length;
    const stack = [1];
    let sign = 1;
    let i = 0;
    let result = 0;

    var getNum = (str) => {
        const len = str.length;
        let ops = [];
        for (let i = 0; i < len; i++) {
            if (ops) {
                
            }
        }
    };

    return result;
};
// @lc code=end
