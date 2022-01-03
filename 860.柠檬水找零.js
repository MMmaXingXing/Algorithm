/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    const arr = [];
    for (let i = 0; i < bills.length; i++) {
        if (i === 0 && bills[i] > 5) return false;
        if (bills[i] === 5) arr.unshift(5);
        if (bills[i] === 10) {
            if (arr[0] === 5) {
                arr.shift();
                arr.push(bills[i]);
            } else {
                return false;
            }
        }

        if (bills[i] === 20) {
            const idx = arr.findIndex((value) => value === 10);
            if (arr[0] === 5 && idx > 0) {
                arr.splice(idx, 1);
                arr.shift();
                continue;
            }

            if ((arr[0] === 5 && arr[1] === 5 && arr[2]) === 5) {
                arr.splice(0, 3);
                continue;
            }

            return false;
        }
    }

    return true;
};
// @lc code=end
