const object = {
    key: 'value',
    1: {
        inheritance: 'object'
    }
}

console.log(object);
console.log(JSON.stringify(object, null, 2))
