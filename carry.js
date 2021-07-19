function add(a) {
  let currentSum = a;

  function cary(b) {
    currentSum += b;
    return cary;
  }

  cary[Symbol.toPrimitive] = () => {
    return currentSum;
  };
  return cary;
}

console.log(add(5)(9)(-4)(1));
