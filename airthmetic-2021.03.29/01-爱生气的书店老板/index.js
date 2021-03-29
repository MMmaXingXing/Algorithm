const customer = [1,2,3,4,5,0,6];
const grumpy = [1,0,1,1,0,1,0,0];

const X = 3;

// all number = satisfied - grumpy

const maxSaticfied = function(customer, grumpy, x) {
    const grumpyList = customer.map((item, i) => item * grumpy[i]);

    let maxGrumpySize = -Infinity;
    let termGrumpSize = 0;
    for(let i = 0; i < grumpyList.length; i++) {
        termGrumpSize += i < X ? grumpyList[i] : grumpyList[i] - grumpyList[i - x];
        maxGrumpySize = Math.max(maxGrumpySize, termGrumpSize);
    }

    return sum(customer) - sum(grumpyList) + maxGrumpySize;

    function sum(arr) {
        return arr.reduce((acc, cur) => acc + cur, 0);
    }
}

console.log(maxSaticfied(customer, grumpy, X));
