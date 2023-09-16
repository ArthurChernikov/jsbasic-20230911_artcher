function factorial(n) {
  let result = 1;
  if (n === 0 || n === 1) {
    return result;
  }
  if (n > 1) {
    let i = n;
    while (i >= 1) {
      result = result * i;
      i--;
    }
    return result;
  }
}

factorial(0);
factorial(1);
factorial(3);
factorial(5);