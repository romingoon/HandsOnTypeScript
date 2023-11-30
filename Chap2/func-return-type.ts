function runMore(distance: number): number {
  return distance + 10;
}

console.log(runMore(10));

// void 반환 예제

function eat(calories: number) {
  console.log(`I ate ${calories} calories`);
}

function sleepInHours(hours: number): void {
  console.log(`I slept ${hours} hours`);
}

let ate = eat(100);
console.log(ate, typeof ate);

let slept = sleepInHours(10);
console.log(slept, typeof slept);
// 함수 반환 타입은 변수 선언과 아주 유사함.
