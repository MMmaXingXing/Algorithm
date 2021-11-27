/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    const getNext = (n) => {
        let nextNum = 0;
        while (n) {
            nextNum += (n % 10) * (n % 10);
            n = Math.floor(n / 10);
        }
        return nextNum;
    };

    let start = n,
        next = getNext(n);
    do {
        start = getNext(start);
        next = getNext(getNext(next));
    } while (start !== next && next != 1);
    return next === 1;
};
// @lc code=end
