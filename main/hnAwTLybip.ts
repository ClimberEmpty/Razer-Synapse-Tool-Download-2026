function debounce(func: Function, delay: number) {
 let timeoutId: ReturnType<typeof setTimeout>;
 return function(...args: any[]) {
   if (timeoutId) {
     clearTimeout(timeoutId);
   }
   timeoutId = setTimeout(() => {
     func.apply(this, args);
   }, delay);
 };
}

function throttle(func: Function, limit: number) {
 let lastFunc: ReturnType<typeof setTimeout>;
 let lastRan: number;
 return function(...args: any[]) {
   if (!lastRan) {
     func.apply(this, args);
     lastRan = Date.now();
   }
   clearTimeout(lastFunc);
   lastFunc = setTimeout(() => {
     if ((Date.now() - lastRan) >= limit) {
       func.apply(this, args);
       lastRan = Date.now();
     }
   }, limit - (Date.now() - lastRan));
 };
}

function uniqueArray<T>(arr: T[]): T[] {
 return Array.from(new Set(arr));
}

function deepClone<T>(obj: T): T {
 return JSON.parse(JSON.stringify(obj));
}

function mergeObjects<T>(target: T, ...sources: Partial<T>[]): T {
 return Object.assign(target, ...sources);
}

function isPalindrome(str: string): boolean {
 return str === str.split('').reverse().join('');
}

function factorial(n: number): number {
 if (n < 0) return -1;
 return n === 0 ? 1 : n * factorial(n - 1);
}

function fibonacci(n: number): number {
 return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

function randomInteger(min: number, max: number): number {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleArray<T>(array: T[]): T[] {
 for (let i = array.length - 1; i > 0; i--) {
   const j = Math.floor(Math.random() * (i + 1));
   [array[i], array[j]] = [array[j], array[i]];
 }
 return array;
}
