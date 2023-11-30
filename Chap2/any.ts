// let val: any = 5;
// val = 'Hello';
// val = new Array();
// val.doesnotexist(33);

// console.log(val);

let val: unknown = 5;
val = 'Hello';
val = new Array();
if (val instanceof Array) {
  val.push(33);
}

console.log(val);
