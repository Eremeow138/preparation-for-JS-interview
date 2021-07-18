// примитивные типы передают значения
let a = 42;

let b = a;

b++;

console.log('a ', a);
console.log('b ', b);

// вычисляемые типы передают ссылку

let arrA = [1, 2, 3];

let arrB = arrA;

let arrС = arrB.concat();

arrB.push(4);

console.log('arrA ', arrA);
console.log('arrB ', arrB);
console.log('arrC ', arrС);

// если сравнивать вычисляемые типы, то будет происходить сравнение по ссылке
console.log(arrA === arrB); // true
console.log(arrA === arrA.concat()); // false
