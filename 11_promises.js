// Callback - функция, которую мы передаем другой функции в качестве параметра. Через некоторое время Callback вызывается с результатами работы главной функции.
// asyncMethod(payload, (data) => {
//   ...data
//   asyncMethod(payload2, () => {

//   })
// })

// loadScript('1.js', function (error, script) {
//   if (error) {
//     handleError(error);
//   } else {
//     // ...
//     loadScript('2.js', function (error, script) {
//       if (error) {
//         handleError(error);
//       } else {
//         // ...
//         loadScript('3.js', function (error, script) {
//           if (error) {
//             handleError(error);
//           } else {
//             // ...
//           }
//         });
//       }
//     });
//   }
// });

// const p = new Promise((resolve, reject) => {
//   console.log('setTimeout started');
//   setTimeout(() => {
//     console.log('setTimeout ended');
//     resolve({ status: 'OK' });
//   }, 2000);
// });

// p.then((data) => {
//   console.log(data);
//   return new Promise((resolve, reject) => {
//     resolve(data);
//   });
// })
//   .then((data) => console.log(data))
//   .catch((error) => console.error(`error: ${error}`))
//   .finally(() => console.log('finally'));

// fetch('http//', params)
//   .then((res) => {
//     return fetch('http//', params);
//   })
//   .then()
//   .catch();

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
};

delay(1000).then((ms) => console.log(`After ${ms}ms`));
delay(2000).then((ms) => console.log(`After ${ms}ms`));

Promise.all([delay(1000), delay(2000)]).then((result) => {
  console.log(`After ${Math.max(...result)}ms`);
});
