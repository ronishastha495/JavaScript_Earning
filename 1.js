const number = [1, 2, 3, 4, 5, 6, 7]

const newNums =  number.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)

console.log(newNums);

// const newNums =  number.map( () => ())