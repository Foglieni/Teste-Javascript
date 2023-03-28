let num = 13; // número a ser verificado

let fib1 = 0;
let fib2 = 1;
let fib;

while (fib2 < num) {
  fib = fib1 + fib2;
  fib1 = fib2;
  fib2 = fib;
}

if (fib2 === num) {
  console.log(num + " pertence à sequência de Fibonacci.");
} else {
  console.log(num + " não pertence à sequência de Fibonacci.");
}
