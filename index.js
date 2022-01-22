//CHUNK SPLITTING CODE
const chunk = (arr, len) => {
  const res = [];
  for (let i = 0; i < arr.length; i += len) {
    res.push(arr.slice(i, i + len));
  }
  return res;
};

const flatten = (arr) => {
  return arr.reduce((acc, val) => {
    if (Array.isArray(val)) {
      acc = acc.concat(flatten(val));
    } else {
      acc = [...acc, val];
    }
    return acc;
  }, []);
};

const newArray = chunk([1, 2, 3, 4, 5, 6, 7], 3);

//chunking
console.log(newArray);

//flatten array
console.log(flatten(newArray));

//MEMOIZE FIBONACCI SERIES FUNCTION

const fib = (n) => (n <= 1 ? n : fib(n - 1) + fib(n - 2));

const memoize = (fn) => {
  const cache = [];

  return (...args) => {
    const key = JSON.stringify(args);

    if (key in cache) {
      return cache[key];
    }
    return (cache[key] = fn(...args));
  };
};

const memoizedFib = memoize(fib);
const memoizedChunk = memoize(chunk);
const memoizedflatten = memoize(flatten);
console.log(memoizedChunk([1, 2, 4, 5, 5, 6, 77, 8, 9], 4));
console.log(memoizedflatten(memoizedChunk([1, 2, 4, 5, 5, 6, 77, 8, 9], 4)));

console.log(memoizedFib(4));
