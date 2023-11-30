class ClassA {
  static typeName: string;
  constructor() {}
  static getFullName() {
    return `ClassA name: ${ClassA.typeName}`;
  }
}

const aa = new ClassA();
console.log(ClassA.typeName);

class Runnner {
  static lastRunTypeName: string;
  constructor(private typeName: string) {}

  run() {
    Runnner.lastRunTypeName = this.typeName;
  }
}

const runnerA = new Runnner('RunnerA');
const runnerB = new Runnner('RunnerB');

runnerA.run();
runnerB.run();

console.log(Runnner.lastRunTypeName);
