function isPrime(num) {
  // start, stop, step
  for (let i = 2; i < num; i++) {
    // console.log(i, "i");
    if (num % i === 0) return false;
  }
  return true;
}

console.log("-----");

console.log(isPrime(11), "11");
console.log(isPrime(10), "10");
