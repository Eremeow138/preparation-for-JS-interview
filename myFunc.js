// myFunc('!', 4, -10, 34, 0) -> '4!-10!34!0`. How to implement?

function myFunc(symbol, ...elements) {
  return elements.join(symbol);
}

console.log(myFunc('!', 4, -10, 34, 0));
