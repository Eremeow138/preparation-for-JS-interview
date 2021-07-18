// контекст определяет как функция была вызвана

const person = {
  surname: 'Stark',
  knowns: function (what, name) {
    console.log(`You know ${what}, ${name} ${this.surname}`);
  },
};

const john = {
  surname: 'Snow',
};

person.knowns('everythink', 'Bran');

person.knowns.call(john, 'never', 'John');
person.knowns.apply(john, ['never', 'John']);
person.knowns.call(john, ...['never', 'John']);
person.knowns.bind(john, ...['never', 'John'])();

function Person(name, age) {
  this.name = name;
  this.age = age;
  console.log(this);
}

const elena = new Person('Elena', 20);

// явный байндинг

function logThis() {
  console.log(this);
}

const obj = {
  a: 42,
};

logThis.apply(obj);
logThis.call(obj);
logThis.bind(obj)();

//неявный байндинг

const animal = {
  legs: 4,
  logThis: function () {
    console.log(this);
  },
};

animal.logThis();

// стрелочные функции
// через фанкшин создается контекст
// стрелочная функция не создает контекст
function Cat(color) {
  this.color = color;
  console.log('This', this);
  (() => console.log('Arrow this', this))();
}

new Cat('red');
