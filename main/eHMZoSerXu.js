function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function fibonacci(n) {
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}
function debounce(func, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function() {
    if (!lastRan) {
      func.apply(this, arguments);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(this, arguments);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
function uniqueArray(array) {
  return [...new Set(array)];
}
function convertToCamelCase(str) {
  return str.replace(/-./g, match => match[1].toUpperCase());
}
