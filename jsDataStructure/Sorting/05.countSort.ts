function countSort(arr: number[]) {
    const maxVal = Math.max(...arr);
    const bucketList = new Array(maxVal + 1);
    for (let i = 0; i < arr.length; i++) {
        const key = arr[i];
        const num = bucketList[key];
        if (num) {
            bucketList[key] = num + 1;
        } else {
            bucketList[key] = 1;
        }
    }

    let currentIndex = 0;
    for (let j = 0; j < maxVal + 1; j++) {
        while (bucketList[j]) {
            arr[currentIndex] = j;
            bucketList[j] = bucketList[j] - 1;
            currentIndex += 1;
        }
    }

    return arr;
}
console.log(countSort([2, 3, 4, 2, 5, 1, 6, 4, 7]));
