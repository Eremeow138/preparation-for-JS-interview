//каждый объект имеет свой прототип который берется от родительского элемента от которого был создан данный объект

//__proto__

// Object.getPrototypeOf()

function Cat(name, color) {
  this.name = name;
  this.color = color;
}

Cat.prototype.voice = function () {
  console.log(`Cat ${this.name} says meow`);
};

const cat = new Cat('kot', 'black');

cat.voice();
