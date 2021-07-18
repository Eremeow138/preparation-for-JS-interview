//Let
let a = 'variable a';
let b = 'variable b';
// let доступна только в рамках скоупа
{
  a = 'new Variable A';
  let b = 'Local variable B';

  console.log('Scope A', a); //Scope A new Variable A
  console.log('Scope B', b); //Scope B Local variable B
}

// переменная а была изменена

console.log('A:', a); // A: new Variable A
console.log('B:', b); //B: variable b

// Const

const PORT = 8080;
PORT = 2000; // ошибка

// но содержимое массивов и объектов менять можно

const arr = [1, 2, 3];
arr.push(4);
console.log(arr);

const obj = {};
obj.name = 'Alexei';
obj.old = 20;
