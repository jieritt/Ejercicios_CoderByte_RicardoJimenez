function FirstFactorial(num) { 
    return num === 0 ? 1 : num*FirstFactorial(num-1);
}

console.log(FirstFactorial(6));
