// функция замыкает в себе значения вышестоящего скоупа

function sayHelloTo(name) {
  const message = 'Hello ' + name;
  return function () {
    console.log(message);
  };
}

const helloToElena = sayHelloTo('Elena');

helloToElena();

const helloToIgor = sayHelloTo('Igor');

helloToIgor();

// практическое применение замыканий

function createFrameworkManager() {
  const fw = ['Angular', 'React'];

  return {
    print: function () {
      console.log(fw.join(' '));
    },
    add: function (framework) {
      fw.push(framework);
    },
  };
}

const manager = createFrameworkManager();

console.log(manager);
// console.log(fw); // ошибка, нету такой переменной
manager.print();
manager.add('Vue');
manager.print();

// пример с сет таймаутом

const fib = [1, 2, 3, 5, 8, 13];

for (var i = 0; i < fib.length; i++) {
  setTimeout(function () {
    console.log(`fib[${i}] = ${fib[i]}`);
  }, 1500);
}
for (var i = 0; i < fib.length; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(`fib[${j}] = ${fib[j]}`);
    }, 1500);
  })(i);
}
for (let i = 0; i < fib.length; i++) {
  setTimeout(function () {
    console.log(`fib[${i}] = ${fib[i]}`);
  }, 1500);
}
