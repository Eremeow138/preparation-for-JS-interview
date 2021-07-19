console.log('hello word'.repeat(3));

String.prototype.repeating = function (count) {
  if (!Number.isFinite(count) || count <= 0) return '';
  let result = this;
  console.log(this);
  while (count > 1) {
    result += ' ' + this;
    count--;
  }
  return result;
};

console.log('hello word'.repeating(3));
