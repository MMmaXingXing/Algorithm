/*
 * @lc app=leetcode.cn id=969 lang=javascript
 *
 * [969] 煎饼排序
 */

// @lc code=start
// 翻转数组前n位，并且更新idx列表
const reverse = (arr, n, idxList) => {
    for (let i = 0, j = n - 1; i < j; i++, j--) {
        const t = arr[j];
        arr[j] = arr[i];
        arr[i] = t;
        idxList[arr[i]] = i;
        idxList[arr[j]] = j;
    }
};
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function (arr) {
    const ret = [];
    const idxList = new Array(arr.length + 1);

    for (let i = 0; i < arr.length; i++) idxList[arr[i]] = i;
    for (let i = arr.length; i >= 1; i--) {
        if (idxList[i] === i - 1) continue;
        if (idxList[i] + 1 !== 1) {
            ret.push(idxList[i] + 1); // 翻转元素值从1开始
            reverse(arr, idxList[i] + 1, idxList);
        }

        if (i !== 1) {
            ret.push(i);
            reverse(arr, i, idxList);
        }
    }
    return ret;
};
// @lc code=end
