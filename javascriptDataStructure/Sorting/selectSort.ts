// 选择排序
const selectSort = (arr: number[]) => {
  const len = arr.length;
  let miniIndex, temp;
  for (let i = 0; i < len - 1; i++) {
    miniIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[miniIndex]) {
        miniIndex = j;
      }
    }

    temp = arr[i];
    arr[i] = arr[miniIndex];
    arr[miniIndex] = temp;
  }

  return arr;
};

console.log(selectSort([5, 4, 9, 5, 4, 6, 3, 2, 1, 2]));
