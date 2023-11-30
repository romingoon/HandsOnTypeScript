namespace A {
  class FirstClass {}
}

namespace B {
  class SecondClass {
    test = new FirstClass(); // Error: Cannot find name 'FirstClass'
  }
}
