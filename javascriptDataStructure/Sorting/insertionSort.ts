const insertionSort = (arr: number[]) => {
    const len = arr.length;
    let temp, prevIndex;

    for (let i = 1; i < len - 1; i++) {
        temp = arr[i];
        prevIndex = i;
        while (prevIndex > 0 && arr[prevIndex - 1] > temp) {
            arr[prevIndex] = arr[prevIndex - 1];
            prevIndex--;
        }
        arr[prevIndex] = temp;
    }
    return arr;
};

console.log(insertionSort([5, 4, 6, 8, 2, 9]));
