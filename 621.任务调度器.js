/*
 * @lc app=leetcode.cn id=621 lang=javascript
 *
 * [621] 任务调度器
 */

// @lc code=start
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
    let codeList = new Array();
    for (let i = 0; i < tasks.length; i++) {
        const index = tasks[i].charCodeAt() - "A".charCodeAt();
        if (codeList[index]) {
            codeList[index] += 1;
        } else {
            codeList[index] = 1;
        }
    }
    codeList = codeList.sort((a, b) => a - b).filter((item) => item);
    let m = 0;
    for (
        let i = codeList.length - 1;
        i >= 0 && codeList[i] === codeList[codeList.length - 1];
        i--, m++
    );
    return Math.max(
        tasks.length,
        (codeList[codeList.length - 1] - 1) * (n + 1) + m
    );
};
// @lc code=end
