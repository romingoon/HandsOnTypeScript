function oldEnough(age: number): never | boolean {
  if (age > 59) {
    throw new Error('Too old!');
  }
  if (age <= 18) {
    return false;
  }
  return true;
}

// console.log(oldEnough(16));
// console.log(oldEnough(25));
console.log(oldEnough(60));
