//Immediate Invoke Function Expression
let result = [];

for (var i = 0; i < 5; i++) {
  result.push(function () {
    console.log(i);
  });
}
result[2](); // 5
result[4](); // 5

let resultIIFE = [];

for (var i = 0; i < 5; i++) {
  (function () {
    var j = i;
    resultIIFE.push(function () {
      console.log(j);
    });
  })();
}

resultIIFE[2](); // 5
resultIIFE[4](); // 5
