class Person2 {
  constructor(private msg: string) {}
  speak() {
    console.log(this.msg);
  }
}

const ahn = new Person2('hello');

// ahn.msg = 'hello';
ahn.speak();
