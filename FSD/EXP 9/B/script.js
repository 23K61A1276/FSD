function getFactorial(num) {
    if (num < 0) return "Not defined";
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
    return fib.join(', ');
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
    return primes.join(', ');
}

function isPalindrome(num) {
    const str = num.toString();
    const reversed = str.split('').reverse().join('');
    return str === reversed ? "Palindrome" : "Not Palindrome";
}

function handleButtonClick(type) {
    const input = parseInt(document.getElementById("numberInput").value);
    let result = "";

    if (isNaN(input)) {
        result = "Please enter a valid number.";
    } else {
        switch (type) {
            case 'factorial':
                result = "Factorial: " + getFactorial(input);
                break;
            case 'fibonacci':
                result = "Fibonacci: " + getFibonacci(input);
                break;
            case 'prime':
                result = "Prime Numbers: " + getPrimes(input);
                break;
            case 'palindrome':
                result = isPalindrome(input);
                break;
        }
    }

    document.getElementById("result").innerText = result;
}
