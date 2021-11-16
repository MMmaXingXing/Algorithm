const partitionSort = (arr: any[], left: number, right: number): number => {
  let pivot = left;
  let index = pivot + 1;
  for (let i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index);
      index++;
    }
  }
  swap(arr, pivot, index - 1);
  return index - 1;
};

const swap = (arr: any[], i: number, j: number) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const quickSort = (arr: any[], leftNum?: number, rightNum?: number) => {
  const len = arr.length - 1;
  let left = leftNum || leftNum === 0 ? leftNum : 0;
  let right = rightNum || rightNum === 0 ? rightNum : len;
  let partitionIndex: number;
  if (left < right) {
    partitionIndex = partitionSort(arr, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }

  return arr;
};

console.log(quickSort([5, 1, 6, 2, 3, 7, 9, 8]));
