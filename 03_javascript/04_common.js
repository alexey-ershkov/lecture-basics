const numberArray = [1,2,3,4,5,6];

for (const number of numberArray) {
    if (numberArray[0] === number) {
        console.log(`${number} is first element in array`);
        continue;
    }

    if (number % 2 === 0) {
        console.log(`${number} is even number`);
    } else {
        console.log(`${number} is odd number`);
    }
}