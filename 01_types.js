//null, udefined, boolean, number, string, object, symbol

console.log(typeof 0);
console.log(typeof true);
console.log(typeof 'Javascript'); // "" '' ``
console.log(typeof undefined);
console.log(typeof {});
console.log(typeof Math);
console.log(typeof Symbol('JS'));

console.log(typeof null); // нул - это тип данных нул, но выведится обджект

console.log(typeof function () {}); // нету такого типпа данных как фанкшин. Тайп оф выводит для удобства фанкшин, но на самом деле функция - это объект

console.log(typeof NaN); // это число

// null отличается от indefined тем, что он задается явно

// приведение типов

let language = 'JavaScript';

if (language) {
  // строка приводится к булеву типу.
  console.log('The best language is ', language);
}

// false values: '', 0, null, undefined, NaN, false

console.log(Boolean('')); //false
console.log(Boolean('Hello')); //true
console.log(Boolean(' ')); //true
console.log(Boolean('0')); //true
console.log(Boolean(0)); //false
console.log(Boolean(null)); //false
console.log(Boolean([])); //true
console.log(Boolean({})); //true
console.log(Boolean(function () {})); //true

// Как работают строки и числа

console.log(1 + '2'); // приведение к строке, результат: string 11

console.log('' + 1 + 0); // result: string 10

console.log('' - 1 + 0); // number -1

console.log('3' * '8'); // number 24

console.log(4 + 10 + 'px'); // порядок важен string 14px
console.log('px' + 4 + 10); // порядок важен string px410

console.log('42' - 40); // number 2

console.log('42px' - 40); // NaN

console.log(null + 2); // number 2
console.log(null + '2'); // string null2

console.log(undefined + 42); // NaN
console.log(undefined + '42'); // string undefined42

// == vs ===

// двойное равно сравнивает с приведением типов, а тройное без приведения типов

console.log(2 == '2'); //true
console.log(2 === '2'); //false

console.log(undefined == null); // true
console.log(undefined === null); // false

// интерпритатор пытается привести к числу
console.log('0' == false); // true
console.log('0' == 0); // true

// ==== список неоднозначных сравнений

console.log(false == ''); // true
console.log(false == []); // true
console.log(false == {}); // false
console.log('' == 0); // true
console.log('' == []); // true
console.log('' == {}); // false
console.log(0 == []); //true
console.log(0 == {}); // false
console.log(0 == null); // false
