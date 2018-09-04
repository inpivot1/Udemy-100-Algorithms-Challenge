<<<<<<< HEAD
function absoluteValuesSumMinimization(a){
    const isEven = a.length % 2 === 0;
    return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]))
=======
function absoluteValuesSumMinimization(a){
    const isEven = a.length % 2 === 0;
    return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]))
>>>>>>> 7fe8a91a76607122c07506c310e6eac86a12b0c4
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]))