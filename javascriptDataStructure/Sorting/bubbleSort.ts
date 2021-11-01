// 冒泡
const bubbleSort = (arr: number[]) => {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

console.log(bubbleSort([1, 3, 5, 7, 4, 8, 6, 9]));
