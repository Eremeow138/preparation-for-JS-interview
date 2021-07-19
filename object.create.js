const person = Object.create(
  {},
  {
    name: {
      value: 'Erema',
      enumerable: true,
      writable: true,
      configurable: true,
    },
    birthYear: {
      value: 1993,
    },
    age: {
      get() {
        return new Date().getFullYear() - this.birthYear;
      },
      set() {
        console.log('Set age', value);
      },
    },
  }
);

const person2 = {
  name: 'Lesha',
  birthYear: 1997,
};

console.log(person);

for (const key in person) {
  console.log('Key', key);
}

console.log(person2);

for (const key in person2) {
  console.log('Key', key);
}

console.log(person.age);
