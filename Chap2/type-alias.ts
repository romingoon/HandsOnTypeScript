// 타입 별칭(type alias)
// 타입 별칭은 특정 타입이나 인터페이스를 참조할 수 있는 타입 변수를 의미한다.
// 타입 별칭은 type 키워드를 사용하여 만들 수 있다.
// 대부분의 경우에 별칭은 약간 복잡한 타입을 짧고 단순한 이름으로 변경하기 위해 사용

type Points = 20 | 30 | 40 | 50;
let score: Points = 30;
console.log(score);

type ComplexPerson = {
  name: string;
  age: number;
  birthday: Date;
  married: boolean;
  address: string;
};

function printPerson(person: ComplexPerson) {
  console.log(person);
}

const person1: ComplexPerson = {
  name: 'Tom',
  age: 25,
  birthday: new Date(),
  married: false,
  address: 'Seoul',
};

printPerson(person1);
