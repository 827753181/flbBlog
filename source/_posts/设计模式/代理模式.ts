function debounce(fn: Function, time: number) {
  let timeout = null;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), time);
  };
}
function throttle(fn: Function, time: number) {
  let date = 0;
  return (...args) => {
    if (date + time < Date.now()) {
      fn.apply(this, args);
      date = Date.now();
    }
  };
}

let debounceFn = debounce(() => console.log("debounce"), 1000);
debounceFn();
debounceFn();
debounceFn();
setTimeout(() => {
  debounceFn();
}, 1001);

let throttleFn = throttle(() => console.log("throttle"), 1000);
throttleFn();
throttleFn();
throttleFn();
setTimeout(() => {
  throttleFn();
}, 2003);
setTimeout(() => {
  throttleFn();
}, 1001);
