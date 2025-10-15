function getFactorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
}

function getFibonacci(num) {
    let fib = [0, 1];
    while (fib[fib.length - 1] + fib[fib.length - 2] <= num) {
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    return fib;
}

function getPrimes(num) {
    let primes = [];
    for (let i = 2; i <= num; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) primes.push(i);
    }
    return primes;
}

function isPalindrome(num) {
    const str = num.toString();
    return str === str.split('').reverse().join('');
}

// Test output
let number = 153;
console.log("Factorial:", getFactorial(number));
console.log("Fibonacci up to:", getFibonacci(number));
console.log("Prime numbers:", getPrimes(number));
console.log("Is Palindrome:", isPalindrome(number) ? "Yes" : "No");
