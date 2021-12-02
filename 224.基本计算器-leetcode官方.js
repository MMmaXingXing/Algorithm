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
  const calc = (str, l, r) => {
    if (l === r) return 0;
    let op = -1; // 存储权限最低操作符的位置
    let pri = 10000; // 中间值，中间运算符优先级
    let cur_pri = 0; // 当前操作运算符
    let temp = 0; // 额外增加优先级

    for (let i = l; i <= r; i++) {
      cur_pri = 10000;
      switch (str[i]) {
        case "+":
        case "-":
          cur_pri = 1 + temp;
          break;
        case "*":
        case "/":
          cur_pri = 2 + temp;
          break;
        case "(":
          temp += 100;
          break;
        case ")":
          temp -= 100;
          break;
      }

      if (cur_pri <= pri) {
        pri = cur_pri;
        op = i;
      }
    }

    if (op === -1) {
      let num = 0;
      for (let i = l; i <= r; i++) {
        if (str[i] < 0 || str[i] > 9) continue;
        num = num * 10 + Number(str[i]) || 0;
      }
      return num;
    }
    console.log(op - 1);
    console.log(op + 1);

    const a = calc(str, l, op - 1);
    const b = calc(str, op + 1, r);

    switch (str[op]) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
    }
    return 0;
  };
  return calc(str, 0, len);
};
// @lc code=end
