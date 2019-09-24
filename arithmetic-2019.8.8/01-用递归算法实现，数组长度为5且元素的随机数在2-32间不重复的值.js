function getRandom() {
    return Math.floor(Math.random() * 30 + 2);
}

let arryLen = 5;

function getArray(value, arr = []) {
  if (arr.length >= arryLen) return arr;

  if (!arr.includes(value)) {
    arr.push(value);
  }

  return getArray(getRandom(), arr); // O(1) O(n)
  // 尾调用优化 直接用内层函数的调用记录，取代外层函数的调用记录就可以了。
}

const arrayVal = getArray(getRandom());
// console.log(arrayVal);

// 法1:
// 可以拆解为四小项：

// 生成一个长度为5的空数组 arr
// 生成一个（2－32）之间的随机整数 rand
// 把随机数 rand 插入到数组 arr 内，如果数组 arr 内已存在与 rand 相同的数字，则重新生成随机数 rand 并插入到 arr 内 [需要使用递归实现，不能使用 for/while 等循环]
// 最终输出一个长度为5，且内容不重复的数组 arr

function getRandom(start, slip) {
  return Math.floor((Math.random() * (30 - slip)) + start);
}

let arryLen = 5;
function getArray(prev ,arr = []) {
  if (arr.length >= arryLen) return arr;
  let currentRandomValue = getRandom(prev, arryLen - arr.length);
  console.log(currentRandomValue);
  arr.push(currentRandomValue);
  
  return getArray(currentRandomValue + 1, arr);
}

const arrayVal = getArray(getRandom(2, arryLen));