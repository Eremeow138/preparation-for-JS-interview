// scope - область видимости

// глобальный скоуп - переменная объявлена вне функции и доступна во всех функциях скоупа

// локальный скоуп - переменная доступна внутри функции и дочерних

function funcA() {
  let a = 1;

  function funcB() {
    let b = 2;

    function funcC() {
      let c = 3;
      console.log('funcC: ', a, b, c);
    }
    console.log('funcB: ', a, b);
    funcC();
  }
  console.log('funcA: ', a);
  funcB();
}

funcA();
