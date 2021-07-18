// мы можем вызвать функцию до того как мы её определили
console.log(sum(41, 1));

function sum(a, b) {
  return a + b;
}

console.log(sum(41, 1));

//==============

console.log(i); // undefined
var i = 42;
console.log(i); // 42

// переменные const и let не подвержены хостингу

// console.log(num); // undefined
// let num = 42;
// console.log(num); // 42

// Function Expression & Finction Declaration

// пример Function Declaration:
console.log(squareFD(25));

function squareFD(num) {
  return num ** 2;
}

// пример Function Expression:
// console.log(squareFE(36)); // Function Expression не подвержены хостингу, здесь будет ошибка
// мы можем использовать FE только после объявления
const squareFE = function (num) {
  return num ** 2;
};
console.log(squareFE(36));
