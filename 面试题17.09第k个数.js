/**
 * @param {number} k
 * @return {number}
 */
var getKthMagicNumber = function (k) {
    const arr = [1];
    let p3 = 0,
        p5 = 0,
        p7 = 0;
    while (arr.length < k) {
        let ans = arr[p3] * 3;
        ans = Math.min(ans, arr[p5] * 5);
        ans = Math.min(ans, arr[p7] * 7);
        if (ans === arr[p3] * 3) p3++;
        if (ans === arr[p5] * 5) p5++;
        if (ans === arr[p7] * 7) p7++;
        arr.push(ans);
    }
    return arr[k - 1];
};
