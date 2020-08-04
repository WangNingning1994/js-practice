// 1.define symbol type
let foo = Symbol('foo');
console.log(foo);
console.log(typeof foo); // symbol
// 2.symbol types are guaranteed to be unique
let foo2 = Symbol('foo');
console.log(foo === foo2); // false
// 3.for in loop ignores symbol
let user = {
  name: 'Andy',
  age: 26,
  [Symbol('foo')]: 'fooVal',
  [Symbol('bar')]: 'barVal'
};
for (const key in user) {
  console.log(key); // only output name/age
}
// 4.Object.assign cloned all symbols
let clonedUser = Object.assign(user, { name: 'clonedOne' });
console.log(clonedUser);
// 5.global symbols
let id1 = Symbol.for('id');
let id2 = Symbol.for('id');
console.log(id1 === id2); // true
console.log(Symbol.keyFor(id1)); // id
// 6.System symbol
// 例如 Symbol.toPrimitive 作为 Object 的属性时会影响类型转换
Symbol.toPrimitive