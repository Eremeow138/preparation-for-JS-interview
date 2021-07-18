function periodOutput(period) {
  let count = period;
  const interval = setInterval(() => {
    console.log(`${count} after ${period}`);
    count += period;
    if (count > 10000) {
      clearInterval(interval);
    }
  }, period);
}

// function extendedPeriodOutput(period) {
//   if (period > 1000) {
//     return false;
//   }
//   setTimeout(() => {
//     console.log(`${period} after ${period}`);
//   }, period);

//   extendedPeriodOutput(period + period);
// }

// extendedPeriodOutput(100);

function extendedPeriodOutput(period) {
  let initialInterval = period;

  function recursionInterval(period) {
    if (period > 10000) {
      return false;
    }
    setTimeout(() => {
      console.log(`${period} after ${period}`);
    }, period);

    recursionInterval(period + initialInterval);
  }

  recursionInterval(period);
}

extendedPeriodOutput(1000);