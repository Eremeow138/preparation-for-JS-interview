const person = {
  name: 'Vitaliy',
};

function info(phone, email) {
  console.log(`Name ${this.name}, Телефон: ${phone}, email: ${email}`);
}
//demo
info();
info.bind(person)(1234, '@sgs/ru');
info.bind(person, 1234, '@sgs/ru')();

function bind(fn, context, ...rest) {
  const a = { ...context };
  const uniqId = Symbol('uniqId');

  a[uniqId] = fn;

  return function (...args) {
    const result = a[uniqId](...rest.concat(args));

    delete a[uniqId];

    return result;
  };
}
//1 simple way

// function bind(fn, context, ...rest) {
//   return fn.bind(context, ...rest);
// }

// bind(info, person)(1234, '@sgs/ru');
// bind(info, person, 1234)('@sgs/ru');
// bind(info, person, 1234, '@sgs/ru')();

// 2 way

function bind(fn, context, ...rest) {
  return function (...args) {
    const unicId = Date.now().toString();
    context[unicId] = fn;
    const result = context[unicId](...rest.concat(args));
    delete context[unicId];
    return result;
  };
}

// 3 way es5
// function bind(fn, context) {
//   const rest = Array.prototype.slice.call(arguments, 2);
//   return function () {
//     args = Array.prototype.slice.call(arguments);
//     return fn.apply(context, rest.concat(args));
//   };
// }

// es6
function bind(fn, context, ...rest) {
  return function (...args) {
    // return fn.apply(context, rest.concat(args));
    return fn.call(context, ...rest.concat(args));
  };
}
bind(info, person)(1234, '@sgs/ru');
bind(info, person, 1234)('@sgs/ru');
bind(info, person, 1234, '@sgs/ru')();

function call(fn, context, ...args) {
  const unicId = Date.now().toString();
  context[unicId] = fn;
  const result = context[unicId](...args);
  delete context[unicId];
  return result;
}

call(info, person, '1234', '@fdff');
